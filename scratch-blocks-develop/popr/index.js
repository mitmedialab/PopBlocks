'use strict';

var workspace = null;
var live = window.location.href.startsWith("http://"); // whether or not this is live or just on computer

	function toggleSidenav() {
var nav = document.getElementById("sidenav");
if (nav.style.display == "block") {
nav.className = "sidenav-up";
setTimeout(function(){
nav.style.display = "none";
}, 400);
} else {
nav.className = "sidenav-down";
setTimeout(function(){
nav.style.display = "block";
}, 400);
}
}

function injectWorkspace() {
// Parse the URL arguments.
workspace = Blockly.inject('blocklyDiv', {
comments: false,
disable: false,
collapse: false,
media: '../media/',
readOnly: false,
rtl: false,
scrollbars: false,
toolbox: null,
trashcan: true,
playControls: true,
settings: true,
horizontalLayout: true,
toolboxPosition: 'start',
sounds: true,
grid: {spacing: 55,
length: 2,
colour: '#FFF',
snap: true
},
zoom: {
controls: false,
wheel: true,
startScale: 1.1,
maxScale: 4,
minScale: 0.25,
scaleSpeed: 1.1
},
colours: {
workspace: '#334771',
toolbox: '#24324D',
flyout: '#283856',
scrollbar: '#24324D',
scrollbarHover: '#0C111A',
insertionMarker: '#FFFFFF',
insertionMarkerOpacity: 0.3,
fieldShadow: 'rgba(255, 255, 255, 0.3)',
dragShadowOpacity: 0.6
}
});
}

function alternateWorkspace() {	
	workspace = Blockly.inject('blocklyDiv', {
comments: true,
disable: false,
collapse: false,
media: '../media/',
readOnly: false,
rtl: false,
scrollbars: true,
toolbox: null,
trashcan: true,
playControls: false,
settings: true,
horizontalLayout: true,
toolboxPosition: 'start',
sounds: true,
grid: {spacing: 55,
length: 2,
colour: '#FFF',
snap: true
},
zoom: {
controls: false,
wheel: true,
startScale: 1.1,
maxScale: 4,
minScale: 0.25,
scaleSpeed: 1.1
},
colours: {
workspace: '#334771',
toolbox: '#24324D',
flyout: '#283856',
scrollbar: '#24324D',
scrollbarHover: '#0C111A',
insertionMarker: '#FFFFFF',
insertionMarkerOpacity: 0.3,
fieldShadow: 'rgba(255, 255, 255, 0.3)',
dragShadowOpacity: 0.6
}
});
}

function start() {
// Setup blocks
if (window.location.href.search("rps") == -1)
	injectWorkspace();
else 
	alternateWorkspace();
	
	
// should look for # and take everything after
var number = parseFloat(window.location.href.slice(-1));
if (!isNaN(number)) {
loadWorkspace(number);
}
workspace.addChangeListener(updateFunction);
populateNav();
}

function showAndroidToast(toast) {
Android.showToast(toast);
}

function sendCommand(command) {
Android.sendCommand(command);
}

function saveRule(rule) {
Android.saveRule(rule);
console.log(rule);
}

function deleteRule(rule) {
Android.deleteRule(rule);
}

function deleteAllRules() {
workspace.clear()
Android.deleteAllRules();
}

function leaveWorkspace() {
// should look for # and take everything after
var number = parseFloat(window.location.href.slice(-1));
if (!isNaN(number))
saveWorkspace(number);
else
saveNewWorkspace();
}

function saveNewWorkspace() {
var xml = Blockly.Xml.workspaceToDom(workspace);
var xml_text = Blockly.Xml.domToText(xml)
if (live) {
Android.saveNewWorkspace(xml_text);
} else {
console.log(xml_text);
}
}

function saveWorkspace(filename) {
var xml = Blockly.Xml.workspaceToDom(workspace);
var xml_text = Blockly.Xml.domToText(xml)
if (live) {
Android.saveWorkspace(xml_text, filename);
} else {
console.log(xml_text);
}
}

function addWedo() {
Android.addWedo();
}

function addRobot() {
Android.addRobot();
}

function populateNav() {
var count;
if (live) {
count = Android.numPrograms();
} else {
count = 10; // 10;
}
var prog = document.getElementById("programs");
for (let i=0; i<count; i++) {
var a = document.createElement('a');
var img = document.createElement('img');
img.src = "../media/piece" + (i%7+1) + ".svg";
img.alt = "Prog " + (i+1);
a.appendChild(img);
a.href = "freespace.html#" + (i+1);
a.onclick = function() {
	console.log('what up');
	loadWorkspace(i+1);
}
a.className = "progLink";
if (prog != null)
prog.appendChild(a);
}
}

function toggleWorkspaces() {
var prog = document.getElementById("programs");
if (prog.style.display == "initial") {
setTimeout(function(){
prog.style.display = "none";
}, 100);
} else {
setTimeout(function(){
prog.style.display = "initial";
}, 100);
}
}

function loadWorkspace(number) {
if (live) {
console.log("Loading program " + number);
var xml_text = Android.loadWorkspace(number);
var xml = Blockly.Xml.textToDom(xml_text);
Blockly.Xml.domToWorkspace(xml, workspace);

var code = Blockly.Popr.workspaceToCode(workspace);
Android.saveRule(code);
}
}

function updateFunction(event) {
var code = Blockly.Popr.workspaceToCode(workspace);

// Log event
if (live) {
Android.log(Date.now() + "\t" + event.type + "\t" + event.element + "\t" + event.newValue + "\t" + code + "\n");
}

// Sort events into Android commands
if (event.type == Blockly.Events.UI) {
if (event.element == 'click' || event.element == 'toolboxclick') {
var block = workspace.getBlockById(event.blockId);
var code = "";
while (block != null) {
code += Blockly.Popr.blockToCode(block);
block = block.getNextBlock();
}

if (live) {
Android.sendCommand(code);
} else {
console.log(event.element + ' ' + code);
}

} else if (event.element == 'categoryclick') {

if (!live) {
console.log(event.element + ' ' + event.oldValue + ' ' + event.newValue);
}
} else if (event.element == 'stop') {
if (live) {
Android.stopTrigger();
} else {
console.log(event.element);
}

} else if (event.element == 'play') {
if (live) {
Android.startTrigger();
} else {
console.log(event.element);
}
} else if (event.element == 'settings') {
var settings = document.getElementById('settings');
if (settings.style.display == 'table') {
settings.style.display = 'none';
} else {
settings.style.display = 'table';
}
if (!live) {
console.log(event.element);
}
}else if (event.element == 'trashcan') {
workspace.clear();
if (live) {
Android.deleteAllRules();
} else {
console.log(event.element);
}
}
} else if (event.type == Blockly.Events.RECORD) {
//console.log('record' + event.filename + '.wav');
} else {
if (live) {
Android.resetRules(code);
} else {
console.log(event.code);
}
}
}