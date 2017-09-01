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
 
function musicStart() {
	var notes = document.getElementsByClassName('note');
	notes[0].addEventListener('touchstart', 
		function() { selectNote('red');} );
	notes[0].addEventListener('mousedown', 
		function() { selectNote('red');} );
	notes[0].addEventListener('touchend', 
		function() { releaseNote('red');} );
	notes[0].addEventListener('mouseup', 
		function() { releaseNote('red'); } );
	
	notes[1].addEventListener('touchstart', 
		function() { selectNote('orange');} );
	notes[1].addEventListener('mousedown', 
		function() { selectNote('orange')} );
	notes[1].addEventListener('touchend', 
		function() { releaseNote('orange')} );
	notes[1].addEventListener('mouseup', 
		function() { releaseNote('orange')} );
		
	notes[2].addEventListener('touchstart', 
		function() { selectNote('yellow');} );
	notes[2].addEventListener('mousedown', 
		function() { selectNote('yellow')} );
	notes[2].addEventListener('touchend', 
		function() { releaseNote('yellow')} );
	notes[2].addEventListener('mouseup', 
		function() { releaseNote('yellow')} );
	
	notes[3].addEventListener('touchstart', 
		function() { selectNote('green');} );
	notes[3].addEventListener('mousedown', 
		function() { selectNote('green')} );
	notes[3].addEventListener('touchend', 
		function() { releaseNote('green')} );
	notes[3].addEventListener('mouseup', 
		function() { releaseNote('green')} );
	
	notes[4].addEventListener('touchstart', 
		function() { selectNote('teal');} );
	notes[4].addEventListener('mousedown', 
		function() { selectNote('teal')} );
	notes[4].addEventListener('touchend', 
		function() { releaseNote('teal')} );
	notes[4].addEventListener('mouseup', 
		function() { releaseNote('teal')} );
	
	notes[5].addEventListener('touchstart', 
		function() { selectNote('blue');} );
	notes[5].addEventListener('mousedown', 
		function() { selectNote('blue')} );
	notes[5].addEventListener('touchend', 
		function() { releaseNote('blue')} );
	notes[5].addEventListener('mouseup', 
		function() { releaseNote('blue')} );
		
	notes[6].addEventListener('touchstart', 
		function() { selectNote('purple');} );
	notes[6].addEventListener('mousedown', 
		function() { selectNote('purple')} );
	notes[6].addEventListener('touchend', 
		function() { releaseNote('purple')} );
	notes[6].addEventListener('mouseup', 
		function() { releaseNote('purple')} );
	
	notes[7].addEventListener('touchstart', 
		function() { selectNote('pink');} );
	notes[7].addEventListener('mousedown', 
		function() { selectNote('pink')} );
	notes[7].addEventListener('touchend', 
		function() { releaseNote('pink')} );
	notes[7].addEventListener('mouseup', 
		function() { releaseNote('pink')} );
}

function selectNote(select) {
	var element = document.getElementById(select);
	element.className += ' selected';
	console.log('m17_record/' + select + '.3gp');
	
	if (live)
		sendCommand('m17_record/' + select + '.3gp');
}

function releaseNote(select) {
	var element = document.getElementById(select);
	element.className = 'note popupRow';
	console.log('m20');
	if (live)
		sendCommand('m20');
}

// Android.log(Date.now() + "\t" + event.type + "\t" + event.element + "\t" + event.newValue + "\t" + code + "\n");