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

		// map options
		//
		'click .map-mode': 'onClickMapMode',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',
		'click .map-item-kind': 'onClickMapItemKind',
		'click .show-item-names': 'onClickOption',
		'click .show-geo-orientations': 'onClickOption',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',

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

			// item options
			//
			'view-kind icons': preferences.matches('view_kind', 'icons'),
			'view-kind names': preferences.matches('view_kind', 'names'),
			'view-kind lists': preferences.matches('view_kind', 'lists'),
			'view-kind trees': preferences.matches('view_kind', 'trees'),
			'view-kind cards': preferences.matches('view_kind', 'cards'),
			'view-kind tiles': preferences.matches('view_kind', 'tiles'),
			'view-kind maps': preferences.matches('view_kind', 'maps'),

			// mapping options
			//
			'map-mode map': preferences.matches('map_mode', 'map'),
			'map-mode satellite': preferences.matches('map_mode', 'satellite'),
			'map-mode hybrid': preferences.matches('map_mode', 'hybrid'),

			// detail options
			//
			'view-details': preferences.has('detail_kind'),
			'detail-kind location': preferences.matches('detail_kind', 'location'),
			'detail-kind occupation': preferences.matches('detail_kind', 'occupation'),
			'detail-kind age': preferences.matches('detail_kind', 'age'),
			'detail-kind gender': preferences.matches('detail_kind', 'gender'),
			'detail-kind birth-date': preferences.matches('detail_kind', 'birth_date'),
			'detail-kind join-date': preferences.matches('detail_kind', 'join_date'),
			'detail-kind connect-date': preferences.matches('detail_kind', 'connect_date'),

			// date options
			//
			'date-format date-only': preferences.matches('date_format', 'date_only'),
			'date-format day-date': preferences.matches('date_format', 'day_date'),
			'date-format time-only': preferences.matches('date_format', 'time_only'),
			'date-format date-time': preferences.matches('date_format', 'date_time'),
			'date-format day-date-time': preferences.matches('date_format', 'day_date_time'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels actions': preferences.includes('sidebar_panels', 'actions')
		};	
	},

	//
	// map event handling methods
	//

	onClickMapMode: function(event) {
		let mapMode = this.getItemName(event.target)

		// update menu
		//
		this.setGroupItemSelected('map_mode', mapMode);

		// update app
		//
		this.parent.app.setOption('map_mode', mapMode);
	},

	onClickResetView: function() {
		this.parent.app.getActiveView().getChildView('items').resetView();
	},

	//
	// pan event handling methods
	//

	onClickPanNorth: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('north', {
				duration: 1000
			});
		}
	},

	onClickPanSouth: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('south', {
				duration: 1000
			});
		}
	},

	onClickPanEast: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('east', {
				duration: 1000
			});
		}
	},

	onClickPanWest: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('west', {
				duration: 1000
			});
		}
	},

	//
	// zoom event handling methods
	//

	onClickZoomIn: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.zoomIn({
				duration: 1000
			});
		}
	},

	onClickZoomOut: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.zoomOut({
				duration: 1000
			});
		}
	}
});