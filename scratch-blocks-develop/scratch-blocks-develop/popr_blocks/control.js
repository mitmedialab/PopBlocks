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

/**
 * @fileoverview Control blocks for Scratch (Horizontal)
 * @author ascii@media.mit.edu <Andrew Sliwinski>
 */
'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['dropdown_control_number'] = {
  /**
   * Block for number drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu2([
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/dice-1.svg',
              value: '1', width: 48, height: 48, alt: '1'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/dice-2.svg',
              value: '2', width: 48, height: 48, alt: '2'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/dice-3.svg',
            value: '3', width: 48, height: 48, alt: '3'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/dice-4.svg',
            value: '4', width: 48, height: 48, alt: '4'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/dice-5.svg',
            value: '5', width: 48, height: 48, alt: '5'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/dice-6.svg',
            value: '6', width: 48, height: 48, alt: '6'},
        ]), 'NUM');
    this.setOutput(true);
    this.setColour(Blockly.Colours.control.primary,
      Blockly.Colours.control.secondary,
      Blockly.Colours.control.tertiary
    );
  }
};

Blockly.Blocks['control_forever'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_forever",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_forever.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_repeat'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_repeat",
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_repeat.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        },
        {
          "type": "input_value",
          "name": "CHOICE",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_sametime'] = {
  /**
   * Block to run two blocks at the same time
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_sametime",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        },
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_sametime.svg",
          "width": 40,
          "height": 40,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_stop'] = {
  /**
   * Block for stop all scripts.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_stop",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};

Blockly.Blocks['control_wait'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "control_wait",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/control_wait.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.control.primary,
      "colourSecondary": Blockly.Colours.control.secondary,
      "colourTertiary": Blockly.Colours.control.tertiary
    });
  }
};
