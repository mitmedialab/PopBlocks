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
    '<block type="event_whenwin"></block>' +
    '<block type="event_whenlose"></block>' +
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
    '<block type="malle_excited"></block>' +
    '<block type="malle_dancebingo"></block>' +
    '<block type="malle_sad"></block>' +
    '<block type="malle_interested"></block>' +
    '<block type="malle_fart"></block>' +
    '<block type="malle_happywiggle"></block>' +
    '<block type="wedo_motorforward">' + 
    	'<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
    '</block>' +
    '<block type="wedo_motorbackward">' + 
    	'<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
    '</block>' +
    '<block type="wedo_motorleft">' + 
    	'<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
    '</block>' +
    '<block type="wedo_motorright">' + 
    	'<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
    '</block>' +
	'<block type="wedo_add" disabled="true"></block>' +
    '</xml>' + // Close XML
    '<xml id="toolbox-simple" style="display: none">' +
    '</xml>';


function foodStart() {
	var foods = document.getElementsByClassName('food');
	for (var i=0; i<foods.length; i++) {
		/*foods[i].addEventListener('click', 
			function() { selectfood(event);} );
		foods[i].addEventListener('mouseover', 
			function(event) { dragfood(event);} );	*/
		/*foods[i].addEventListener('mousedown',
		    function() { selectfood(event); });
		foods[i].addEventListener('mousemove',
		    function() { dragfood(event); });	
		foods[i].addEventListener('mouseup',
		    function() { releasefood(); });	*/
		foods[i].addEventListener('touchstart',
		    function() { selectfood(event); });	
		foods[i].addEventListener('touchmove',
		    function() { dragfood(event); });	
		foods[i].addEventListener('touchend',
		    function() { releasefood(); });
	}
	
	var categories = document.getElementsByClassName('foodCategory');
	
	// Load group id
	groupID = localStorage.getItem("Group ID");
	if (groupID == -1 || groupID == null) {
		groupID = prompt("Group ID: ");
		localStorage.setItem("Group ID", groupID);
	}
	
	// clear all other data
	clearSelections();
}

function selectfood(event) {
	var element = event.path[0];
	if (element.tagName == 'IMG') {
		element = event.path[1];
	}
	if (element.className == 'food popupRow4 selected') {
		releasefood();
	} else {
		var foods = document.getElementsByClassName('food');
		for (var i=0; i<foods.length; i++) {
			foods[i].className = 'food popupRow4';
		}
		element.className += ' selected';
		
	}
}

function dragfood(event) {
    // get element
	var element = event.path[0];
	
	// get mouse
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	if (mouseX == undefined)
	    mouseX = event.touches[0].pageX;
	if (mouseY == undefined)
	    mouseY = event.touches[0].pageY;
	    
	if (element.tagName == 'IMG') {
		element = event.path[1];
	}
	// if food is selected, have it follow the mouse
	if (element.className == 'food popupRow4 selected') {
		element.style.position = "absolute";
		element.style.left = (mouseX-150) + "px";
		element.style.top = (mouseY-125) + "px";
	}
}

function releasefood() {
	var foods = document.getElementsByClassName('food');
	for (var i=0; i<foods.length; i++) {
		foods[i].className = 'food popupRow4';
	}
	// get element
	var element = event.path[0];
	if (element.tagName == 'IMG') {
		element = event.path[1];
	}
	// get mouse
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	if (mouseX == undefined)
	    mouseX = event.changedTouches[0].pageX;
	if (mouseY == undefined)
	    mouseY = event.changedTouches[0].pageY;
	
	// place element inside of correct div
	var good = document.getElementById("goodFood").getBoundingClientRect();
	var bad = document.getElementById("badFood").getBoundingClientRect();
	var category = null, number;
	if (mouseX > good.left && mouseX < good.right && mouseY > good.top && mouseY < good.bottom) {
		category = document.getElementById("goodFood");
		number = 1;
	}
	if (mouseX > bad.left && mouseX < bad.right && mouseY > bad.top && mouseY < bad.bottom) {
		category = document.getElementById("badFood");
		number = 2;
	}
	if (category != null) {
		element.parentElement.removeChild(element);
		category.appendChild(element);
		if (live) {
			sendCommand('sortinput_'+ element.id + "+" + number);
			Android.log("G" + groupID + "\tfood\t" + Date.now() + "\t" + element.id + "\t" + number);
		} else {
			console.log("G" + groupID + "\tfood\t" + Date.now() + "\t" + element.id + "\t" + number);
		}
	} else {
    	if (live)
			sendCommand('sortinput_'+ element.id);
		log("G" + groupID + "\tfood\t" + Date.now() + "\t" + element.id);
	}
    element.style.position = "inherit";
}

function clearSelections() {
	var foods = document.getElementsByClassName('food');
	for (var i=0; i<foods.length; i++) {
		foods[i].className = 'food popupRow4';
	}
	var cats = document.getElementsByClassName('cat');
	for (var i=0; i<cats.length; i++) {
		cats[i].className = 'cat popupRow4';
	}
	var foodRow = document.getElementById("foodRow");
	var goodFoods = document.getElementById("goodFood");
	while (goodFoods.children.length > 0) {
		foodRow.appendChild(goodFoods.children[0]);
	}
	var badFoods = document.getElementById("badFood");
	while (badFoods.children.length > 0) {
		foodRow.appendChild(badFoods.children[0]);
	}
	console.log('sortreset');
	if (live)
		sendCommand('sortreset');
}
