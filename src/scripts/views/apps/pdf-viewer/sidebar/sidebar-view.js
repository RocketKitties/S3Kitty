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

import Page from '../../../../models/pages/page.js';
import BaseCollection from '../../../../collections/base-collection.js';
import SideBarView from '../../../../views/apps/common/sidebar/sidebar-view.js';
import FavoritesPanelView from '../../../../views/apps/pdf-viewer/sidebar/panels/favorites-panel-view.js';
import PagesPanelView from '../../../../views/apps/pdf-viewer/sidebar/panels/pages-panel-view.js';
import FilesPanelView from '../../../../views/apps/image-viewer/sidebar/panels/files-panel-view.js';

export default SideBarView.extend({

	//
	// attributes
	//

	panels: ['favorites', 'pages', 'files'],

	//
	// constructor
	//

	initialize: function() {
		this.collection = new BaseCollection();
	},

	//
	// querying methods
	//

	hasSelected: function() {
		if (this.hasChildView('pages')) {
			return this.getChildView('pages').hasSelected();
		}
	},

	//
	// getting methods
	//

	getSelected: function() {
		return this.getChildView('pages').getSelected();
	},

	getSelectedModels: function() {
		return this.getChildView('pages').getSelectedModels();
	},

	//
	// setting methods
	//

	setSelected: function(model, options) {
		this.getChildView('pages').setSelectedModel(model, options);	
	
		// scroll into view
		//
		this.scrollToView(this.getSelected()[0]);
	},

	setPageNumber: function(pageNumber) {
		this.setSelected(this.collection.at(pageNumber - 1));	
	},

	reset: function() {
		this.collection.reset();
		this.loaded = false;
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
			case 'pages':
				this.showPagesPanel();
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

	showPagesPanel: function() {
		this.showChildView('pages', new PagesPanelView({
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

	onLoad: function() {
		this.app = this.getParentView('app');

		if (!this.app) {
			return;
		}
	
		let pdf = this.app.getPdf();
		let numPages = this.app.numPages();

		// create pages
		//
		this.collection.reset();
		for (let i = 0; i < numPages; i++) {
			this.collection.add(new Page({
				pdf: pdf,
				page_number: i + 1
			}));
		}

		// render pages
		//
		this.showPagesPanel();
		this.loaded = true;
	},

	//
	// selection event handling methods
	//

	onSelect: function(item) {
		this.app.setPageNumber(item.model.get('page_number'));
	}
});