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

goog.require('Blockly.Blocks');

let recording = false;
let listening = false;
let playing = false;
let repeating = false;
let recorded_speech = {"red":"", "orange":"", "yellow":"", "green":"", "teal":"", "blue":"", "purple":""}
let select = "red";

function musicStart() {
		
	document.getElementById('play').addEventListener('click',
        function() { playing=true; recording=false; toggleIcon(); playRecord() });
    document.getElementById('stop_play').addEventListener('click',
        function() { playing=false; toggleIcon(); stopPlay();});
		
 	document.getElementById('record').addEventListener('click',
        function() { playing=false; recording=true; toggleIcon();});
    document.getElementById('stop_record').addEventListener('click',
        function() { recording=false; toggleIcon(); console.log('stop');});
        
    document.getElementById('repeat').addEventListener('click',
        function() { repeating=true; listening=false; toggleIcon(); repeatSpeech() });
    document.getElementById('stop_repeat').addEventListener('click',
        function() { repeating=false; toggleIcon(); stopPlay();});
		
 	document.getElementById('listen').addEventListener('click',
        function() { repeating=false; listening=true; getSpeech(); toggleIcon();});
    document.getElementById('stop_listen').addEventListener('click',
        function() { listening=false; toggleIcon(); console.log('stop');});
}


function toggleIcon() {
    toggleRecordIcon();
    togglePlayIcon();
    toggleSpeechIcon();
    toggleRepeatIcon();
}

function toggleRecordIcon() {
    let record = document.getElementById('record');
    let stop = document.getElementById('stop_record');
    if (record != null) {
        if (recording) {
		    log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStarted Recording\n");
	        record.style.display = "none";
	        stop.style.display = "inline-block";
	        selectNote();
	    } else {
		    log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStopped Recording\n");
	        record.style.display = "inline-block";
	        stop.style.display = "none";
	        releaseNote();
	    }
	}
}

function toggleSpeechIcon() {
    let record = document.getElementById('listen');
    let stop = document.getElementById('stop_listen');
    if (record != null) {
        if (listening) {
		    log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStarted Listening\n");
	        record.style.display = "none";
	        stop.style.display = "inline-block";
	        selectNote();
	    } else {
		    log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStopped Listening\n");
	        record.style.display = "inline-block";
	        stop.style.display = "none";
	        releaseNote();
	    }
	}
}

function togglePlayIcon() {
    let play = document.getElementById('play');
    let stop = document.getElementById('stop_play');
    if (playing) {
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStarted Playing\n");
	    play.style.display = "none";
	    stop.style.display = "inline-block";
	} else {
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStopped Playing\n");
	    play.style.display = "inline-block";
	    stop.style.display = "none";
	}
}

function toggleRepeatIcon() {
    let play = document.getElementById('repeat');
    let stop = document.getElementById('stop_repeat');
    if (repeating) {
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStarted Repeat\n");
	    play.style.display = "none";
	    stop.style.display = "inline-block";
	} else {
		log("G" + groupID + "\tDate:" + Date.now() + "\tMusic\tStopped Repeat\n");
	    play.style.display = "inline-block";
	    stop.style.display = "none";
	}
}

function playRecord() {
    let color = document.getElementById('micimg').alt;
	sendCommand('m19_record/' + color + '.3gp');
}

function repeatSpeech() {
	let speech = document.getElementById('speechimg').alt;
	sendCommand('m18_' + recorded_speech[speech]);
}

function stopPlay() {
	sendCommand('stop');
}

function selectNote(select) {
    let color = document.getElementById('micimg').alt;
	sendCommand('m17_record/' + color + '.3gp');
}

function releaseNote(select) {
	sendCommand('m20');
}

// Android.log(Date.now() + "\t" + event.type + "\t" + event.element + "\t" + event.newValue + "\t" + code + "\n");
