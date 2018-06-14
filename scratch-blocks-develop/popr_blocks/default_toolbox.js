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
    // Expressions (More) category
    '<!--<category name="Expressions" colour="#FF6680" secondaryColour="#FF4D6A" icon="../media/icons/expressions.svg">-->' +
        '<block type="malle_fart"></block>' +
        '<block type="malle_yawn"></block>' +
        '<block type="malle_dancebingo"></block>' +
        '<block type="malle_setemotion">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_emotion">' +
        '<field name="CHOICE">happy</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="malle_setspeech">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_speak">' +
        '<field name="CHOICE">Hi</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<!--<block type="malle_idlestill"></block>' +
        '<block type="malle_nod"></block>' +
        '<block type="malle_no"></block>' +
        '<block type="malle_hi"></block>' +
        '<block type="malle_bye"></block>' +
        '<block type="malle_dancebingo"></block>' +
        '<block type="malle_posesleepingsnore"></block>-->' +
    '<!--</category>-->' +
    // Look category
    '<!--<category name="Look" colour="#9966FF" secondaryColour="#855CD6" icon="../media/icons/looks.svg">-->' + 
    	'<block type="malle_setcolor">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_setcolor">' +
        '<field name="CHOICE">mystery</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="wedo_setcolor">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_setcolor">' +
        '<field name="CHOICE">mystery</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
		'<!--<block type="wedo_add" disabled="true"></block>-->' +
    '<!--</category>-->' + 
    // Sounds category
    '<!--<category name="Sounds" colour="#CF63CF" secondaryColour="#C94FC9" icon="../media/icons/sounds.svg">-->' +
    	'<!--<block type="wedo_playnote">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_wedo_setnote">' +
        '<field name="CHOICE">1</field>' +
        '</shadow>' +
        '</value>' +
        '</block>-->' +
        '<block type="malle_playnote">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_setnote">' +
        '<field name="CHOICE">1</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="malle_record">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_setaudio">' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="malle_repeat">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_malle_setspeech">' +
        '</shadow>' +
        '</value>' +
        '</block>' +
    '<!--</category>-->' +
    // Event category
    '<!--<category name="Events" colour="#FFBF00" secondaryColour="#E6AC00" icon="../media/icons/event_whenflagclicked.svg">-->' +
        '<block type="event_whenflagclicked"></block>' +
        '<block type="event_whentouched"></block>' +
        '<block type="event_whenlight"></block>' +
        '<block type="wedo_whendistanceclose"></block>' +
    '<!--</category>-->' +
    // Motion category
    '<!--<category name="Motion" colour="#4C97FF" secondaryColour="#4280D7" icon="../media/icons/motion.svg">-->' + 
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
    '<!--</category>-->' +
    // Control category
    '<!--<category name="Control" colour="#FFAB19" secondaryColour="#EC9C13" icon="../media/icons/control_forever.svg">-->' +
        '<block type="control_forever"></block>' +
        '<block type="control_repeat">' +
        '<value name="CHOICE">' +
        '<shadow type="dropdown_control_number">' +
        '<field name="NUM">4</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="control_wait">' +
        '<value name="DURATION">' +
        '<shadow type="dropdown_control_number">' +
        '<field name="NUM">1</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '<!--<block type="control_sametime"></block>-->' +
    '<!--</category>-->' +
    /*'<category name="Add" colour="#0fBD8C" secondaryColour="#0DA57A" icon="../media/icons/add.svg">' +
		'<block type="wedo_add" disabled="true"></block>' +
		'<block type="malle_addrobot" disabled="true"></block>' +
    '</category>' +*/
    '</xml>' + // Close XML
    '<xml id="toolbox-simple" style="display: none">' +
    '</xml>';
