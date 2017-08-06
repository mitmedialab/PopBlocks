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
 * @fileoverview Wedo blocks for Scratch (Horizontal)
 * @author ascii@media.mit.edu <Andrew Sliwinski>
 */
'use strict';

goog.provide('Blockly.Blocks.game');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['event_whenwin'] = {
  /**
   * Block for winning the game.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenwin",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/win.svg",
          "width": 40,
          "height": 40,
          "alt": "When robot wins game"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};
Blockly.Blocks['event_whentie'] = {
  /**
   * Block for tieing the game.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whentie",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/tie.svg",
          "width": 40,
          "height": 40,
          "alt": "When robot ties game"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};

Blockly.Blocks['event_whenlose'] = {
  /**
   * Block for losing the game.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenlose",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/lose.svg",
          "width": 40,
          "height": 40,
          "alt": "When robot loses game"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};