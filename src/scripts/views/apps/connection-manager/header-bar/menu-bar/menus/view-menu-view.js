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
		'click .map-mode': 'onClickMapMode',

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
		'click .map-view-kind': 'onClickMapViewKind',
		'click .show-item-names': 'onClickOption',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',

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

	hidden: function() {
		return {
			'view-maps': !this.parent.app.collection.hasGeolocation()
		};
	},

	disabled: function() {
		let showingMap = this.parent.app.getMapView() != null;

		return {
			'pan-to': !showingMap,
			'pan-north': !showingMap,
			'pan-south': !showingMap,
			'pan-east': !showingMap,
			'pan-west': !showingMap,
			'zoom-to': !showingMap,
			'zoom-in': !showingMap,
			'zoom-out': !showingMap,
			'reset-view': !showingMap
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// view options
			//
			'view-kind icons': preferences.matches('view_kind', 'icons'),
			'view-kind names': preferences.matches('view_kind', 'names'),
			'view-kind lists': preferences.matches('view_kind', 'lists'),
			'view-kind trees': preferences.matches('view_kind', 'trees'),
			'view-kind cards': preferences.matches('view_kind', 'cards'),
			'view-kind tiles': preferences.matches('view_kind', 'tiles'),
			'view-kind maps': preferences.matches('view_kind', 'maps'),

			// map options
			//
			'map-mode map': preferences.matches('map_mode', 'map'),
			'map-mode satellite': preferences.matches('map_mode', 'satellite'),
			'map-mode hybrid': preferences.matches('map_mode', 'hybrid'),
			'map-mode streets': preferences.matches('map_mode', 'streets'),
			'map-mode transportation': preferences.matches('map_mode', 'transportation'),
			'map-mode sectional': preferences.matches('map_mode', 'sectional'),
			'map-mode ifrlo': preferences.matches('map_mode', 'ifrlo'),
			'map-mode ifrhi': preferences.matches('map_mode', 'ifrhi'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),

			// detail options
			//
			'view-details': preferences.has('view_details'),
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

			// map item options
			//
			'map-view-kind icons': preferences.matches('map_view_kind', 'icons'),
			'map-view-kind lists': preferences.matches('map_view_kind', 'lists'),
			'map-view-kind cards': preferences.matches('map_view_kind', 'cards'),
			'map-view-kind tiles': preferences.matches('map_view_kind', 'tiles'),
			'map-view-kind pages': preferences.matches('map_view_kind', 'pages'),
			'show-item-names': preferences.get('show_item_names'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels actions': preferences.includes('sidebar_panels', 'actions'),
			'sidebar-panels groups': preferences.includes('sidebar_panels', 'groups'),

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

	setMapMode: function(mapMode) {
		this.$el.find('li.map-mode').removeClass('selected');
		this.$el.find('li .show-' + mapMode).closest('li').addClass('selected');
	},

	//
	// map event handling methods
	//

	onClickMapMode: function(event) {
		let className = $(event.currentTarget).attr('class').split(' ')[0];
		let mapMode = className.replace('show-', '').replace(/-/g, '_');

		// update menu
		//
		this.setMapMode(mapMode);
		
		// update parent
		//
		this.parent.app.setOption('map_mode', mapMode);
	},

	onClickResetView: function() {
		this.parent.app.getChildView('content').getChildView('items').resetView();
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