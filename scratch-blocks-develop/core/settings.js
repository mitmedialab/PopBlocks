/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2015 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Object representing a setting icon.
 * @author randi williams
 */
'use strict';

goog.provide('Blockly.Settings');

goog.require('Blockly.Touch');
goog.require('goog.dom');


/**
 * Class for a settings.
 * @param {!Blockly.Workspace} workspace The workspace to sit in.
 * @constructor
 */
Blockly.Settings = function(workspace) {
  this.workspace_ = workspace;
};

/**
 * Width of the settings.
 * @type {number}
 * @private
 */
Blockly.Settings.prototype.WIDTH_ = 60;

/**
 * Height of the settings.
 * @type {number}
 * @private
 */
Blockly.Settings.prototype.HEIGHT_ = 60;

/**
 * Distance between settings and bottom edge of workspace.
 * @type {number}
 * @private
 */
Blockly.Settings.prototype.MARGIN_BOTTOM_ = 0;

/**
 * Distance between settings and right edge of workspace.
 * @type {number}
 * @private
 */
Blockly.Settings.prototype.MARGIN_SIDE_ = 20 - (Blockly.Settings.prototype.WIDTH_-47)/2;

/**
 * The SVG group containing the settings.
 * @type {Element}
 * @private
 */
Blockly.Settings.prototype.svgGroup_ = null;

/**
 * Left coordinate of the settings.
 * @type {number}
 * @private
 */
Blockly.Settings.prototype.left_ = 0;

/**
 * Top coordinate of the settings.
 * @type {number}
 * @private
 */
Blockly.Settings.prototype.top_ = 0;

/**
 * Create the settings.
 * @return {!Element} The settings SVG group.
 */
Blockly.Settings.prototype.createDom = function() {
  var workspace = this.workspace_;
  this.svgGroup_ = Blockly.createSvgElement('g',
      {'class': 'blocklySettings'}, null);
  var rnd = String(Math.random()).substring(2);

  var clip = Blockly.createSvgElement('clipPath',
      {'id': 'blocklySettingsClipPath' + rnd},
      this.svgGroup_);
  Blockly.createSvgElement('rect',
      {'width': this.WIDTH_, 'height': this.HEIGHT_},
      clip);
  var settingsSvg = Blockly.createSvgElement('image',
      {'width': this.WIDTH_, 'x': 0,
       'height': this.HEIGHT_, 'y': 0},
      this.svgGroup_);
  settingsSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      workspace.options.pathToMedia + "settings.svg");
	this.svgGroup_.style.opacity = 0.8;
 

  // Attach event listeners.
  Blockly.bindEventWithChecks_(settingsSvg, 'mousedown', null, function(e) {
    Blockly.Touch.clearTouchIdentifier(); // Don't block future drags.
    e.stopPropagation();  // Don't start a workspace scroll.
    e.preventDefault();  // Stop double-clicking from selecting text.
  var event = new Blockly.Events.Ui(null, 'settings', null, null);
  event.workspaceId = workspace.id;
  Blockly.Events.fire(event);
  });

  return this.svgGroup_;
};

/**
 * Initialize the settings.
 * @param {number} bottom Distance from workspace bottom to bottom of controls.
 * @return {number} Distance from workspace bottom to the top of controls.
 */
Blockly.Settings.prototype.init = function(bottom) {
  this.bottom_ = this.MARGIN_BOTTOM_ + bottom;
  return this.bottom_ + this.HEIGHT_;
};

/**
 * Dispose of this settings.
 * Unlink from all DOM elements to prevent memory leaks.
 */
Blockly.Settings.prototype.dispose = function() {
  if (this.svgGroup_) {
    goog.dom.removeNode(this.svgGroup_);
    this.svgGroup_ = null;
  }
  this.workspace_ = null;
};

/**
 * Move the settings to the bottom-right corner.
 */
Blockly.Settings.prototype.position = function() {
  var metrics = this.workspace_.getMetrics();
  if (!metrics) {
    // There are no metrics available (workspace is probably not visible).
    return;
  }
  if (this.workspace_.RTL) {
    this.left_ = this.MARGIN_SIDE_ + Blockly.Scrollbar.scrollbarThickness;
    if (metrics.toolboxPosition == Blockly.TOOLBOX_AT_LEFT) {
      this.left_ += metrics.flyoutWidth;
      if (this.workspace_.toolbox_) {
        this.left_ += metrics.absoluteLeft;
      }
    }
  } else {
    this.left_ = metrics.viewWidth + metrics.absoluteLeft -
        this.WIDTH_ - this.MARGIN_SIDE_ - Blockly.Scrollbar.scrollbarThickness;

    if (metrics.toolboxPosition == Blockly.TOOLBOX_AT_RIGHT) {
      this.left_ -= metrics.flyoutWidth;
    }
  }
  this.top_ = metrics.viewHeight + metrics.absoluteTop -
      this.HEIGHT_ - this.bottom_;
  if (metrics.toolboxPosition == Blockly.TOOLBOX_AT_BOTTOM) {
    this.top_ -= metrics.flyoutHeight;
  }
  this.svgGroup_.setAttribute('transform',
      'translate(' + this.left_ + ',' + this.top_ + ')');
};
