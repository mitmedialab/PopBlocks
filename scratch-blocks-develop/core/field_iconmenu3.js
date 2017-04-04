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
 * @fileoverview Icon picker input field.
 * This is primarily for use in Scratch Horizontal blocks.
 * Pops open a drop-down with icons; when an icon is selected, it replaces
 * the dropdown image, rather than the total block image
 * @author randiw12@mit.edu (Randi Williams)
 */
'use strict';

goog.provide('Blockly.FieldIconMenu3');

goog.require('Blockly.DropDownDiv');

/**
 * Class for an icon menu field.
 * @param {Object} icons List of icons. These take the same options as an Image Field.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldIconMenu3 = function(icons) {
  /** @type {object} */
  this.icons_ = icons;
  // Example:
  // [{src: '...', width: 20, height: 20, alt: '...', value: 'machine_value'}, ...]
  // First icon provides the default values.
  var defaultValue = '';
  Blockly.FieldIconMenu3.superClass_.constructor.call(this, defaultValue);
  this.addArgType('iconmenu');
};
goog.inherits(Blockly.FieldIconMenu3, Blockly.Field);


/**
 * Fixed width of the drop-down, in px. Icon buttons will flow inside this width.
 * @type {number}
 * @const
 */
Blockly.FieldIconMenu3.DROPDOWN_WIDTH = 168;

/**
 * Save the primary colour of the source block while the menu is open, for reset.
 * @type {number|string}
 * @private
 */
Blockly.FieldIconMenu3.savedPrimary_ = null;

/**
 * Called when the field is placed on a block.
 * @param {Block} block The owning block.
 */
Blockly.FieldIconMenu3.prototype.init = function(block) {
  // Render the arrow icon
  // Fixed sizes in px. Saved for creating the flip transform of the menu renders above the button.
  var arrowSize = 12;
  /** @type {Number} */
  this.arrowX_ = 18;
  /** @type {Number} */
  this.arrowY_ = 10;
  
  var imgSrc = this.getSrcForValue(this.value_);
  if (block.RTL) {
    // In RTL, the icon position is flipped and rendered from the right (offset by width)
    this.arrowX_ = -this.arrowX_ - arrowSize;
  }
  /** @type {Element} */
  this.arrowIcon_ = Blockly.createSvgElement('image', {
    'height': arrowSize + 'px',
    'width': arrowSize + 'px',
    'transform': 'translate(' + this.arrowX_ + ',' + this.arrowY_ + ')'
  });
  this.arrowIcon_.setAttributeNS('http://www.w3.org/1999/xlink',
      'xlink:href', Blockly.mainWorkspace.options.pathToMedia + 'dropdown-arrow.svg');
  block.getSvgRoot().appendChild(this.arrowIcon_);
  Blockly.FieldIconMenu3.superClass_.init.call(this, block);
};

/**
 * Mouse cursor style when over the hotspot that initiates the editor.
 * @const
 */
Blockly.FieldIconMenu3.prototype.CURSOR = 'default';

/**
* Set the language-neutral value for this icon drop-down menu.
 * @param {?string} newValue New value.
 * @override
 */
Blockly.FieldIconMenu3.prototype.setValue = function(newValue) {
  if (newValue === null || newValue === this.value_) {
    return;  // No change
  }
  if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.Change(
        this.sourceBlock_, 'field', this.name, this.value_, newValue));
  }
  this.value_ = newValue;
  // Find the relevant icon in this.icons_ to get the image src.
  this.setParentFieldImage(this.getSrcForValue(this.value_));
};

/**
* Find the parent block's FieldImage and set its src.
 * @param {?string} src New src for the parent block FieldImage.
 * @private
 */
Blockly.FieldIconMenu3.prototype.setParentFieldImage = function(src) {
  // Only attempt if we have a set sourceBlock_ 
  // It's possible that this function could be called before
  // a parent block is set; in that case, fail silently.
  if (this.sourceBlock_ && this.sourceBlock_.parentBlock_) {
    var parentBlock = this.sourceBlock_.parentBlock_;
    // Loop through all inputs' fields to find the first FieldImage
    for (var i = 0, input; input = parentBlock.inputList[i]; i++) {
      for (var j = 0, field; field = input.fieldRow[j]; j++) {
        if (field instanceof Blockly.FieldImage) {
          // Src for a FieldImage is stored in its value.
          field.setValue(src);
          return;
        }
      }
    }
  }
};

/**
* Find the block's dropdown image and set its image.
 * @param {?string} src New src for the block dropdown image
 * @private
 */
Blockly.FieldIconMenu3.prototype.setDropdownImage = function(src) {
  //this.arrowIcon_.setAttributeNS('http://www.w3.org/1999/xlink',
  //    'xlink:href', Blockly.mainWorkspace.options.pathToMedia + 'dropdown-arrow.svg');
  // Only attempt if we have a set sourceBlock_
  if (this.sourceBlock_) {
    var sourceBlock = this.sourceBlock_;
    // Loop through all inputs' fields to find the first FieldImage
    for (var i = 0, input; input = sourceBlock.inputList[i]; i++) {
      for (var j = 0, field; field = input.fieldRow[j]; j++) {
        if (field instanceof Blockly.FieldIconMenu3) {
          // Src for a FieldImage is stored in its value.
          if (field.arrowIcon_) {
            field.arrowIcon_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Blockly.mainWorkspace.options.pathToMedia + src);
	        return;
	      }
        }
      }
    }
  }
};

/**
 * Get the language-neutral value from this drop-down menu.
 * @return {string} Current language-neutral value.
 */
Blockly.FieldIconMenu3.prototype.getValue = function() {
  return this.value_;
};

/**
 * For a language-neutral value, get the src for the image that represents it.
 * @param {string} value Language-neutral value to look up.
 * @return {string} Src to image representing value
 */
Blockly.FieldIconMenu3.prototype.getSrcForValue = function(value) {
  return Blockly.mainWorkspace.options.pathToMedia + "icons/mic" + value + ".svg";
  for (var i = 0, icon; icon = this.icons_[i]; i++) {
    if (icon.value === value) {
      return icon.src;
    }
  }
};

/**
 * Show the drop-down menu for editing this field.
 * @private
 */
Blockly.FieldIconMenu3.prototype.showEditor_ = function() {
  // If there is an existing drop-down we own, this is a request to hide the drop-down.
  if (Blockly.DropDownDiv.hideIfOwner(this)) {
    return;
  }
  // If there is an existing drop-down someone else owns, hide it immediately and clear it.
  Blockly.DropDownDiv.hideWithoutAnimation();
  Blockly.DropDownDiv.clearContent();
  // Populate the drop-down with the icons for this field.
  var contentDiv = Blockly.DropDownDiv.getContentDiv();
  // Accessibility properties
  contentDiv.setAttribute('role', 'menu');
  contentDiv.setAttribute('aria-haspopup', 'true');
  
  // Add plus button
  var plusButton = document.createElement('button');
  plusButton.setAttribute('id', ': plus');
  plusButton.setAttribute('role', 'menuitem');
  plusButton.setAttribute('class', 'blocklyDropDownButton');
  plusButton.title = 'add';
  plusButton.style.width = '48px';
  plusButton.style.height = '48px';
  plusButton.style.backgroundColor = this.sourceBlock_.getColour();
  plusButton.style.borderColor = this.sourceBlock_.getColourTertiary();
  Blockly.bindEvent_(plusButton, 'click', this, this.plusClick_);
  Blockly.bindEvent_(plusButton, 'mouseup', this, this.plusClick_);
  
  Blockly.bindEvent_(plusButton, 'mousedown', plusButton, function(e) {
      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
      e.preventDefault();
    });
    Blockly.bindEvent_(plusButton, 'mouseover', plusButton, function() {
      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
	  contentDiv.setAttribute('aria-activedescendant', this.id);
	});
	Blockly.bindEvent_(plusButton, 'mouseout', plusButton, function() {
  	  this.setAttribute('class', 'blocklyDropDownButton');
	  contentDiv.removeAttribute('aria-activedescendant');
	});
  var buttonImg = document.createElement('img');
  buttonImg.src = Blockly.mainWorkspace.options.pathToMedia + 'add.svg';
  plusButton.setAttribute('data-value', '');
  buttonImg.setAttribute('data-value', '');
  plusButton.appendChild(buttonImg);
  contentDiv.appendChild(plusButton);
  // end add button
  
  for (var i = 0, icon; icon = this.icons_[i]; i++) {
    // Icons with the type property placeholder take up space but don't have any functionality
    // Use for special-case layouts
    if (icon.type == 'placeholder') {
      var placeholder = document.createElement('span');
      placeholder.setAttribute('class', 'blocklyDropDownPlaceholder');
      placeholder.style.width = icon.width + 'px';
      placeholder.style.height = icon.height + 'px';
      contentDiv.appendChild(placeholder);
      continue;
    }
    var button = document.createElement('button');
    button.setAttribute('id', ':' + i); // For aria-activedescendant
    button.setAttribute('role', 'menuitem');
    button.setAttribute('class', 'blocklyDropDownButton');
    button.title = icon.alt;
    button.style.width = icon.width + 'px';
    button.style.height = icon.height + 'px';
    var backgroundColor = this.sourceBlock_.getColour();
    if (icon.value == this.getValue()) {
      // This icon is selected, show it in a different colour
      backgroundColor = this.sourceBlock_.getColourTertiary();
      button.setAttribute('aria-selected', 'true');
    }
    button.style.backgroundColor = backgroundColor;
    button.style.borderColor = this.sourceBlock_.getColourTertiary();
    Blockly.bindEvent_(button, 'click', this, this.buttonClick_);
    Blockly.bindEvent_(button, 'mouseup', this, this.buttonClick_);
    // These are applied manually instead of using the :hover pseudoclass
    // because Android has a bad long press "helper" menu and green highlight
    // that we must prevent with ontouchstart preventDefault
    Blockly.bindEvent_(button, 'mousedown', button, function(e) {
      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
      e.preventDefault();
    });
    Blockly.bindEvent_(button, 'mouseover', button, function() {
      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
      contentDiv.setAttribute('aria-activedescendant', this.id);
    });
    Blockly.bindEvent_(button, 'mouseout', button, function() {
      this.setAttribute('class', 'blocklyDropDownButton');
      contentDiv.removeAttribute('aria-activedescendant');
    });
    var buttonImg = document.createElement('img');
    buttonImg.src = Blockly.mainWorkspace.options.pathToMedia + 'icons/mic' + (i+1) + '.svg';
    //buttonImg.alt = icon.alt;
    // Upon click/touch, we will be able to get the clicked element as e.target
    // Store a data attribute on all possible click targets so we can match it to the icon.
    button.setAttribute('data-value', icon.value);
    buttonImg.setAttribute('data-value', icon.value);
    button.appendChild(buttonImg);
    contentDiv.appendChild(button);
  }
  
  contentDiv.style.width = Blockly.FieldIconMenu.DROPDOWN_WIDTH + 'px';

  Blockly.DropDownDiv.setColour(this.sourceBlock_.getColour(), this.sourceBlock_.getColourTertiary());
  Blockly.DropDownDiv.setCategory(this.sourceBlock_.parentBlock_.getCategory());

  // Update source block colour to look selected
  this.savedPrimary_ = this.sourceBlock_.getColour();
  this.sourceBlock_.setColour(this.sourceBlock_.getColourSecondary(),
    this.sourceBlock_.getColourSecondary(), this.sourceBlock_.getColourTertiary());

  var scale = this.sourceBlock_.workspace.scale;
  // Offset for icon-type horizontal blocks.
  var secondaryYOffset = (
    -(Blockly.BlockSvg.MIN_BLOCK_Y * scale) - (Blockly.BlockSvg.FIELD_Y_OFFSET * scale)
  );
  var renderedPrimary = Blockly.DropDownDiv.showPositionedByBlock(
      this, this.sourceBlock_, this.onHide_.bind(this), secondaryYOffset);
  if (!renderedPrimary) {
    // Adjust for rotation
    var arrowX = this.arrowX_ + Blockly.DropDownDiv.ARROW_SIZE / 1.5 + 1;
    var arrowY = this.arrowY_ + Blockly.DropDownDiv.ARROW_SIZE / 1.5;
    // Flip the arrow on the button
    this.arrowIcon_.setAttribute('transform',
      'translate(' + arrowX + ',' + arrowY + ') rotate(180)');
  }
};

/**
 * Callback for when plus button is clicked inside the drop-down.
 * Should be bound to the FieldIconMenu.
 * @param {Event} e DOM event for the click/touch
 * @private
 */
Blockly.FieldIconMenu3.prototype.plusClick_ = function(e) {
  var i = this.icons_.length;
  if (i < 9) {
	  var event = new Blockly.Events.Record(i+1);
	  event.workspaceId = Blockly.mainWorkspace.id;
	  Blockly.Events.fire(event);

	  var contentDiv = Blockly.DropDownDiv.getContentDiv();
	  	var icon = {value: '' + (i+1),
	  				width: 48,
	  				height: 48,
	  				alt: 'Record ' + (i+1)};
	  	this.icons_.push(icon);
	    var button = document.createElement('button');
	    button.setAttribute('id', ':' + i); // For aria-activedescendant
	    button.setAttribute('role', 'menuitem');
	    button.setAttribute('class', 'blocklyDropDownButton');
	    button.title = icon.alt;
	    button.style.width = icon.width + 'px';
	    button.style.height = icon.height + 'px';
	    var backgroundColor = this.sourceBlock_.getColour();
	    if (icon.value == this.getValue()) {
	      // This icon is selected, show it in a different colour
	      backgroundColor = this.sourceBlock_.getColourTertiary();
	      button.setAttribute('aria-selected', 'true');
	    }
	    button.style.backgroundColor = backgroundColor;
	    button.style.borderColor = this.sourceBlock_.getColourTertiary();
	    Blockly.bindEvent_(button, 'click', this, this.buttonClick_);
	    Blockly.bindEvent_(button, 'mouseup', this, this.buttonClick_);
	    // These are applied manually instead of using the :hover pseudoclass
	    // because Android has a bad long press "helper" menu and green highlight
	    // that we must prevent with ontouchstart preventDefault
	    Blockly.bindEvent_(button, 'mousedown', button, function(e) {
	      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
	      e.preventDefault();
	    });
	    Blockly.bindEvent_(button, 'mouseover', button, function() {
	      this.setAttribute('class', 'blocklyDropDownButton blocklyDropDownButtonHover');
	      contentDiv.setAttribute('aria-activedescendant', this.id);
	    });
	    Blockly.bindEvent_(button, 'mouseout', button, function() {
	      this.setAttribute('class', 'blocklyDropDownButton');
	      contentDiv.removeAttribute('aria-activedescendant');
	    });
	    var buttonImg = document.createElement('img');
	    buttonImg.src = Blockly.mainWorkspace.options.pathToMedia + 'icons/mic' + (i+1) + '.svg';
	    //buttonImg.alt = icon.alt;
	    // Upon click/touch, we will be able to get the clicked element as e.target
	    // Store a data attribute on all possible click targets so we can match it to the icon.
	    button.setAttribute('data-value', icon.value);
	    buttonImg.setAttribute('data-value', icon.value);
	    button.appendChild(buttonImg);
	    contentDiv.appendChild(button);
	}
};

/**
 * Callback for when a button is clicked inside the drop-down.
 * Should be bound to the FieldIconMenu.
 * @param {Event} e DOM event for the click/touch
 * @private
 */
Blockly.FieldIconMenu3.prototype.buttonClick_ = function(e) {
  var value = e.target.getAttribute('data-value');
  this.setValue(value);
  Blockly.DropDownDiv.hide(); // don't hide, pop open another window?
};

/**
 * Callback for when the drop-down is hidden.
 */
Blockly.FieldIconMenu3.prototype.onHide_ = function() {
  // Reset the button colour and clear accessibility properties
  // Only attempt to do this reset if sourceBlock_ is not disposed.
  // It could become disposed before an onHide_, for example,
  // when a block is dragged from the flyout.
  if (this.sourceBlock_) {
    this.sourceBlock_.setColour(this.savedPrimary_,
      this.sourceBlock_.getColourSecondary(), this.sourceBlock_.getColourTertiary());
  }
  Blockly.DropDownDiv.content_.removeAttribute('role');
  Blockly.DropDownDiv.content_.removeAttribute('aria-haspopup');
  Blockly.DropDownDiv.content_.removeAttribute('aria-activedescendant');
  // Unflip the arrow if appropriate
  this.arrowIcon_.setAttribute('transform', 'translate(' + this.arrowX_ + ',' + this.arrowY_ + ')');
};