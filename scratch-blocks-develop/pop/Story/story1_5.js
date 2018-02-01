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
    '<category name="Expressions" colour="#FF6680" secondaryColour="#FF4D6A" icon="../../media/icons/expressions.svg">' +
	    '<block type="malle_happywiggle"></block>' +
	    '<block type="malle_excited"></block>' +
	    '<block type="malle_dancebingo"></block>' +
    '</category>' +
    '<category name="Look" colour="#9966FF" secondaryColour="#855CD6" icon="../../media/icons/looks.svg">' + 
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
    '</category>' +
    '<category name="Motion" colour="#4C97FF" secondaryColour="#4280D7" icon="../../media/icons/wedo_motor.svg">' + 
	    '<block type="wedo_motor1clockwise"></block>' +
	    '<block type="wedo_motor1counterclockwise"></block>' +
	    '<block type="wedo_motor1stop"></block>' +
	    '<block type="wedo_motor2clockwise"></block>' +
	    '<block type="wedo_motor2counterclockwise"></block>' +
	    '<block type="wedo_motor2stop"></block>' +
	    '<block type="control_wait">' +
	    	'<value name="DURATION">' +
	    		'<shadow type="dropdown_control_number">' +
	    		'<field name="NUM">1</field>' +
	    		'</shadow>' +
	    	'</value>' +
	    '</block>' +
	'</category>' +
    '<category name="Events" colour="#FFBF00" secondaryColour="#E6AC00" icon="../../media/icons/event_whenflagclicked.svg">' +
        '<block type="event_whenflagclicked"></block>' +
        '<block type="event_whentouched"></block>' +
        '<block type="event_whenlight"></block>' +
        '<block type="event_whenheard"></block>' +
    '</category>' +
    '<category name="Control" colour="#FFAB19" secondaryColour="#EC9C13" icon="../../media/icons/control_stop.svg">' +
	    '<block type="control_forever"></block>' +
	    '<block type="control_repeat">' +
		    '<value name="CHOICE">' +
			    '<shadow type="dropdown_control_number">' +
			    '<field name="NUM">4</field>' +
	    		'</shadow>' +
	    	'</value>' +
	    '</block>' +
    '</category>' +
    '</xml>' + // Close XML
    '<xml id="toolbox-simple" style="display: none">' +
    '</xml>';
    
function playAudio() {
	var text = "Yay! Now you know all about how to program me. Let's have some fun!";
	if (live) {
		Android.generateSpeech(text);
		} else {
		console.log(text);
		}
}
