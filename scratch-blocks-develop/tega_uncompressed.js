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

Blockly.Tega = new Object();

Blockly.Tega.workspaceToCode = function(workspace) {
  var topBlocks = workspace.getTopBlocks();
  var rules = "";
  for (var i = 0; i < topBlocks.length; i++) {
  	var block = topBlocks[i];
	var code = "";
  	while (block != null) {
  	  code += Blockly.Tega.blockToCode(block);
  	  block = block.getNextBlock();
  	}
    rules += code + ";";
  }
  return rules;
}

Blockly.Tega.blockToCode = function(block) {
	var type = block.type;
	var func = "Blockly.Tega." + type + "(block)";
	return eval(func);
}

/* Event blocks */
Blockly.Tega.tega_silent_bouncingtilt = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_excited = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_fart = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_frustrated = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_happy_dance = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_happy_wiggle = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_leftrightlooking = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_no = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_nod = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_puzzled = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_scared = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_swipe_stageright = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_thinking = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_yawn = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose_forward_up = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_confirm = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_agreement = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_yes = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_sad = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_laugh = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_silent_interested = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_smile = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_dance = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_updownlooking = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_happy_up = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_rocking = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_sway = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_headpointback = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_perkup = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_sideperk = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_circling = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_shimmy = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_proud = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose_smile2 = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose1 = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose2 = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose_sleeping = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose_forward = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_shift_weight1 = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_shift_weight2 = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_breathing = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose_breathing = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_confirm = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_dance_bingo = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_fart = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_leftrightlooking = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_nod = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_bouncingtilt = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_scared = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_happy_dance = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_happy_wiggle = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_pose_sleeping_snore = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_swipe_stageright = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_agreement = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_flat_agreement = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_yes = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_no = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_sad = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_yawn = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_thinking = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_laugh = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_laugh_agreement = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_laugh_yes = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_interested = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_frustrated = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_puzzled = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_excited = function(block) {
  return "motion_" + block.type;
}
Blockly.Tega.tega_cute = function(block) {
  return "speech_tega_/sponsor16/DoYouThinkImCute.wav";
}
Blockly.Tega.tega_name = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a1-a.wav";
}
Blockly.Tega.tega_moon = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a2-b.wav";
}
Blockly.Tega.tega_color = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a4-a.wav";
}
Blockly.Tega.tega_kids = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a5-b.wav";
}
Blockly.Tega.tega_likedance = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a6-b.wav";
}
Blockly.Tega.tega_do_things = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a6-c.wav";
}
Blockly.Tega.tega_penguin = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a8-b.wav";
}
Blockly.Tega.tega_fluffy = function(block) {
  return "speech_tega_/sponsor16/demo_questions_audio/a10-a.wav";
}
Blockly.Tega.tega_hi = function(block) {
  return "speech_tega_/sponsor13/hiTega.wav";
}
Blockly.Tega.tega_bye = function(block) {
  return "speech_tega_/sponsor13/seeyou.wav";
}
