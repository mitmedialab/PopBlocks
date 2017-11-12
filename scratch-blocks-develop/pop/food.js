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

var food = 0;
function foodStart() {
	var foods = document.getElementsByClassName('food');
	foods[0].addEventListener('click', 
		function() { selectfood(1);} );
	
	foods[1].addEventListener('click', 
		function() { selectfood(2);} );
		
	foods[2].addEventListener('click', 
		function() { selectfood(3);} );
	
	foods[3].addEventListener('click', 
		function() { selectfood(4);} );
	
	foods[4].addEventListener('click', 
		function() { selectfood(5);} );
	
	foods[5].addEventListener('click', 
		function() { selectfood(6);} );
		
	foods[6].addEventListener('click', 
		function() { selectfood(7);} );
	
	foods[7].addEventListener('click', 
		function() { selectfood(8);} );
			
	foods[8].addEventListener('click', 
		function() { selectfood(9);} );
			
	foods[9].addEventListener('click', 
		function() { selectfood(10);} );
			
	foods[10].addEventListener('click', 
		function() { selectfood(11);} );
			
	foods[11].addEventListener('click', 
		function() { selectfood(12);} );
		
	clearSelections();
}

function selectfood(select) {
	var foods = document.getElementsByClassName('food');
	for (var i=0; i<foods.length; i++) {
		if (foods[i].className.includes('wrong'))
			foods[i].className += 'food popupRow4 wrong';
		else 
			foods[i].className = 'food popupRow4';
	}
	food = select;
	var element = document.getElementById(select);
	element.className += ' selected';
	console.log(select-1);
	if (live)
		sendCommand('sortinput_'+ (food-1));
}

function selectcat(select) {
	var cats = document.getElementsByClassName('cat');
	for (var i=0; i<cats.length; i++) {
		cats[i].className = 'cat popupRow';
	}
	var element = document.getElementById(select);
	element.className += ' selected';
	var food_element = document.getElementById(food);
	food_element.className += ' wrong';
	// item+category
	console.log((food-1) + "+" + (select-12));
	if (live)
		sendCommand('sortinput_'+ (food-1) + "+" + (select-12));
}

function clearSelections() {
	var foods = document.getElementsByClassName('food');
	for (var i=0; i<foods.length; i++) {
		foods[i].className = 'food popupRow4';
	}
	food = 0;
	var cats = document.getElementsByClassName('cat');
	for (var i=0; i<cats.length; i++) {
		cats[i].className = 'cat popupRow4';
	}
	console.log('sortreset');
	if (live)
		sendCommand('sortreset');
}