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
  //return block.type + " ";
  return "e01 ";
}
Blockly.Popr.wedo_whentilt = function(block) {
  var value;
  /*for (var i = 0, child; child = block.getChildren()[i]; i++) {
  	if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }*/
  return "w01 ";
}
Blockly.Popr.wedo_whendistanceclose = function(block) {
  return "w02 ";
}
Blockly.Popr.event_whentouched = function(block) {
  return "e03 ";
}
Blockly.Popr.event_whenlight = function(block) {
    return "e04 ";
}
Blockly.Popr.event_whenheard = function(block) {
	/*for (var i = 0, child; child = block.getChildren()[i]; i++) {
	  	if (child.getField("CHOICE") != null) {
		  value = child.getField("CHOICE").getValue();
		}
	  }*/
    return "e02 ";
}
/* Looks blocks */
Blockly.Popr.wedo_setcolor = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return "w03_" + value + " ";
}
Blockly.Popr.malle_setcolor = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return "m01_" + value + " ";
}
/* Motion blocks */
Blockly.Popr.wedo_motor1clockwise = function(block) {
  return "w04 ";
}
Blockly.Popr.wedo_motor1counterclockwise = function(block) {
  return "w05 ";
}
Blockly.Popr.wedo_motor1stop = function(block) {
  return "w06 ";
}
Blockly.Popr.wedo_motor2clockwise = function(block) {
  return "w07 ";
}
Blockly.Popr.wedo_motor2counterclockwise = function(block) {
  return "w08 ";
}
Blockly.Popr.wedo_motor2stop = function(block) {
  return "w09 ";
}
/* Sound blocks */
Blockly.Popr.wedo_playnote = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return "w14_" + value + " ";
}
Blockly.Popr.malle_playnote = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return "m16_" + value + " ";
}
Blockly.Popr.malle_record = function(block) {
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("CHOICE") != null) {
	  value = child.getField("CHOICE").getValue();
	}
  }
  return "m19_record/" + value + ".3gp ";
}
Blockly.Popr.malle_fart = function(block) {
	return "m02 ";
}
Blockly.Popr.malle_happywiggle = function(block) {
	return "m03 ";
}
Blockly.Popr.malle_yawn = function(block) {
	return "m04 ";
}
Blockly.Popr.malle_excited = function(block) {
	return "m05 ";
}
Blockly.Popr.malle_dancebingo = function(block) {
	return "m06 ";
}
/* Expression blocks */
Blockly.Popr.malle_idlestill = function(block) {
	return "m07 ";
}
Blockly.Popr.malle_nod = function(block) {
	return "m08 ";
}
Blockly.Popr.malle_no = function(block) {
	return "m09 ";
}
Blockly.Popr.malle_scared = function(block) {
	return "m10 ";
}
Blockly.Popr.malle_posesleepingsnore = function(block) {
	return "m11 ";
}
Blockly.Popr.malle_sad = function(block) {
	return "m12 ";
}
Blockly.Popr.malle_interested = function(block) {
	return "m13 ";
}
Blockly.Popr.malle_hi = function(block) {
	return "m14 ";
}
Blockly.Popr.malle_bye = function(block) {
	return "m15 ";
}
/* Control blocks */
Blockly.Popr.control_stop = function(block) {      	
  return "c01 ";
}
Blockly.Popr.control_forever = function(block) {
  var code = "c02 ";
  var child = block.getChildren()[0];
  while (child != null) {
	code += Blockly.Popr.blockToCode(child);
	child = child.getNextBlock();
  }
  return code + "ec02";
}
Blockly.Popr.control_repeat = function(block) {      	
  //var code = block.type + "_";
  var code = "c03_";
  var children = block.getChildren();
  var child = children[0];
  code += child.getField("NUM").getValue() + " ";
   
  child = children[1]; 
  while (child != null) {
    code += Blockly.Popr.blockToCode(child);
	child = child.getNextBlock();
  }
  //return code + "end_" + block.type + " ";
  return code + "ec03 ";
}
Blockly.Popr.control_wait = function(block) {      	
  var value;
  for (var i = 0, child; child = block.getChildren()[i]; i++) {
    if (child.getField("NUM") != null) {
	  value = child.getField("NUM").getValue();
	}
  }
  return "c04_" + value + " ";
}
Blockly.Popr.control_sametime = function(block) {      	
  var code = "c05 ";
  var child = block.getChildren()[0];
  while (child != null && child != block) {
    code += Blockly.Popr.blockToCode(child);
    child = child.getNextBlock();
  }
  return code + "ec05 ";
}
/* Game */
Blockly.Popr.event_whenwin = function(block) {
  return "e06 ";
}
Blockly.Popr.event_whenlose = function(block) {
    return "e07 ";
}
Blockly.Popr.event_whentie = function(block) {
    return "e08 ";
}