'use strict';

let workspace = null;
let live = window.location.href.startsWith("http://"); // whether or not this is live or just on computer
let robotID = 1;
let groupID = 0;
let IP_address = "192.168.1.1.121";

function toggleSidenav() {
    let nav = document.getElementById("sidenav");
    if (nav.style.display == "block") {
        nav.className = "sidenav-up";
        setTimeout(function() {
            nav.style.display = "none";
        }, 400);
    } else {
        nav.className = "sidenav-down";
        setTimeout(function() {
            nav.style.display = "block";
        }, 400);
    }
}

function toggleSettings() {
    let nav = document.getElementById("settings");
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function toggleRecord() {
    let nav = document.getElementById("record");
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function toggleRobot() {
    let nav = document.getElementById("robot");
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function showLoading() {
	let loading = document.getElementById("loading");
	loading.style.display = "block";
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
        scrollbars: true,
        toolbox: null,
        trashcan: true,
        playControls: true,
        settings: false,
        horizontalLayout: true,
        toolboxPosition: 'start',
        sounds: true,
        grid: {
            spacing: 55,
            length: 2,
            colour: '#FFF',
            snap: true
        },
        zoom: {
            controls: false,
            wheel: true,
            startScale: 1,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1
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

function rpsWorkspace() {
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
        settings: false,
        horizontalLayout: true,
        toolboxPosition: 'start',
        sounds: true,
        grid: {
            spacing: 55,
            length: 2,
            colour: '#FFF',
            snap: true
        },
        zoom: {
            controls: false,
            wheel: true,
            startScale: 1,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1
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

function storyWorkspace() {
    workspace = Blockly.inject('blocklyDiv', {
        comments: true,
        disable: false,
        collapse: false,
        media: '../../media/',
        readOnly: false,
        rtl: false,
        scrollbars: true,
        toolbox: null,
        trashcan: true,
        playControls: true,
        settings: false,
        horizontalLayout: true,
        toolboxPosition: 'start',
        sounds: true,
        grid: {
            spacing: 55,
            length: 2,
            colour: '#FFF',
            snap: true
        },
        zoom: {
            controls: false,
            wheel: true,
            startScale: 1,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1
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
    if (window.location.href.search("rps") != -1)
        rpsWorkspace();
    else if (window.location.href.search("story") != -1)
        storyWorkspace();
    else
        injectWorkspace();


    // should look for # and take everything after
    let number = parseFloat(window.location.href.slice(-1));
    if (!isNaN(number)) {
        loadWorkspace(number);
    }
    workspace.addChangeListener(updateFunction);
    // Load old programs
    //populateNav();
    
    // Try to find group ID
    groupID = localStorage.getItem("Group ID");
    if (groupID == null)
    	groupID = -1;
    
}

function showAndroidToast(toast) {
    Android.showToast(toast);
}

function sendCommand(command) {
    if (live)
        Android.sendCommand(command);
    else
        console.log(command);
}

function log(entry) {
    if (live)
        Android.log(entry)
    else
        console.log(entry)
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

function saveNewWorkspace() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let xml_text = Blockly.Xml.domToText(xml)
    if (live) {
        Android.saveNewWorkspace(xml_text);
    } else {
        console.log(xml_text);
    }
}

function saveWorkspace(filename) {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let xml_text = Blockly.Xml.domToText(xml)
    if (live) {
        Android.saveWorkspace(xml_text, filename);
    } else {
        console.log(xml_text);
    }
}

function saveFile(filename, text) {
    if (live) {
        Android.saveWorkspace(text, filename);
    } else {
        console.log(text);
    }
}

function addWedo() {
    Android.addWedo();
}

function addRobot(id) {
	saveWorkspace("robot" + robotID); // save this robot's code
	if (id < 0) {
		let robots = document.getElementsByClassName('robot');
		for (let i=0; i<robots.length; i++) {
			robots[i].className = 'robot navRow popupRow5';
		}
		let element = document.getElementById('robot'+id);
		element.className += ' selected';
	}
	robotID = id;
    Android.addRobot(id);
    toggleRobot();
    setTimeout(function() {
		loadWorkspace("robot" + robotID); // load code on new robot
    }, 3000);
    
}
function setRobotID() {
    robotID = prompt("Robot ID: ");
	localStorage.setItem("Robot ID", robotID);
	populateSettings();
	if (live) {
		Android.addRobot(parseInt(robotID));
	}
}
function loadIndex() {
    populateSettings();
    // Load old programs
    // populateNav();
}
function populateSettings() {
	groupID = localStorage.getItem("Group ID");
	document.getElementById("id").innerHTML = "Group ID: " + groupID;
	robotID = localStorage.getItem("Robot ID");
	document.getElementById("rid").innerHTML = "Robot ID: " + robotID;
	IP_address = localStorage.getItem("IP");
	document.getElementById("ip").innerHTML = "IP: http://" + IP_address;
}
function setGID() {
    groupID = prompt("Group ID: ");
	localStorage.setItem("Group ID", groupID);
	populateSettings();
	if (live)
		Android.setPID(groupID);
}
function setIP() {
    let ip = prompt("IP Address: ");
	document.getElementById("ip").innerHTML = "IP: http://" + ip;
	localStorage.setItem("IP", ip);
	populateSettings();
	if (live) {
	    Android.setIpAddress(ip);
	    log("Connected tablet: " + groupID);
    }
}
function populateNav() {
    let count;
    if (live) {
        count = Android.numPrograms();
    } else {
        count = 10; // 10;
    }
    let prog = document.getElementById("programs");
    for (let i = 0; i < count; i++) {
        let a = document.createElement('a');
        let img = document.createElement('img');
        img.src = "../media/piece" + (i % 7 + 1) + ".svg";
        img.alt = "Prog " + (i + 1);
        a.appendChild(img);
        a.href = "freespace.html#" + (i + 1);
        a.onclick = function() {
            loadWorkspace(i + 1);
        }
        a.className = "progLink";
        if (prog != null)
            prog.appendChild(a);
    }
}

function toggleWorkspaces() {
    let prog = document.getElementById("programs");
    if (prog.style.display == "initial") {
        setTimeout(function() {
            prog.style.display = "none";
        }, 100);
    } else {
        setTimeout(function() {
            prog.style.display = "initial";
        }, 100);
    }
}

function loadWorkspace(number) {
	workspace.clear();
    console.log("Loading program " + number);
    if (live) {
        let xml_text = Android.loadWorkspace(number);
        let xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, workspace);

        let code = Blockly.Popr.workspaceToCode(workspace);
        Android.saveRule(code);
    }
}

function loadFile(name) {
    if (live) {
        let text = Android.loadWorkspace(name);
        return text;
    }
    return "";
}

function updateFunction(event) {
    let all_code = Blockly.Popr.workspaceToCode(workspace);
    let code = "";
    // Sort events into Android commands
    if (event.type == Blockly.Events.UI) {
        if (event.element == 'click') {
            let block = workspace.getBlockById(event.blockId);
            while (block != null) {
                code += Blockly.Popr.blockToCode(block);
                block = block.getNextBlock();
            }

            sendCommand(code);
            
        } else if (event.element == 'categoryclick') {

            if (!live) {
                console.log(event.element + ' ' + event.oldValue + ' ' + event.newValue);
            }
            code = "";
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
            let settings = document.getElementById('settings');
            toggleSettings();
            if (!live) {
                console.log(event.element);
            }
        } else if (event.element == 'trashcan') {
            workspace.clear();
            if (live) {
                Android.deleteAllRules();
            } else {
                console.log(event.element);
            }
        } else if (event.element == 'toolboxclick') {
            let block = workspace.getBlockById(event.blockId);
            if (block.category_ == "pen") {
            	if (block.type == "wedo_add") {
            		addWedo();
            	} else if (block.type == "malle_addrobot") {
            		toggleRobot();
            	} else if (block.type == "malle_newrecord") {
            		toggleRecord();
            	}
            } else {
	            code = Blockly.Popr.blockHelp(block);
	            sendCommand(code);
	            
	        }
        }
        
		// Log event
		log("G" + groupID + "\tDate:" + Date.now() + "\tWorkspace\tElement:" + event.element + "\tOldVal:" + event.oldValue + "\tNewVal:" + event.newValue + "\tBlock:" + code + "\tWorkspace:" + all_code + "\n");
    } else {
        if (live) {
            Android.resetRules(all_code);
        } else {
            console.log(all_code + " " + event.type);
        }
    }
}
