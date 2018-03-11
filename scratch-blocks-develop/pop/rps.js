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
    '<block type="event_whentie"></block>' +
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
    '<block type="malle_sad"></block>' +
    '<block type="malle_interested"></block>' +
    '<block type="malle_fart"></block>' +
    '<block type="malle_happywiggle"></block>' +
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

function playMove(select) {
	var moves = document.getElementsByClassName('move');
	for (var i=0; i < moves.length; i++) {
		moves[i].className = 'move popupRow';
	}
	var element = document.getElementById(select);
	element.className += ' selected';
    log("G" + groupID + "\tDate:" + Date.now() + "\tRPS\tMove:" + select + "\n");
	sendCommand('rps' + select);
}

function selectResult(select) {
	var results = document.getElementsByClassName('result');
	for (var i=0; i < results.length; i++) {
		results[i].className = 'result popupRow';
	}
	var element = document.getElementById(select);
	element.className += ' selected';
	
	log("G" + groupID + "\tDate:" + Date.now() + "\tRPS\tResult:\t" + select + "\n");
	sendCommand('rps' + select);
}

function clearSelections() {
	var moves = document.getElementsByClassName('move');
	for (var i=0; i < moves.length; i++) {
		moves[i].className = 'move popupRow';
	}
	
	var results = document.getElementsByClassName('result');
	for (var i=0; i < results.length; i++) {
		results[i].className = 'result popupRow';
	}
	
	sendCommand('rpsreset');
}

function rpsstart(place) {
	groupID = localStorage.getItem("Group ID");
	robotID = localStorage.getItem("Robot ID");
	IP_address = localStorage.getItem("IP");
	
	log("G" + groupID + "\tDate:" + Date.now() + "\tRPS\tSpace:\t" + place + "\n");
}

function playAgain() {
	clearSelections();
	log("G" + groupID + "\tDate:" + Date.now() + "\tRPS\tPlay\n");
	sendCommand('rpsplay');
}

function toggleDropdown(side) {
    console.log('toggledropdown side ' + side);
    if (side == undefined) {
        side = event.target.id[11];
    }
    let button = document.getElementById("dropdownBtn" + side);
    let content = document.getElementById("dropdownContent" + side);
    if (content.style.display === "none") {
        content.style.display = "inline";
        button.className += ' selected';
    } else {
        content.style.display = "none";
        button.className = 'dropdownBtn';
    }
}

function getRules() {
	let rule1 = "";
    for (let i=1; i<=6; i++) {
        let choice = document.getElementById("dropdownBtn" + i).childNodes[0].id;
        if (choice == "Rock")
            rule1 += 1;
        else if (choice == "Paper")
            rule1 += 2;
        else if (choice == "Scissors")
            rule1 += 3;
        else
            rule1 += 0;
    }
    return rule1;
}

function saveTraining() {
	saveFile('rpstrain', getRules());
}

function loadTraining() {
	let training = loadFile('rpstrain');
	let imgs = ["../media/icons/rock.svg", "../media/icons/paper.svg", "../media/icons/scissors.svg"];
	let names = ["Rock", "Paper", "Scissors"];
	for (let i=0; i<training.length; i++) {
		if (training[i] != '0') {
			let content = document.getElementById("dropdownBtn" + (i+1));
    		content.innerHTML = '<img onclick="toggleDropdown(' + (i+1) + ')" src=' + imgs[training[i]-1] + ' id=' + names[training[i]-1] + '>';
    	}
	}
    sendCommand("r02_" + getRules());
}

function selectMove() {
    let side = event.target.className[4];
    let content = document.getElementById("dropdownBtn" + side);
    content.innerHTML = '<img onclick="toggleDropdown(' + side + ')" src=' + event.target.src + ' id=' + event.target.alt + '>';
    toggleDropdown(side);
    sendCommand("r02_" + getRules());
}

function sayRules() {
	sendCommand("r03");
}