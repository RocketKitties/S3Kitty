/******************************************************************************\
|                                                                              |
|                                clock-view.js                                 |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines an app used for performing timing.                       |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import AppView from '../../../views/apps/common/app-view.js';
import FaceView from '../../../views/apps/clock/mainbar/face-view.js';
import ButtonsView from '../../../views/apps/clock/mainbar/buttons-view.js';

export default AppView.extend({

	//
	// attributes
	//

	name: 'clock',

	template: template(`
		<div class="body last">
			<div class="face"></div>
			<div class="buttons"></div>
		</div>
	`),

	regions: {
		face: {
			el: '.face',
			replaceElement: true
		},
		buttons: {
			el: '.buttons',
			replaceElement: true
		}
	},

	//
	// dialog attributes
	//
	
	size: [300, 300],
	resizable: true,
	maximizable: true,
	min_size: [300, 300],

	//
	// constructor
	//

	initialize: function() {

		// call superclass constructor
		//
		AppView.prototype.initialize.call(this);

		// set static attributes
		//
		this.constructor.current = this;
	},

	//
	// setting methods
	//

	setMode: function(mode, save) {
		this.mode = mode;

		// update display
		//
		this.getChildView('face').setMode(mode);
		this.getChildView('buttons').setMode(mode);

		// save user preferences
		//
		if (save && application.isSignedIn()) {
			this.preferences.save({
				'mode': 'analog'
			});
		}
	},

	//
	// rendering methods
	//

	onRender: function() {
		this.mode = this.preferences.get('mode');

		// show child views
		//
		this.showFace();
		if (this.preferences.get('show_mode')) {
			this.showButtons();
		}

		// update scale
		//
		this.onResize();
	},

	showFace: function() {
		this.showChildView('face', new FaceView({
			mode: this.mode
		}));
	},

	showButtons: function() {
		this.showChildView('buttons', new ButtonsView({
			mode: this.mode
		}));
	},

	onAttach: function() {
		this.original_width = this.$el.width();
		this.original_height = this.$el.height();
	},

	//
	// event handling methods
	//

	onLoad: function() {

		// set initial mode
		//
		this.setMode(this.preferences.get('mode'));
	},

	//
	// window event handling methods
	//

	onResize: function() {
		let width = this.$el.width();
		let height = this.$el.height();

		// update view
		//
		if (width != this.original_width || height != this.original_height) {
			let size = Math.min(width, height);
			let original_size = Math.min(this.original_width, this.original_height);
			let scale = size / original_size;
			this.$el.find('.face').css('transform', 'scale(' + scale.toPrecision(3) + ')');
		} else {
			this.$el.find('.face').css('transform', '');
		}
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {

		// clear static attributes
		//
		this.constructor.current = null;
	}
});