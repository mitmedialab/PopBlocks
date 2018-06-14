def parseHTML():
    out = open('text.txt','w')
    for test in range(1,5):
        for page in range(8):
            try:
                fname = 'test'+str(test)+'_'+str(page)+'.html'
                f = open(fname)
                for line in f:
                    if 'desc' in line:
                        l = line.strip()
                        l = l.replace('<desc>', '')
                        l = l.replace('<desc id="1">', '')
                        l = l.replace('<desc id="2">', '')
                        l = l.replace('<desc id="3">', '')
                        l = l.replace('<desc id="4">', '')
                        l = l.replace('<desc id="5">', '')
                        l = l.replace('</desc>', '')
                        out.write(l + '\n')
                f.close()
            except IOError:
                pass
    out.close()
    

