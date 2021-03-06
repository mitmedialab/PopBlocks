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
let savedDur = [];
let emotionVals = [0,0,0,0,0,0,0,0];
let emotion = 0;
//  {880.0, 440.0, 494.0, 554.0, 587.0, 659.0, 740.0, 830.6}; 
function musicStart() {
	sendCommand("energy_0");
	sendCommand("valence_0");
	
	groupID = localStorage.getItem("Group ID");
	robotID = localStorage.getItem("Robot ID");
	IP_address = localStorage.getItem("IP");

	// Form oscillator for making music
	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	oscillator = audioCtx.createOscillator();
	oscillator.type = 'square';
	oscillator.start(0);
	
		
	document.getElementById('energy').addEventListener('change',
		function() { sliderChange('energy'); });
	document.getElementById('valence').addEventListener('change',
		function() { sliderChange('valence'); });
	
	document.getElementById('play').addEventListener('click',
        function() { playing=true; recording=false; toggleIcon(); startPlaying() });
    document.getElementById('stop_play').addEventListener('click',
        function() { stopAll(); toggleIcon(); });
    	
    document.getElementById('record').addEventListener('click',
        function() { recording=true; playing=false; toggleIcon(); startRecording(); });
    document.getElementById('stop_record').addEventListener('click',
        function() { stopAll(); toggleIcon(); });

	
	// Create event handlers for all notes
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
		        
    sendCommand("m18_Let's+get+our+groove+on");
}

function startRecording() {
    console.log('Starting recording');
    savedNotes = [];
    savedDur = [];
    recording = true;
    playing = false;
}

function toggleIcon() {
    toggleRecordIcon();
    togglePlayIcon();
}

function toggleRecordIcon() {
    let record = document.getElementById('record');
    let stop = document.getElementById('stop_record');
    if (record != null) {
        if (recording) {
		    log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStarted Recording\n");
	        record.style.display = "none";
	        stop.style.display = "inherit";
	    } else {
		    log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStopped Recording\n");
	        record.style.display = "inherit";
	        stop.style.display = "none";
	    }
	}
}

function togglePlayIcon() {
    let play = document.getElementById('play');
    let stop = document.getElementById('stop_play');
    if (playing) {
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStarted Playing\n");
	    play.style.display = "none";
	    stop.style.display = "inherit";
	} else {
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStopped Playing\n");
	    play.style.display = "inherit";
	    stop.style.display = "none";
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startPlaying() {
    console.log(savedNotes);
    let i = 0;
    if (savedNotes[i] == 0)
    	i = 1;
    for (; i<savedNotes.length; i++) {
        if (playing) {
            selectNote(savedNotes[i]);
            await sleep(savedDur[i]);
            releaseNote(savedNotes[i]);
        }
    }
    stopAll();
    toggleIcon();
}

function stopAll() {
	// stop playing and recording
    recording = false;
    playing = false;
}

function selectNote(select) {
	// choose a note by index and highlight it
	if (select > 0) {
		let element = document.getElementById(select);
		if (element != null)
    		element.className += ' selected9';
		
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
	// when the user releases the note stop playing it
	if (select > 0) {
		let element = document.getElementById(select);
		let dur = Date.now() - notes[select];
		if (element != null)
    		element.className = 'note popupRow9';
		stopNote();
		if (recording) {
			// Add note and duration
		    savedNotes.push(select);
		    savedDur.push(dur);
		    // Save rest start time
		    notes[0] = Date.now();
		}
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tNote:" + select + "\tDuration:" + dur + "\n");
		sendCommand('music_' + select + '+' + dur);
	}
}

function sliderChange(element) {
	let el = document.getElementById(element);
	log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tChanged:" + el.id + "\tValue:" + el.value + "\n");
	sendCommand(element + '_' + el.value);
    if (emotion != 0) {
        let en = document.getElementById('energy');
	    let val = document.getElementById('valence');
        emotionVals[2*emotion-2] = en.value;
        emotionVals[2*emotion-1] = val.value;
    }
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

function changeEmotion(side) {
    let sideColors = ["yellow", "orange", "blue", "purple"];
    if (side == undefined) {
        side = event.target.id[11];
    }
    console.log('toggledropdown side ' + side);
    let button = document.getElementById("dropdownBtn" + side);
    
    let sliders = document.getElementsByClassName("range-slider__range");
    for (let i=0; i<sliders.length; i++)
        sliders[i].style.backgroundColor = sideColors[side-1];
    
    emotion = side;
    
    let en = document.getElementById('energy');
	let val = document.getElementById('valence');
    en.value = emotionVals[2*side-2];
    val.value = emotionVals[2*side-1];
    sendCommand("energy_" + en.value);
    sendCommand("valence_" + val.value);
}

function setMusic() {
    savedNotes=[1, 0, 2, 0, 4, 0, 4, 0, 2, 0, 1, 0];
    savedDur=[500, 50, 500, 50, 500, 150, 500, 50, 500, 50, 500, 50];
}
