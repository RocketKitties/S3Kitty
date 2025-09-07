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
		'click .map-mode': 'onClickMapMode',
		'click .aero-mode': 'onClickAeroMode',

		// navigation options
		//
		'click .zoom-to-location': 'onClickZoomToLocation',
		'click .zoom-to': 'onClickZoomTo',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// layer options
		//
		'click .map-layers': 'onClickMapLayers',
		'click .all-layers': 'onClickAllLayers',
		'click .no-layers': 'onClickNoLayers',
		
		// map options
		//
		'click .map-options': 'onClickMapOptions',
		'click .map-view-kind': 'onClickMapViewKind',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .sidebar-tile-size': 'onClickSideBarTileSize',
		'click .show-image-info': 'onClickOption',

		// view options
		//
		'click .shrink-window': 'onClickShrinkWindow',
		'click .grow-window': 'onClickGrowWindow',
		'click .expand-window': 'onClickExpandWindow',
		'click .prev-space': 'onClickPrevSpace',
		'click .next-space': 'onClickNextSpace',
		'click .view-full-screen': 'onClickViewFullScreen',

		// preferences options
		//
		'click .view-preferences': 'onClickViewPreferences'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasPhotos = this.parent.app.hasItems('photos');
		let hasVideos = this.parent.app.hasItems('videos');
		let hasOverlays = this.parent.app.hasItems('overlays');
		let hasPeople = this.parent.app.hasItems('people');
		let hasPlaces = this.parent.app.hasItems('places');
		let hasFavorites = this.parent.app.hasItems('favorites');
		let hasAnnotations = this.parent.app.hasItems('annotations');
		let hasSelectedPhotos = this.parent.app.hasSelectedLayerItems('photos');
		let hasSelectedVideos = this.parent.app.hasSelectedLayerItems('videos');
		let hasSelectedPeople = this.parent.app.hasSelectedLayerItems('people');
		let hasSelectedPlaces = this.parent.app.hasSelectedLayerItems('places');		
		let hasSelectedFavorites = this.parent.app.hasSelectedLayerItems('favorites');
		let hasSelectedItems = hasSelectedFavorites || hasSelectedPlaces || hasSelectedPhotos || hasSelectedVideos || hasSelectedPeople;

		return {
			'zoom-to': hasSelectedItems,
			'show-crosshairs-layer': true,
			'show-favorites-layer': hasFavorites,
			'show-photos-layer': hasPhotos,
			'show-videos-layer': hasVideos,
			'show-overlays-layer': hasOverlays,
			'show-people-layer': hasPeople,
			'show-places-layer': hasPlaces,
			'show-annotations-layer': hasAnnotations,
			'show-weather-layer': true,
			'show_small_icons': true,
			'show_medium_icons': true,
			'show_large_icons': true,
			'show_icon_names': true,
			'show_smoothing': true
		};	
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// map options
			//
			'map-mode map': preferences.matches('map_mode', 'map'),
			'map-mode satellite': preferences.matches('map_mode', 'satellite'),
			'map-mode hybrid': preferences.matches('map_mode', 'hybrid'),
			'map-mode streets': preferences.matches('map_mode', 'streets'),
			'map-mode transportation': preferences.matches('map_mode', 'transportation'),
			'map-mode elevation': preferences.matches('map_mode', 'elevation'),
			'map-mode aeronautical': preferences.matches('map_mode', 'aeronautical'),
			'aero-mode vfr': preferences.matches('aero_mode', 'vfr'),
			'aero-mode ifrlo': preferences.matches('aero_mode', 'ifrlo'),
			'aero-mode ifrhi': preferences.matches('aero_mode', 'ifrhi'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),
			'toolbars mouse-mode': preferences.includes('toolbars', 'mouse_mode'),
			'toolbars nav-mode': preferences.includes('toolbars', 'nav_mode'),
			'toolbars zoom': preferences.includes('toolbars', 'zoom'),
			'toolbars annotations': preferences.includes('toolbars', 'annotations'),
			'toolbars map': preferences.includes('toolbars', 'map'),

			// layer options
			//
			'map-layers crosshairs': preferences.includes('map_layers', 'crosshairs'),
			'map-layers photos': preferences.includes('map_layers', 'photos'),
			'map-layers videos': preferences.includes('map_layers', 'videos'),
			'map-layers overlays': preferences.includes('map_layers', 'overlays'),
			'map-layers people': preferences.includes('map_layers', 'people'),
			'map-layers places': preferences.includes('map_layers', 'places'),
			'map-layers favorites': preferences.includes('map_layers', 'favorites'),
			'map-layers annotations': preferences.includes('map_layers', 'annotations'),
			'map-layers weather': preferences.includes('map_layers', 'weather'),

			// map options
			//
			'map-options grid': preferences.includes('map_options', 'grid'),
			'map-options smoothing': preferences.includes('map_options', 'smoothing'),
			'map-options item-names': preferences.includes('map_options', 'item_names'),
			'map-options geo-orientations': preferences.includes('map_options', 'geo_orientations'),

			// map item options
			//
			'map-view-kind icons': preferences.matches('map_view_kind', 'icons'),
			'map-view-kind lists': preferences.matches('map_view_kind', 'lists'),
			'map-view-kind cards': preferences.matches('map_view_kind', 'cards'),
			'map-view-kind tiles': preferences.matches('map_view_kind', 'tiles'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels maps': preferences.includes('sidebar_panels', 'maps'),
			'sidebar-panels photos': preferences.includes('sidebar_panels', 'photos'),
			'sidebar-panels videos': preferences.includes('sidebar_panels', 'videos'),
			'sidebar-panels overlays': preferences.includes('sidebar_panels', 'overlays'),
			'sidebar-panels people': preferences.includes('sidebar_panels', 'people'),
			'sidebar-panels places': preferences.includes('sidebar_panels', 'places'),
			'sidebar-panels favorites': preferences.includes('sidebar_panels', 'favorites'),
			'sidebar-panels shared': preferences.includes('sidebar_panels', 'shared'),

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
	// map mouse event handling methods
	//

	onClickMapMode: function(event) {
		let mapMode = this.getItemName(event.target);

		// update menu
		//
		this.setGroupItemSelected('map_mode', mapMode);

		// update app
		//
		this.parent.app.setOption('map_mode', mapMode);
	},

	onClickAeroMode: function(event) {
		let aeroMode = this.getItemName(event.target);

		// update menu
		//
		this.setGroupItemSelected('aero_mode', aeroMode);

		// update app
		//
		this.parent.app.setOption('aero_mode', aeroMode);
	},

	onClickResetView: function() {
		this.parent.app.resetView();
	},
	
	//
	// pan mouse event handling methods
	//

	onClickPanNorth: function() {
		this.parent.app.panToDirection('north');
	},

	onClickPanSouth: function() {
		this.parent.app.panToDirection('south');
	},

	onClickPanEast: function() {
		this.parent.app.panToDirection('east');
	},

	onClickPanWest: function() {
		this.parent.app.panToDirection('west');
	},

	//
	// zoom mouse event handling methods
	//

	onClickZoomToLocation: function() {
		this.parent.app.zoomToLocation();
	},

	onClickZoomTo: function() {
		this.parent.app.zoomToItem(this.parent.app.getSelectedItem());
	},

	onClickZoomIn: function() {
		this.parent.parent.getChildView('zoom').zoomIn();
	},

	onClickZoomOut: function() {
		this.parent.parent.getChildView('zoom').zoomOut();
	},

	//
	// map option mouse event handling methods
	//

	onClickMapOptions: function(event) {
		let mapOption = this.getItemName(event.target);

		// update menu
		//
		this.toggleMenuItem('map_options ' + mapOption);

		// update map
		//
		this.parent.app.setOption('map_options', this.getSelectedGroupItems('map_options'));
	},

	//
	// layer mouse event handling methods
	//

	onClickMapLayers: function(event) {
		let mapLayer = this.getItemName(event.target);

		// update menu
		//
		this.toggleMenuItem('map_layers ' + mapLayer);

		// update map
		//
		this.parent.app.setLayerVisibility(mapLayer, this.isItemSelected('map_layers ' + mapLayer));
	},

	onClickAllLayers: function() {

		// update menu
		//
		this.setItemSelected('map-layers', true);

		// update map
		//
		this.parent.app.setAllLayersVisibility(true);
	},

	onClickNoLayers: function() {

		// update menu
		//
		this.setItemSelected('map-layers', false);

		// update map
		//
		this.parent.app.setAllLayersVisibility(false);
	}
});