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

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
    '<block type="wedo_setcolor">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_setcolor">' +
        '<field name="CHOICE">mystery</field>' +
        '</shadow>' +
        '</value>' +
    '</block>' +
    '<block type="malle_setcolor">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_setcolor">' +
        '<field name="CHOICE">mystery</field>' +
        '</shadow>' +
        '</value>' +
    '</block>' +
    '<block type="wedo_motor1clockwise"></block>' +
    '<block type="wedo_motor1counterclockwise"></block>' +
    '<block type="wedo_motor1stop"></block>' +
    '<block type="malle_excited"></block>' +
    '<block type="malle_sad"></block>' +
    '<block type="malle_interested"></block>' +
    '<block type="malle_happywiggle"></block>' +
    '<block type="malle_fart"></block>' +
    '<block type="malle_yawn"></block>' +
    '<block type="malle_dancebingo"></block>' +
    '<block type="control_wait">' +
	    '<value name="DURATION">' +
	    '<shadow type="dropdown_control_number">' +
	    '<field name="NUM">1</field>' +
	    '</shadow>' +
	    '</value>' +
    '</block>' +
    '</xml>' + // Close XML
    '<xml id="toolbox-simple" style="display: none">' +
    '</xml>';
 
var notes = [0,0,0,0,0,0,0];
//  {880.0, 440.0, 494.0, 554.0, 587.0, 659.0, 740.0, 831.0}; 
function musicStart() {
	var notes = document.getElementsByClassName('note');
	notes[0].addEventListener('touchstart', 
		function() { selectNote(1);  playNote(440);} );
	notes[0].addEventListener('mousedown', 
		function() { selectNote(1);} );
	notes[0].addEventListener('touchend', 
		function() { releaseNote(1);} );
	notes[0].addEventListener('mouseup', 
		function() { releaseNote(1); } );
	
	notes[1].addEventListener('touchstart', 
		function() { selectNote(2); playNote(494);} );
	notes[1].addEventListener('mousedown', 
		function() { selectNote(2)} );
	notes[1].addEventListener('touchend', 
		function() { releaseNote(2)} );
	notes[1].addEventListener('mouseup', 
		function() { releaseNote(2)} );
		
	notes[2].addEventListener('touchstart', 
		function() { selectNote(3); playNote(554);} );
	notes[2].addEventListener('mousedown', 
		function() { selectNote(3)} );
	notes[2].addEventListener('touchend', 
		function() { releaseNote(3)} );
	notes[2].addEventListener('mouseup', 
		function() { releaseNote(3)} );
	
	notes[3].addEventListener('touchstart', 
		function() { selectNote(4); playNote(587);} );
	notes[3].addEventListener('mousedown', 
		function() { selectNote(4)} );
	notes[3].addEventListener('touchend', 
		function() { releaseNote(4)} );
	notes[3].addEventListener('mouseup', 
		function() { releaseNote(4)} );
	
	notes[4].addEventListener('touchstart', 
		function() { selectNote(5); playNote(659);} );
	notes[4].addEventListener('mousedown', 
		function() { selectNote(5)} );
	notes[4].addEventListener('touchend', 
		function() { releaseNote(5)} );
	notes[4].addEventListener('mouseup', 
		function() { releaseNote(5)} );
	
	notes[5].addEventListener('touchstart', 
		function() { selectNote(6); playNote(740);} );
	notes[5].addEventListener('mousedown', 
		function() { selectNote(6)} );
	notes[5].addEventListener('touchend', 
		function() { releaseNote(6)} );
	notes[5].addEventListener('mouseup', 
		function() { releaseNote(6)} );
		
	notes[6].addEventListener('touchstart', 
		function() { selectNote(7); playNote(831);} );
	notes[6].addEventListener('mousedown', 
		function() { selectNote(7)} );
	notes[6].addEventListener('touchend', 
		function() { releaseNote(7)} );
	notes[6].addEventListener('mouseup', 
		function() { releaseNote(7)} );
	
	notes[7].addEventListener('touchstart', 
		function() { selectNote(8); playNote(880);} );
	notes[7].addEventListener('mousedown', 
		function() { selectNote(8)} );
	notes[7].addEventListener('touchend', 
		function() { releaseNote(8)} );
	notes[7].addEventListener('mouseup', 
		function() { releaseNote(8)} );
		
	document.getElementById('note_var').addEventListener('change',
		function() { sliderChange('note_var'); });
	document.getElementById('inter_var').addEventListener('change',
		function() { sliderChange('inter_var'); });
	document.getElementById('dur_var').addEventListener('change',
		function() { sliderChange('dur_var'); });
}

function selectNote(select) {
	var element = document.getElementById(select);
	element.className += ' selected';
	console.log("Pressed " + select);
	notes[select-1] = Date.now();
}

function releaseNote(select) {
	var element = document.getElementById(select);
	var dur = Date.now() - notes[select-1];
	element.className = 'note popupRow';
	console.log('music_' + select + '+' + dur);
	if (live)
		sendCommand('music_' + select + '+' + dur);
}

function sliderChange(element) {
	var el = document.getElementById(element);
	console.log(element + '_' + el.value);
	if (live)
		sendCommand(element + '_' + el.value);
}


function playNote(frequency) {
	var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	var oscillator = audioCtx.createOscillator();
	oscillator.type = 'sine';
	// create Oscillator node
	oscillator.frequency.value = frequency; // value in hertz
	oscillator.connect(audioCtx.destination);
	oscillator.start();
	setTimeout(
	    function(){
	        oscillator.stop();
	    }, 100);
	audioCtx.close();
}

function stopNote() {
console.log("stop");
oscillator.stop();
}

// Android.log(Date.now() + "\t" + event.type + "\t" + event.element + "\t" + event.newValue + "\t" + code + "\n");