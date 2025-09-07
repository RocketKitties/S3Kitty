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
		'click .detail-kind': 'onClickDetailKind',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .show-analyzer': 'onClickOption',

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

			// detail options
			//
			'detail-kind name_only': !preferences.has('detail_kind'),
			'detail-kind album': preferences.matches('detail_kind', 'album'),
			'detail-kind artist': preferences.matches('detail_kind', 'artist'),
			'detail-kind band': preferences.matches('detail_kind', 'band'),
			'detail-kind composer': preferences.matches('detail_kind', 'composer'),
			'detail-kind genre': preferences.matches('detail_kind', 'genre'),
			'detail-kind length': preferences.matches('detail_kind', 'length'),
			'detail-kind publisher': preferences.matches('detail_kind', 'publisher'),
			'detail-kind track-number': preferences.matches('detail_kind', 'track_number'),
			'detail-kind year': preferences.matches('detail_kind', 'year'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars play': preferences.includes('toolbars', 'play'),
			'toolbars volume': preferences.includes('toolbars', 'volume'),
			'toolbars track': preferences.includes('toolbars', 'track'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels favorites': preferences.includes('sidebar_panels', 'favorites'),
			'sidebar-panels track_info': preferences.includes('sidebar_panels', 'track_info'),
			'sidebar-panels files': preferences.includes('sidebar_panels', 'files'),
			'show-analyzer': preferences.includes('panes', 'analyzer'),

			// sidebar item options
			//
			'sidebar-view-kind icons': preferences.matches('sidebar_view_kind', 'icons'),
			'sidebar-view-kind lists': preferences.matches('sidebar_view_kind', 'lists'),
			'sidebar-view-kind trees': preferences.matches('sidebar_view_kind', 'trees'),
			'sidebar-view-kind cards': preferences.matches('sidebar_view_kind', 'cards'),
			'sidebar-view-kind tiles': preferences.matches('sidebar_view_kind', 'tiles')
		};	
	},

	//
	// setting methods
	//

	setDetailKind: function(detailKind) {

		// update menu
		//
		this.$el.find('li[type=detail-kind].selected').removeClass('selected');
		this.$el.find('.view-' + detailKind).closest('li').addClass('selected');
	},

	//
	// event handling methods
	//
	
	onChange: function() {
		if (this.parent.app.model) {
			this.setDisabled(false);
		}
	},

	//
	// mouse event handling methods
	//

	onClickVolumeUp: function() {
		this.parent.app.volumeUp();
	},

	onClickVolumeDown: function() {
		this.parent.app.volumeDown();
	},

	onClickTrackInfo: function() {
		this.toggleMenuItem('show-track-info');
		this.parent.app.setOption('show_track_info', this.isItemSelected('show-track-info'));
	}
});