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
	// querying mehods
	//

	enabled: function() {
		return this.parent.app.model != undefined;
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// item options
			//
			'view-kind icons': preferences.matches('view_kind', 'icons'),
			'view-kind names': preferences.matches('view_kind', 'names'),
			'view-kind lists': preferences.matches('view_kind', 'lists'),
			'view-kind trees': preferences.matches('view_kind', 'trees'),
			'view-kind cards': preferences.matches('view_kind', 'cards'),
			'view-kind tiles': preferences.matches('view_kind', 'tiles'),

			// detail options
			//
			'view-details': preferences.has('view_details'),
			'detail-kind priority': preferences.matches('detail_kind', 'priority'),
			'detail-kind create_date': preferences.matches('detail_kind', 'create_date'),
			'detail-kind update_date': preferences.matches('detail_kind', 'update_date'),
			'detail-kind due_date': preferences.matches('detail_kind', 'due_date'),

			// date options
			//
			'date-format date_only': preferences.matches('date_format', 'date_only'),
			'date-format day_date': preferences.matches('date_format', 'day_date'),
			'date-format time_only': preferences.matches('date_format', 'time_only'),
			'date-format date_time': preferences.matches('date_format', 'date_time'),
			'date-format day_date_time': preferences.matches('date_format', 'day_date_time'),

			// viewing options
			//
			'show_comments': preferences.get('show_comments'),
			'show_options': preferences.get('show_options'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars tasks': preferences.includes('toolbars', 'tasks'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels info': preferences.includes('sidebar_panels', 'info'),
			'sidebar-panels projects': preferences.includes('sidebar_panels', 'projects'),

			// sidebar item options
			//
			'sidebar-view-kind icons': preferences.matches('sidebar_view_kind', 'icons'),
			'sidebar-view-kind lists': preferences.matches('sidebar_view_kind', 'lists'),
			'sidebar-view-kind cards': preferences.matches('sidebar_view_kind', 'cards'),
			'sidebar-view-kind tiles': preferences.matches('sidebar_view_kind', 'tiles')
		};	
	},

	//
	// rendering methods
	//

	/*
	templateContext: function() {
		return {
			language: this.parent.app.preferences.get('language'),
			languages: application.session.get('config').languages
		};
	},
	*/

	onRender: function() {

		// call superclass method
		//
		ViewMenuView.prototype.onRender.call(this);

		// listen for changes in full screen status
		//
		if (this.parent.app.isDesktop()) {
			$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', () => {
				this.setItemSelected('view-full-screen', application.isFullScreen());						
			});
		}
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {
		$(document).off('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange');
	}
});