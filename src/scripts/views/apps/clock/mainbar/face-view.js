/******************************************************************************\
|                                                                              |
|                                face-view.js                                  |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used to display the time.                         |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import BaseView from '../../../../views/base-view.js';
import AnalogDisplay from '../../../../views/apps/clock/mainbar/faces/analog-display-view.js';
import DigitalDisplay from '../../../../views/apps/clock/mainbar/faces/digital-display-view.js';

export default BaseView.extend({

	//
	// attributes
	//

	className: 'face',

	template: template(`
		<div class="empty pie"></div>
		<div class="half-full pie slice1"></div>
		<div class="half-empty pie slice2"></div>
		<div class="display"></div>
	`),

	regions: {
		"display": {
			el: '.display',
			replaceElement: true
		}
	},

	//
	// constructor
	//

	initialize: function() {
		this.mode = this.options.mode;
	},

	//
	// setting methods
	//

	setMode: function(mode) {

		// set attributes
		//
		this.mode = mode;

		// update display
		//
		this.render();
	},

	//
	// rendering methods
	//

	onRender: function() {

		// update view
		//
		this.showDisplay();
	},

	showDisplay: function() {
		switch (this.mode) {
			case 'analog':
				this.showAnalogDisplay();
				break;
			case 'digital':
				this.showDigitalDisplay();
				break;
		}
	},

	showAnalogDisplay: function() {
		this.showChildView('display', new AnalogDisplay());
	},

	showDigitalDisplay: function() {
		this.showChildView('display', new DigitalDisplay());
	}
});