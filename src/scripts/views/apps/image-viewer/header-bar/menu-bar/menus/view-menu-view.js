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

		// view options
		//
		'click .fit-size': 'onClickFitSize',
		'click .fit-width': 'onClickFitWidth',
		'click .fit-height': 'onClickFitHeight',

		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .zoom-to-actual': 'onClickZoomToActual',

		'click .rotate-left': 'onClickRotateLeft',
		'click .rotate-right': 'onClickRotateRight',
		'click .rotate-reset': 'onClickRotateReset',

		'click .show-smoothing': 'onClickShowSmoothing',
		'click .view-slide-show': 'onClickSlideShow',

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
		'click .show-image-info': 'onClickOption',

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

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// viewing options
			//
			'fit-size': this.parent.app.zoom == 'fit_size',
			'fit-width': this.parent.app.zoom == 'fit_width',
			'fit-height': this.parent.app.zoom == 'fit_height',
			'show-smoothing': preferences.get('show_smoothing'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),
			'toolbars mouse-mode': preferences.includes('toolbars', 'mouse_mode'),
			'toolbars zoom-mode': preferences.includes('toolbars', 'zoom_mode'),
			'toolbars zoom': preferences.includes('toolbars', 'zoom'),
			'toolbars rotate': preferences.includes('toolbars', 'rotate'),
			'toolbars image': preferences.includes('toolbars', 'image'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels favorites': preferences.includes('sidebar_panels', 'favorites'),
			'sidebar-panels images': preferences.includes('sidebar_panels', 'images'),
			'sidebar-panels files': preferences.includes('sidebar_panels', 'files'),

			// sidebar item options
			//
			'sidebar-view-kind icons': preferences.matches('sidebar_view_kind', 'icons'),
			'sidebar-view-kind lists': preferences.matches('sidebar_view_kind', 'lists'),
			'sidebar-view-kind cards': preferences.matches('sidebar_view_kind', 'cards'),
			'sidebar-view-kind tiles': preferences.matches('sidebar_view_kind', 'tiles'),

			// sidebar tile sizes
			//
			'sidebar-tile-size small': preferences.matches('sidebar_tile_size', 'small'),
			'sidebar-tile-size medium': preferences.matches('sidebar_tile_size', 'medium'),
			'sidebar-tile-size large': preferences.matches('sidebar_tile_size', 'large'),

			// mainbar options
			//
			'show-image-info': preferences.includes('panes', 'image_info')
		};
	},

	disabled: function() {
		if (!this.parent.app.model) {
			return {
				'fit': true,
				'zoom': true,
				'rotate': true,
				'show-smoothing': true,
				'view-slide-show': true
			};
		} else {
			return false;
		}
	},

	//
	// setting methods
	//

	setSmoothing: function(smoothing) {
		this.parent.app.options.smoothing = smoothing;
		this.setItemSelected('show-smoothing', smoothing);
	},
	
	//
	// fit mouse event handling methods
	//

	onClickFitSize: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_size');
	},

	onClickFitWidth: function() {
		this.parent.app.getChildView('header zoom').zoomTo('fit_width');
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
	},

	//
	// rotate mouse event handling methods
	//

	onClickRotateLeft: function() {
		this.parent.app.rotateTo(this.parent.app.getRotation() - 90);
	},

	onClickRotateRight: function() {
		this.parent.app.rotateTo(this.parent.app.getRotation() + 90);
	},

	onClickRotateReset: function() {
		this.parent.app.rotateTo(0);
	},

	//
	// preferences mouse event handling methods
	//
	
	onClickShowSmoothing: function() {
		this.toggleMenuItem('show-smoothing');
		this.parent.app.setOption('show_smoothing', this.isItemSelected('show-smoothing'));
	},

	onClickSlideShow: function() {
		this.toggleMenuItem('view-slide-show');
		this.parent.app.toggleSlideShow();
	},

	onClickViewFullScreen: function() {
		this.parent.app.toggleFullScreen();
	}
});