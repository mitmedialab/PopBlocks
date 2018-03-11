#!/usr/bin/env python
"""
https://gist.github.com/bradmontgomery/2219997
Very simple HTTP server in python.
Usage::
    ./dummy-web-server.py [<port>]
Send a GET request::
    curl http://localhost
Send a HEAD request::
    curl -I http://localhost
Send a POST request::
    curl -d "foo=bar&bin=baz" http://localhost
"""
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
from datetime import datetime
import SocketServer

everything = ""

class Group:
    def __init__(self, gid=-1):
        self.id = gid
        self.activities_explored = []
        self.current_activity = ""
        self.last_active = 0
        self.interactions = []

    def process_interaction(self, nt):
        data = nt.split('\t')
        # Double check id
        if data[0] == (str(self.id)):
            self.interactions.insert(0,nt)
            # Add date
            self.last_active = datetime.fromtimestamp(int(data[1][5:])/1000)
            # Update current actibity
            self.current_activity = data[2]
            # Update activities explored
            if self.current_activity not in self.activities_explored:
                self.activities_explored.append(self.current_activity)
            return "OK"
        return "Whoops"
    
    def getInteractionsHTML(self):
        h = '<div id="g' + self.id + 'interactions" style="overflow:scroll;max-height:300px;">'
        for interaction in self.interactions:
            h += interaction + '<br/>'
        h += '</div>'
        return h
        
    def getIdHTML(self):
        return '<h1>' + self.id + '</h1>'
       
    def getStatusHTML(self):
        a = ''
        for activity in self.activities_explored:
            a += activity + ' '
        return '<h2>Current Activity: ' + self.current_activity + '<br/>Last Active: ' + self.last_active.strftime('%m/%d %H:%M') + '<br/>Activities Explored: ' + a + '</h2>'
            
    def getHTML(self):
        h = '<div>'
        h += self.getIdHTML()
        h += self.getStatusHTML()
        h += self.getInteractionsHTML()
        h += '</div>'
        return h
    
class Participant:
    tests = ['Test:1', 'Test:2', 'Test:3', 'Test:4']
    test_questions = {'Test:1':5, 'Test:2':7, 'Test:3':8, 'Test:4':6}
    def __init__(self, pid=-1):
        self.id = pid
        self.current_test = ""
        self.last_active = 0
        self.answers = {}
        self.interactions = []

    def process_interaction(self, nt): # nt = interaction
        data = nt.split('\t')
        # Double check id
        if data[0] == (str(self.id)):
            self.interactions.insert(0,nt) # add interaction to front of list
            # Add date
            self.last_active = datetime.fromtimestamp(int(data[1][5:])/1000)
            self.current_test = data[2] + ' ' + data[3]
            self.answers[self.current_test] = int(data[4][7:-1])
            
            return "OK"
        return "Whoops"
    
    def getInteractionsHTML(self):
        h = '<div id="p' + self.id + 'interactions" style="overflow:scroll;max-height:300px;">'
        for interaction in self.interactions:
            h += interaction + '<br/>'
        h += '</div>'
        return h
        
    def getIdHTML(self):
        return '<h1>' + self.id + '</h1>'
       
    def getStatusHTML(self):
        a = '<div>'
        for test in self.tests:
            a += test + '&nbsp;'
            for q in range(self.test_questions[test]):
                name = test + ' Page:' + str(q)
                if name in self.answers.keys():
                    a += str(self.answers[name]) + '&nbsp;'
                else:
                    a += '-&nbsp;'
            a += '<br/>'
        a += '</div>'
        return '<h2>Current Test:' + self.current_test + '<br/>Last Active:' + self.last_active.strftime('%m/%d %H:%M') + '<br/>Answers:</h2>' + a
            
    def getHTML(self):
        h = '<div>'
        h += self.getIdHTML()
        h += self.getStatusHTML()
        h += self.getInteractionsHTML()
        h += '</div>'
        return h

class S(BaseHTTPRequestHandler):
    groups = {}
    participants = {}
    
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        self.wfile.write(self._update_site())

    def do_HEAD(self):
        self._set_headers()
        
    def do_POST(self):
        self._set_headers()
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        result = self._process_data(post_data)
        self.wfile.write(result)
    
    def _process_data(self, data):
        global everything
        print(data)
        if data[0] == 'G': # process group data
            features = data.split('\t')
            group_id = features[0]
            if group_id not in self.groups:
                self.groups[group_id] = Group(group_id)
            result = self.groups[group_id].process_interaction(data)
            
        elif data[0] == 'P': # process participant data
            features = data.split('\t')
            pid = features[0]
            if pid not in self.participants:
                self.participants[pid] = Participant(pid)
            result = self.participants[pid].process_interaction(data)
            
        everything = self._update_site()
        return result
    def _update_site(self):
        site = ''
        for p in sorted(self.participants):
            site += self.participants[p].getHTML()
        for g in sorted(self.groups):
            site += self.groups[g].getHTML()
        return site
        
def run(server_class=HTTPServer, handler_class=S, port=8080):
    global everything
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    try:
        print 'Starting httpd...'
        print 'Press CTRL + C to close'
        httpd.serve_forever()
    except:
        f = open('closing_data.txt', 'w')
        f.write(everything)
        f.close()
        httpd.shutdown()

if __name__ == "__main__":
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
