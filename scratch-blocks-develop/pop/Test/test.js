'use strict';
let pid = -1;
let pageNum = -1;
let test = -1;
let answer = -1;

function testStart() {
	// Load PID
	pid = localStorage.getItem("PID");
	if (pid == -1)
		pid = prompt("PID: ");
	// Set event handlers on answers
	let answers = document.getElementsByClassName('answer');
	for (var i=0; i<answers.length; i++) {
		answers[i].addEventListener('click', 
		function() { selectAnswer(window.event);} );
	}
	// get current page
	let url = window.location.href;
	let url_index = url.search("test");
	test = parseInt(url.substring(url_index+4, url_index+5));
	pageNum = parseInt(url.substring(url_index+6, url_index+7));
	console.log(pageNum, test);
	
	// TODO load previous answer
	let prev_answer = localStorage.getItem("pid" + pid + "_test" + test + "_page" + pageNum);
	console.log(prev_answer);
	if (prev_answer != -1 && prev_answer != null) {
		answers[prev_answer].className += ' selected';
		answer = prev_answer;
	}
}

function selectAnswer(e) {
	clearSelections();
	let selection = e.target;
	if (selection.tagName == "IMG") {
		selection = selection.parentElement;
	}
	log("P" + pid + "\tDate:" + Date.now() + "\tTest:" + test + "\tPage:" + pageNum + "\tAnswer:" + selection.id + "\n");
	localStorage.setItem("pid" + pid + "_test" + test + "_page" + pageNum, selection.id);
	selection.className += ' selected';
	answer = selection.id;
}

function authenticate() {
	let p = prompt("Password:");
	if (p == "pop")
		window.location.href = "./test_index.html";
}

function navPress() {
	// on nav press, ensure that an answer was chosen before allowing user to move forward
	// identify which test we are on
	let current_test = test - 1;
	let next = "./test" + test + "_" + (pageNum+1) + ".html";
	// check the answer on that page
	if (answer != -1) {
		// OK to move on
		if (test == 1 && pageNum == 6) {
		next = "./test4_0.html";
		} else if (test == 2 && pageNum == 4) {
		next = "./test_index.html";
		} else if (test == 3 && pageNum == 7) { 
		next = "./test2_0.html";
		} else if (test == 4 && pageNum == 5) {
		next = "./test3_0.html";
		}
		window.location.href = next;
	} else {
		// error message?
		console.log("Not ok to move on: " + next);
	}
}

function clearSelections() {
	var answers = document.getElementsByClassName('answer');
	for (var i=0; i<answers.length; i++) {
		answers[i].className = 'answer popupRow';
	}
}
function setPID() {
	pid = prompt("PID");
	localStorage.setItem("PID", pid);
	populatePID();
}
function populatePID() {
	pid = localStorage.getItem("PID");
	document.getElementById("id").innerHTML = "PID: " + pid;
}
