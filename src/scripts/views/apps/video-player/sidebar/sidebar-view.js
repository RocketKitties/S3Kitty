/******************************************************************************\
|                                                                              |
|                               sidebar-view.js                                |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used for showing an app's sidebar.                |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SideBarView from '../../../../views/apps/common/sidebar/sidebar-view.js';
import FavoritesPanelView from '../../../../views/apps/video-player/sidebar/panels/favorites-panel-view.js';
import VideosPanelView from '../../../../views/apps/video-player/sidebar/panels/videos-panel-view.js';
import FilesPanelView from '../../../../views/apps/video-player/sidebar/panels/files-panel-view.js';

export default SideBarView.extend({

	//
	// attributes
	//

	panels: ['favorites', 'videos', 'files'],

	//
	// attribute methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();

		return {
			'favorites': isSignedIn,
			'videos': true,
			'files': isSignedIn
		};
	},

	//
	// querying methods
	//

	hasSelected: function() {
		if (this.hasChildView('videos')) {
			return this.getChildView('videos').hasSelected();
		}
	},

	//
	// getting methods
	//

	getSelected: function() {
		return this.getChildView('videos').getSelected();
	},

	getSelectedModels: function() {
		return this.getChildView('videos').getSelectedModels();
	},
	
	//
	// setting methods
	//

	setModel: function(model) {

		// update attributes
		//
		this.model = model;
	},

	setCollection: function(collection) {

		// update attributes
		//
		this.collection = collection;

		// update view
		//
		if (this.hasChildView('videos')) {
			this.showVideosPanel();
		}
	},

	setSelected: function(model, options) {
		this.getChildView('videos').setSelectedModel(model, options);

		// scroll into view
		//
		this.scrollToView(this.getSelected()[0]);
	},

	//
	// panel rendering methods
	//

	showPanel: function(panel) {

		// show specified panel
		//
		switch (panel) {
			case 'favorites':
				this.showFavoritesPanel();
				break;
			case 'videos':
				this.showVideosPanel();
				break;
			case 'files':
				this.showFilesPanel();
				break;
		}
	},

	showFavoritesPanel: function() {
		this.showChildView('favorites', new FavoritesPanelView({

			// options
			//
			view_kind: this.options.view_kind,

			// callback options
			//
			onchange: this.options.onchange,
			onselect: this.options.onselect,
			ondeselect: this.options.ondeselect
		}));
	},

	showVideosPanel: function() {
		this.showChildView('videos', new VideosPanelView({
			model: this.model,
			collection: this.collection,

			// options
			//
			view_kind: this.options.view_kind,
			tile_size: this.options.tile_size
		}));		
	},

	showFilesPanel: function() {
		this.showChildView('files', new FilesPanelView({
			model: application.getDirectory(),

			// options
			//
			view_kind: this.options.view_kind,

			// callbacks
			//
			onchange: () => this.onChange(),
			onselect: (item) => this.onOpen(item)
		}));
	},

	//
	// event handling methods
	//

	onChange: function() {

		// update panels
		//
		if (this.hasChildView('videos')) {
			this.getChildView('videos').update();
		}
		if (this.hasChildView('files')) {
			this.getChildView('files').update();
		}

		// perform callback
		//
		if (this.options.onchange) {
			this.options.onchange();
		}
	}
});