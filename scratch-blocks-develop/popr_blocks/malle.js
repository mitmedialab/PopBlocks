/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Massachusetts Institute of Technology
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
 * @fileoverview Mall-E blocks for Scratch (Horizontal)
 * @author randiw12@media.mit.edu <Randi Williams>
 */
'use strict';

goog.provide('Blockly.Blocks.malle');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['event_whentouched'] = {
  /**
   * Block for when Mall-e is touched
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whentouched",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_whentouched.svg",
          "width": 40,
          "height": 40,
          "alt": "When Mall-E touched",
          "flip_rtl": true
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

Blockly.Blocks['event_whenlight'] = {
  /**
   * Block for when Mall-e sees light
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenlight",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_whenlight.svg",
          "width": 40,
          "height": 40,
          "alt": "When Mall-E sees light",
          "flip_rtl": true
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

Blockly.Blocks['event_whenheard'] = {
  /**
   * Block for when Mall-e hears loud sounds
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenheard",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_whenhear.svg",
          "width": 40,
          "height": 40,
          "alt": "When Mall-E hears a sound",
          "flip_rtl": true
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

Blockly.Blocks['dropdown_malle_setcolor'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_mystery.svg',
              value: 'mystery', width: 48, height: 48, alt: 'Mystery'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_yellow.svg',
              value: 'yellow', width: 48, height: 48, alt: 'Yellow'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_orange.svg',
            value: 'orange', width: 48, height: 48, alt: 'Orange'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_red.svg',
            value: 'red', width: 48, height: 48, alt: 'Red'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_pink.svg',
            value: 'pink', width: 48, height: 48, alt: 'Pink'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_purple.svg',
            value: 'purple', width: 48, height: 48, alt: 'Purple'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_blue.svg',
            value: 'blue', width: 48, height: 48, alt: 'Blue'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_green.svg',
            value: 'green', width: 48, height: 48, alt: 'Green'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/malle/set_eyes_white.svg',
              value: 'white', width: 48, height: 48, alt: 'White'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.looks.primary,
      Blockly.Colours.looks.secondary,
      Blockly.Colours.looks.tertiary
    );
  }
};

Blockly.Blocks['dropdown_malle_setnote'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_c.svg',
              value: '4', width: 48, height: 48, alt: 'C'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_d.svg',
              value: '5', width: 48, height: 48, alt: 'D'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_e.svg',
              value: '6', width: 48, height: 48, alt: 'E'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_f.svg',
              value: '7', width: 48, height: 48, alt: 'F'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_g.svg',
              value: '1', width: 48, height: 48, alt: 'G'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_a.svg',
              value: '2', width: 48, height: 48, alt: 'A'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/note_b.svg',
              value: '3', width: 48, height: 48, alt: 'B'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.sounds.primary,
      Blockly.Colours.sounds.secondary,
      Blockly.Colours.sounds.tertiary
    );
  }
};

Blockly.Blocks['dropdown_malle_setaudio'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu3([]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.sounds.primary,
      Blockly.Colours.sounds.secondary,
      Blockly.Colours.sounds.tertiary
    );
  }
};

Blockly.Blocks['malle_setcolor'] = {
  /**
   * Block to set color of etes
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_setcolor",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/set-eyes-blue.svg",
          "width": 40,
          "height": 40,
          "alt": "Set eye Color"
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

Blockly.Blocks['malle_record'] = {
  /**
   * Block repeats a recording
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_record",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/microphone.svg",
          "width": 40,
          "height": 40,
          "alt": "Execute malle recording"
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

Blockly.Blocks['malle_playnote'] = {
  /**
   * Block to have malle play piano note
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_playnote",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/set-note_c.svg",
          "width": 40,
          "height": 40,
          "alt": "Malle play note"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.soudns,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['malle_fart'] = {
  /**
   * Block executes a fart animation on Mall-E
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_fart",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/fart.svg",
          "width": 40,
          "height": 40,
          "alt": "Execute fart animation"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};

Blockly.Blocks['malle_idlestill'] = {
  /**
   * Block executes Mall-E returning to idle
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_idlestill",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/idlestill.svg",
          "width": 40,
          "height": 40,
          "alt": "Execute idle animation"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};
Blockly.Blocks['malle_hi'] = {
  /**
   * Block plays hi speech
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_hi",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/hi.svg",
          "width": 40,
          "height": 40,
          "alt": "Play hi speech"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};

Blockly.Blocks['malle_bye'] = {
  /**
   * Block plays bye speech
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_bye",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/bye.svg",
          "width": 40,
          "height": 40,
          "alt": "Play bye speech"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};

Blockly.Blocks['malle_nod'] = {
  /**
   * Block executes nod animation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_nod",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/nod.svg",
          "width": 40,
          "height": 40,
          "alt": "Play nod animation"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};

Blockly.Blocks['malle_scared'] = {
  /**
   * Block executes scared animation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_scared",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/scared.svg",
          "width": 40,
          "height": 40,
          "alt": "Play scared animation"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};

Blockly.Blocks['malle_happywiggle'] = {
  /**
   * Block executes happy wiggle (singing) animation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_happywiggle",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/happy_wiggle.svg",
          "width": 40,
          "height": 40,
          "alt": "Play happy wiggle animation and sing"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};

Blockly.Blocks['malle_posesleepingsnore'] = {
  /**
   * Block executes the sleeping pose and Mall-E snores
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_posesleepingsnore",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/pose_sleeping_snore.svg",
          "width": 40,
          "height": 40,
          "alt": "Go to sleeping pose and snore loudly"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};


Blockly.Blocks['malle_no'] = {
  /**
   * Block executes Mall-E saying no animation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_no",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/no.svg",
          "width": 40,
          "height": 40,
          "alt": "Shake head no and go mm mm"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};



Blockly.Blocks['malle_sad'] = {
  /**
   * Block executes sad animation where Mall-E frowns, but only for a second
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_sad",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/sad.svg",
          "width": 40,
          "height": 40,
          "alt": "Frown and make aww sound"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};


Blockly.Blocks['malle_yawn'] = {
  /**
   * Block
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_yawn",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/yawn.svg",
          "width": 40,
          "height": 40,
          "alt": "Yawn"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};


Blockly.Blocks['malle_interested'] = {
  /**
   * Block executes interested animation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_interested",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/interested.svg",
          "width": 40,
          "height": 40,
          "alt": "Make one eye bigger than the other and look interested"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};


Blockly.Blocks['malle_excited'] = {
  /**
   * Block executes excited animation and goes "Wee"
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_excited",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/excited.svg",
          "width": 40,
          "height": 40,
          "alt": "Go wee"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};


Blockly.Blocks['malle_dancebingo'] = {
  /**
   * Block executed singing Bingo animation
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "malle_dancebingo",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/malle/dance_bingo.svg",
          "width": 40,
          "height": 40,
          "alt": "Sing B-I-NGO"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.more,
      "colour": Blockly.Colours.more.primary,
      "colourSecondary": Blockly.Colours.more.secondary,
      "colourTertiary": Blockly.Colours.more.tertiary
    });
  }
};
