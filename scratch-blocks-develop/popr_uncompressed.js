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

Blockly.Popr = new Object();

Blockly.Popr.workspaceToCode = function(workspace) {
  var topBlocks = workspace.getTopBlocks();
  var rules = "";
  for (var i = 0; i < topBlocks.length; i++) {
  	var block = topBlocks[i];
	var code = "";
  	while (block != null) {
  	  code += Blockly.Popr.blockToCode(block);
  	  block = block.getNextBlock();
  	}
    rules += code + ";";
  }
  return rules;
}

Blockly.Popr.blockToCode = function(block) {
	var type = block.type;
	var func = "Blockly.Popr." + type + "(block)";
	return eval(func);
}

/* Event blocks */
Blockly.Popr.event_whenflagclicked = function(block) {
  return block.type + " ";
}
Blockly.Popr.wedo_whentilt = function(block) {
  var value;
  /*for (var i = 0, child; child = block.getChildren()[i]; i++) {
  	if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }*/
  return block.type + " ";
}
Blockly.Popr.wedo_whendistanceclose = function(block) {
  return block.type + " ";
}
Blockly.Popr.event_whentouched = function(block) {
  return block.type + " ";
}
Blockly.Popr.event_whenlight = function(block) {
    return block.type + " ";
}
Blockly.Popr.event_whenheard = function(block) {
    return block.type + " ";
}
/* Looks blocks */
Blockly.Popr.wedo_setcolor = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return block.type + "_" + value + " ";
}
Blockly.Popr.malle_setcolor = function(block) {9
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return block.type + "_" + value + " ";
}
/* Motion blocks */
Blockly.Popr.wedo_motor1clockwise = function(block) {
  return block.type + " ";
}
Blockly.Popr.wedo_motor1counterclockwise = function(block) {
  return block.type + " ";
}
Blockly.Popr.wedo_motor1stop = function(block) {
  return block.type + " ";
}
Blockly.Popr.wedo_motor2clockwise = function(block) {
  return block.type + " ";
}
Blockly.Popr.wedo_motor2counterclockwise = function(block) {
  return block.type + " ";
}
Blockly.Popr.wedo_motor2stop = function(block) {
  return block.type + " ";
}
/* Sound blocks */
Blockly.Popr.wedo_playnote = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return block.type + "_" + value + " ";
}
Blockly.Popr.malle_playnote = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return block.type + "_" + value + " ";
}
Blockly.Popr.malle_record = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return block.type + "_" + value + " ";
}
Blockly.Popr.malle_fart = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_happywiggle = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_yawn = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_excited = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_dancebingo = function(block) {
	return block.type + " ";
}
/* Expression blocks */
Blockly.Popr.malle_idlestill = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_nod = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_no = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_scared = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_posesleepingsnore = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_sad = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_interested = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_hi = function(block) {
	return block.type + " ";
}
Blockly.Popr.malle_bye = function(block) {
	return block.type + " ";
}
/* Control blocks */
Blockly.Popr.control_stop = function(block) {      	
  return block.type + " ";
}
Blockly.Popr.control_forever = function(block) {
  var code = block.type + " ";
  var child = block.getChildren()[0];
  while (child != null) {
	code += Blockly.Popr.blockToCode(child);
	child = child.getNextBlock();
  }
  return code + "end_" + block.type + " ";
}
Blockly.Popr.control_repeat = function(block) {      	
  var code = block.type + "_";
  var children = block.getChildren();
  var child = children[0];
  code += child.getField("NUM").getValue() + " ";
   
  child = children[1]; 
  while (child != null) {
    code += Blockly.Popr.blockToCode(child);
	child = child.getNextBlock();
  }
  return code + "end_" + block.type + " ";
}
Blockly.Popr.control_wait = function(block) {      	
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("NUM") != null) {
	  value = child.getField("NUM").getValue();
	}
  }
  return block.type + "_" + value + " ";
}
Blockly.Popr.control_sametime = function(block) {      	
  var code = block.type + " ";
  var child = block.getChildren()[0];
  while (child != null && child != block) {
    code += Blockly.Popr.blockToCode(child);
    child = child.getNextBlock();
  }
  return code + "end_" + block.type + " ";
}
/* Game */
Blockly.Popr.event_whenwin = function(block) {
  return block.type + " ";
}
Blockly.Popr.event_whenlose = function(block) {
    return block.type + " ";
}
Blockly.Popr.event_whentie = function(block) {
    return block.type + " ";
}