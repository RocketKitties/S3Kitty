/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying file dropdown menus.                    |
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
		'click .view-kind': 'onClickViewKind',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// details options
		//
		'click .view-details': 'onClickViewDetails',
		'click .detail-kind': 'onClickDetailKind',
		'click .date-format': 'onClickDateFormat',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .sidebar-tile-size': 'onClickSideBarTileSize',

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

	disabled: function() {
		return {
			'view-preferences': !application.session.user
		};	
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// viewing options
			//
			'view-kind icons': preferences.matches('view_kind', 'icons'),
			'view-kind lists': preferences.matches('view_kind', 'lists'),
			'view-kind cards': preferences.matches('view_kind', 'cards'),
			'view-kind tiles': preferences.matches('view_kind', 'tiles'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),

			// detail options
			//
			'view-details': preferences.has('view_details'),
			'detail-kind size': preferences.matches('detail_kind', 'size'),
			'detail-kind create_date': preferences.matches('detail_kind', 'create_date'),
			'detail-kind modify_date': preferences.matches('detail_kind', 'modify_date'),
			'detail-kind access_date': preferences.matches('detail_kind', 'access_date'),
			'detail-kind date_only': preferences.matches('detail_kind', 'date_only'),
			'detail-kind day_date': preferences.matches('detail_kind', 'day_date'),
			'detail-kind time_only': preferences.matches('detail_kind', 'time_only'),
			'detail-kind date_time': preferences.matches('detail_kind', 'date_time'),
			'detail-kind day_date_time': preferences.matches('detail_kind', 'day_date_time'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels params': preferences.includes('sidebar_panels', 'params')
		};	
	}
});