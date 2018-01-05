/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
let notes = [0,0,0,0,0,0,0,0];
let oscillator;
let audioCtx;
let recording = false;
let playing = false;
let savedNotes = [];
let savedDur = []
//  {880.0, 440.0, 494.0, 554.0, 587.0, 659.0, 740.0, 830.6}; 
function musicStart() {
	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	oscillator = audioCtx.createOscillator();
	oscillator.type = 'square';
	oscillator.start(0);
	
	let notes = document.getElementsByClassName('note');
	notes[0].addEventListener('touchstart', 
		function() { selectNote(1);} );
	notes[0].addEventListener('mousedown', 
		function() { selectNote(1);} );
	notes[0].addEventListener('touchend', 
		function() { releaseNote(1);} );
	notes[0].addEventListener('mouseup', 
		function() { releaseNote(1); } );
	
	notes[1].addEventListener('touchstart', 
		function() { selectNote(2);} );
	notes[1].addEventListener('mousedown', 
		function() { selectNote(2)} );
	notes[1].addEventListener('touchend', 
		function() { releaseNote(2)} );
	notes[1].addEventListener('mouseup', 
		function() { releaseNote(2)} );
		
	notes[2].addEventListener('touchstart', 
		function() { selectNote(3);} );
	notes[2].addEventListener('mousedown', 
		function() { selectNote(3)} );
	notes[2].addEventListener('touchend', 
		function() { releaseNote(3)} );
	notes[2].addEventListener('mouseup', 
		function() { releaseNote(3)} );
	
	notes[3].addEventListener('touchstart', 
		function() { selectNote(4);} );
	notes[3].addEventListener('mousedown', 
		function() { selectNote(4)} );
	notes[3].addEventListener('touchend', 
		function() { releaseNote(4)} );
	notes[3].addEventListener('mouseup', 
		function() { releaseNote(4)} );
	
	notes[4].addEventListener('touchstart', 
		function() { selectNote(5);} );
	notes[4].addEventListener('mousedown', 
		function() { selectNote(5)} );
	notes[4].addEventListener('touchend', 
		function() { releaseNote(5)} );
	notes[4].addEventListener('mouseup', 
		function() { releaseNote(5)} );
	
	notes[5].addEventListener('touchstart', 
		function() { selectNote(6);} );
	notes[5].addEventListener('mousedown', 
		function() { selectNote(6)} );
	notes[5].addEventListener('touchend', 
		function() { releaseNote(6)} );
	notes[5].addEventListener('mouseup', 
		function() { releaseNote(6)} );
		
	notes[6].addEventListener('touchstart', 
		function() { selectNote(7);} );
	notes[6].addEventListener('mousedown', 
		function() { selectNote(7)} );
	notes[6].addEventListener('touchend', 
		function() { releaseNote(7)} );
	notes[6].addEventListener('mouseup', 
		function() { releaseNote(7)} );
	
	notes[7].addEventListener('touchstart', 
		function() { selectNote(8);} );
	notes[7].addEventListener('mousedown', 
		function() { selectNote(8)} );
	notes[7].addEventListener('touchend', 
		function() { releaseNote(8)} );
	notes[7].addEventListener('mouseup', 
		function() { releaseNote(8)} );
		
	/*document.getElementById('note_let').addEventListener('change',
		function() { sliderChange('notelet'); });*/
		
    document.getElementById('record').addEventListener('touchstart',
        function() { startRecording() });
    document.getElementById('record').addEventListener('mousedown',
        function() { startRecording() });
    document.getElementById('play').addEventListener('touchstart',
        function() { startPlaying() });
    document.getElementById('play').addEventListener('mousedown',
        function() { startPlaying() });
    document.getElementById('stop').addEventListener('touchstart',
        function() { stopAll() });
    document.getElementById('stop').addEventListener('mousedown',
        function() { stopAll() });
}

function startRecording() {
    console.log('Starting recording');
    savedNotes = [];
    savedDur = [];
    recording = true;
}

function toggleRecordIcon() {
	
}

function togglePlayIcon() {
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startPlaying() {
    console.log('Starting playing');
    recording = false;
    //savedNotes = document.getElementById("notes").value.split(",").map(Number);
    //savedDur = document.getElementById("dur").value.split(",").map(Number);
    console.log(savedNotes);
    console.log(savedDur);
    let i = 0;
    if (savedNotes[i] == 0)
    	i = 1;
    for (; i<savedNotes.length; i++) {
        selectNote(savedNotes[i]);
        await sleep(savedDur[i]);
        releaseNote(savedNotes[i]);
    }
}

function stopAll() {
    console.log('Stopping recording');
    recording = false;
    console.log(savedNotes);
}

function selectNote(select) {
	if (select > 0) {
		let element = document.getElementById(select);
		element.className += ' selected9';
		console.log("Pressed " + select);
		// Save note start time
		notes[select] = Date.now();
		if (recording) {
			// Add rest and duration
			savedNotes.push(0);
			savedDur.push(Date.now()-notes[0]);
		}
		playNote(select);
	}
}

function releaseNote(select) {
	if (select > 0) {
		let element = document.getElementById(select);
		let dur = Date.now() - notes[select];
		element.className = 'note popupRow9';
		stopNote();
		if (recording) {
			// Add note and duration
		    savedNotes.push(select);
		    savedDur.push(dur);
		    // Save rest start time
		    notes[0] = Date.now();
		}
		console.log('music_' + select + '+' + dur);
		if (live)
			sendCommand('music_' + select + '+' + dur);
	}
}
function sliderChange(element) {
	let el = document.getElementById(element);
	console.log(element + '_' + el.value);
	if (live)
		sendCommand(element + '_' + el.value);
}


function playNote(note) {
	// create Oscillator node
	let freqs = [440.0, 494.0, 554.0, 587.0, 659.0, 740.0, 830.6, 880.0];
	let frequency = freqs[note-1];
	oscillator.frequency.value = frequency; // value in hertz
	oscillator.connect(audioCtx.destination);
}

function stopNote() {
	//oscillator.stop();
	oscillator.disconnect();
}

// Android.log(Date.now() + "\t" + event.type + "\t" + event.element + "\t" + event.newValue + "\t" + code + "\n");
