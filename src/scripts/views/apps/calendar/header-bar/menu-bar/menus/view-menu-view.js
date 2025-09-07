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

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .show-analyser': 'onClickOption',

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
			'view-kind day': preferences.matches('view_kind', 'day'),
			'view-kind week': preferences.matches('view_kind', 'week'),
			'view-kind month': preferences.matches('view_kind', 'month'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels events': preferences.includes('sidebar_panels', 'events')
		};	
	}
});