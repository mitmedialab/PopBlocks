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

goog.provide('Blockly.Blocks.wedo');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['dropdown_wedo_setcolor'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_mystery.svg',
              value: 'mystery', width: 48, height: 48, alt: 'Mystery'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_yellow.svg',
              value: 'yellow', width: 48, height: 48, alt: 'Yellow'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_orange.svg',
            value: 'orange', width: 48, height: 48, alt: 'Orange'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_coral.svg',
            value: 'red', width: 48, height: 48, alt: 'Red'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_magenta.svg',
            value: 'pink', width: 48, height: 48, alt: 'Pink'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_purple.svg',
            value: 'purple', width: 48, height: 48, alt: 'Purple'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_blue.svg',
            value: 'blue', width: 48, height: 48, alt: 'Blue'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_green.svg',
            value: 'green', width: 48, height: 48, alt: 'Green'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-led_white.svg',
              value: 'white', width: 48, height: 48, alt: 'White'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.looks.primary,
      Blockly.Colours.looks.secondary,
      Blockly.Colours.looks.tertiary
    );
  }
};

Blockly.Blocks['dropdown_wedo_setnote'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_c.svg',
              value: '1', width: 48, height: 48, alt: 'C'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_cis.svg',
              value: '2', width: 48, height: 48, alt: 'C#'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_d.svg',
              value: '3', width: 48, height: 48, alt: 'D'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_dis.svg',
              value: '4', width: 48, height: 48, alt: 'D#'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_e.svg',
              value: '5', width: 48, height: 48, alt: 'E'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_f.svg',
              value: '6', width: 48, height: 48, alt: 'F'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_fis.svg',
              value: '7', width: 48, height: 48, alt: 'F#'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_g.svg',
              value: '8', width: 48, height: 48, alt: 'G'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_gis.svg',
              value: '9', width: 48, height: 48, alt: 'G#'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_a.svg',
              value: '10', width: 48, height: 48, alt: 'A'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_ais.svg',
              value: '11', width: 48, height: 48, alt: 'A#'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/set-note_b.svg',
              value: '12', width: 48, height: 48, alt: 'B'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.sounds.primary,
      Blockly.Colours.sounds.secondary,
      Blockly.Colours.sounds.tertiary
    );
  }
};

Blockly.Blocks['dropdown_wedo_number'] = {
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
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.motion.primary,
      Blockly.Colours.motion.secondary,
      Blockly.Colours.motion.tertiary
    );
  }
};

Blockly.Blocks['wedo_setcolor'] = {
  /**
   * Block to set color of LED
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_setcolor",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/set-led_blue.svg",
          "width": 40,
          "height": 40,
          "alt": "Set LED Color"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['wedo_playnote'] = {
  /**
   * Block to set note of piezo
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_playnote",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/set-note_c.svg",
          "width": 40,
          "height": 40,
          "alt": "Set Piezo Note"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sounds,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['wedo_motorforward'] = {
  /**
   * Block to move motor forward for a duration
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorforward",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/forward.svg",
          "width": 40,
          "height": 40,
          "alt": "Wedo Motor Forward"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motorbackward'] = {
  /**
   * Block to move motor backward for a duration
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorbackward",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/backward.svg",
          "width": 40,
          "height": 40,
          "alt": "Wedo Motor Backward"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motorleft'] = {
  /**
   * Block to move motors left for a duration
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorleft",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/left.svg",
          "width": 40,
          "height": 40,
          "alt": "Wedo Motor Left"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motorright'] = {
  /**
   * Block to move motors right for a duration
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorright",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/right.svg",
          "width": 40,
          "height": 40,
          "alt": "Wedo Motor Right"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motor1clockwise'] = {
  /**
   * Block to spin motor clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motor1clockwise",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-clockwise.svg",
          "width": 40,
          "height": 40,
          "alt": "Turn motor 1 clockwise"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motor1counterclockwise'] = {
  /**
   * Block to spin motor counter-clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motor1counterclockwise",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-counterclockwise.svg",
          "width": 40,
          "height": 40,
          "alt": "Turn motor 1 counter-clockwise"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motor1stop'] = {
  /**
   * Block to spin motor counter-clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motor1stop",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop motor 1"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motor2clockwise'] = {
  /**
   * Block to spin motor clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motor2clockwise",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-clockwise.svg",
          "width": 40,
          "height": 40,
          "alt": "Turn motor 2 clockwise"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.tertiary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motor2counterclockwise'] = {
  /**
   * Block to spin motor counter-clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motor2counterclockwise",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-counterclockwise.svg",
          "width": 40,
          "height": 40,
          "alt": "Turn motor 2 counter-clockwise"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.tertiary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motor2stop'] = {
  /**
   * Block to spin motor counter-clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motor2stop",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-stop.svg",
          "width": 40,
          "height": 40,
          "alt": "Stop motor 2"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.tertiary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['dropdown_wedo_motorspeed'] = {
  /**
   * Block for motor speed drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_motor-speed_slow.svg',
              value: 'slow', width: 48, height: 48, alt: 'Slow'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_motor-speed_med.svg',
              value: 'medium', width: 48, height: 48, alt: 'Medium'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_motor-speed_fast.svg',
              value: 'fast', width: 48, height: 48, alt: 'Fast'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.motion.primary,
      Blockly.Colours.motion.secondary,
      Blockly.Colours.motion.tertiary
    );
  }
};

Blockly.Blocks['wedo_motorspeed'] = {
  /**
   * Block to set motor speed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorspeed",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-speed_fast.svg",
          "width": 40,
          "height": 40,
          "alt": "Motor Speed"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['dropdown_wedo_whentilt'] = {
  /**
   * Block for when tilt drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
            {type: 'placeholder', width: 48, height: 48},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-forward.svg',
              value: 'forward', width: 48, height: 48, alt: 'Tilt forward'},
            {type: 'placeholder', width: 48, height: 48},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-left.svg',
              value: 'left', width: 48, height: 48, alt: 'Tilt left'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt.svg',
              value: 'any', width: 48, height: 48, alt: 'Tilt any'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-right.svg',
                value: 'right', width: 48, height: 48, alt: 'Tilt right'},
            {type: 'placeholder', width: 48, height: 48},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-backward.svg',
                value: 'backward', width: 48, height: 48, alt: 'Tilt backward'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.event.primary,
      Blockly.Colours.event.secondary,
      Blockly.Colours.event.tertiary
    );
  }
};

Blockly.Blocks['wedo_whentilt'] = {
  /**
   * Block for when tilted.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_whentilt",
      "message0": "%1",// %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_when-tilt.svg",
          "width": 40,
          "height": 40,
          "alt": "When tilted"
        }/*,
        {
          "type": "input_value",
          "name": "CHOICE"
        }*/
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

Blockly.Blocks['wedo_whendistanceclose'] = {
  /**
   * Block for when distance sensor is close.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_whendistanceclose",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_when-distance_close.svg",
          "width": 40,
          "height": 40,
          "alt": "When distance close"
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

Blockly.Blocks['wedo_add'] = {
  /**
   * Block to add a Wedo
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_add",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_add.svg",
          "width": 40,
          "height": 40,
          "alt": "Add Wedo"
        }
      ],
      "inputsInline": true,
      "category": Blockly.Categories.pen,
      "colour": Blockly.Colours.pen.primary,
      "colourSecondary": Blockly.Colours.pen.secondary,
      "colourTertiary": Blockly.Colours.pen.tertiary
    });
  }
};
