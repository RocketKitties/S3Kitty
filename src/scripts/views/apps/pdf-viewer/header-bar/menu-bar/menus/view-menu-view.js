/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying view dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ViewMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/view-menu-view.js';

export default ViewMenuView.extend({

	//
	// attributes
	//

	events: {

		// navigation options
		//
		'click .view-first': 'onClickFirst',
		'click .view-prev': 'onClickPrev',
		'click .view-next': 'onClickNext',
		'click .view-last': 'onClickLast',

		// view options
		//
		'click .view-text': 'onClickViewText',
		'click .fit-width': 'onClickFitWidth',
		'click .fit-height': 'onClickFitHeight',
		'click .fit-size': 'onClickFitSize',

		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .zoom-to-actual': 'onClickZoomToActual',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .sidebar-tile-size': 'onClickSideBarTileSize',

		// mainbar options
		//
		'click .show-pdf-info': 'onClickOption',

		// window options
		//
		'click .shrink-window': 'onClickShrinkWindow',
		'click .grow-window': 'onClickGrowWindow',
		'click .expand-window': 'onClickExpandWindow',

		// desktop options
		//
		'click .prev-space': 'onClickPrevSpace',
		'click .next-space': 'onClickNextSpace',
		'click .minimize-all': 'onClickMinimizeAll',
		'click .unminimize-all': 'onClickUnminimizeAll',
		'click .view-full-screen': 'onClickViewFullScreen',

		// preferences options
		//
		'click .view-preferences': 'onClickViewPreferences'
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolblars zoom-mode': preferences.includes('toolblars', 'zoom_mode'),
			'toolblars zoom': preferences.includes('toolblars', 'zoom'),
			'toolblars page': preferences.includes('toolblars', 'page'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels favorites': preferences.includes('sidebar_panels', 'favorites'),
			'sidebar-panels pages': preferences.includes('sidebar_panels', 'pages'),
			'sidebar-panels files': preferences.includes('sidebar_panels', 'files'),

			// sidebar tile sizes
			//
			'sidebar-tile-size small': preferences.matches('sidebar_tile_size', 'small'),
			'sidebar-tile-size medium': preferences.matches('sidebar_tile_size', 'medium'),
			'sidebar-tile-size large': preferences.matches('sidebar_tile_size', 'large'),

			// info bar options
			//
			'show-pdf-info': preferences.includes('panes', 'info_bar')
		};
	},

	//
	// navigation mouse event handling methods
	//
	
	onClickFirst: function() {
		let pageNumber = this.parent.app.getPageNumber('first');
		this.parent.app.setPageNumber(pageNumber);
	},

	onClickPrev: function() {
		let pageNumber = this.parent.app.getPageNumber('prev');
		this.parent.app.setPageNumber(pageNumber);
	},

	onClickNext: function() {
		let pageNumber = this.parent.app.getPageNumber('next');
		this.parent.app.setPageNumber(pageNumber);
	},

	onClickLast: function() {
		let pageNumber = this.parent.app.getPageNumber('last');
		this.parent.app.setPageNumber(pageNumber);
	},

	//
	// view mouse event handling methods
	//

	onClickViewText: function() {
		this.parent.app.showText();
	},

	//
	// fit mouse event handling methods
	//

	onClickFitWidth: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_width');
	},

	onClickFitSize: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_size');
	},

	onClickFitHeight: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_height');
	},

	//
	// zoom mouse event handling methods
	//

	onClickZoomIn: function() {
		this.parent.app.getChildView('header zoom').zoomIn();
	},

	onClickZoomOut: function() {
		this.parent.app.getChildView('header zoom').zoomOut();
	},

	onClickZoomToActual: function() {
		this.parent.app.getChildView('header zoom').zoomTo(100);
	}
});