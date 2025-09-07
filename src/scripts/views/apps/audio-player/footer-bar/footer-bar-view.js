/******************************************************************************\
|                                                                              |
|                              footer-bar-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used to display an app's footer bar.              |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import FooterBarView from '../../../../views/apps/common/footer-bar/footer-bar-view.js';
import TrackBarView from '../../../../views/apps/audio-player/footer-bar/track-bar/track-bar-view.js';
import StatusBarView from '../../../../views/apps/audio-player/footer-bar/status-bar/status-bar-view.js';

export default FooterBarView.extend({

	//
	// attributes
	//

	toolbars: ['window', 'track', 'status'],

	//
	// getting methods
	//

	getTrackBarView: function() {
		return new TrackBarView({
			trackNumber: this.collection? this.collection.indexOf(this.model) + 1 : undefined,
			numTracks: 	this.collection? this.collection.length : undefined
		});
	},

	getStatusBarView: function() {
		return new StatusBarView({
			model: this.model,
			status: 'Not Playing'
		});
	},

	//
	// rendering methods
	//

	showToolbar: function(kind) {
		switch (kind) {
			case 'window':
				this.showWindowBar();
				break;
			case 'track':
				this.showTrackBar();
				break;
			case 'status':
				this.showStatusBar();
				break;
		}
	},

	showWindowBar: function() {
		this.showChildView('window', this.getWindowBarView());
	},

	showTrackBar: function() {
		this.showChildView('track', this.getTrackBarView());
		this.getChildView('track').$el.addClass('windowed-app-only');
	},

	showStatusBar: function() {
		this.showChildView('status', this.getStatusBarView());
	}
});