/******************************************************************************\
|                                                                              |
|                            weather-toolbar-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the view for a layers toolbar.                           |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ToolbarView from '../../../../../../views/apps/common/toolbars/toolbar-view.js';
import LayerButtonView from '../../../../../../views/apps/map-viewer/mainbar/toolbar/layers/buttons/layer-button-view.js';
import WeatherLayerButtonsView from '../../../../../../views/apps/map-viewer/mainbar/toolbar/weather/weather-layer-buttons-view.js';

export default ToolbarView.extend({

	//
	// attributes
	//

	template: template(`
		<div data-toggle="tooltip" title="Weather">
			<div class="button"></div>
		</div>
		<div class="buttons"></div>
	`),

	regions: {
		button: {
			el: '.button',
			replaceElement: true			
		},
		buttons: {
			el: '.buttons',
			replaceElement: true
		}
	},

	events: {
		'mouseenter': 'onMouseEnter',
		'mouseleave': 'onMouseLeave'
	},

	selected: function() {
		let preferences = this.app.preferences;

		return {
			'show-weather': preferences.includes('map_layers', 'weather'),
			'show-satellite': preferences.includes('weather_layers', 'satellite'),
			'show-radar': preferences.includes('weather_layers', 'radar'),
			'show-temperature': preferences.includes('weather_layers', 'temperature'),
			'show-metar': preferences.includes('weather_layers', 'metar'),
			'show-wind': preferences.includes('weather_layers', 'wind')
		};
	},

	//
	// rendering methods
	//

	onRender: function() {

		// call superclass method
		//
		ToolbarView.prototype.onRender.call(this);

		// show child views
		//
		this.showChildView('button', new LayerButtonView({
			name: 'weather',
			icon: '<i class="fa fa-cloud-sun-rain"></i>'
		}));

		this.showChildView('buttons', new WeatherLayerButtonsView({
			model: this.model,
			preferences: this.options.preferences
		}));

		// initially hide buttons
		//
		this.getChildView('buttons').$el.hide();
	},

	//
	// event handling methods
	//

	onActivate: function() {
		this.getChildView('buttons').onActivate();
	},

	//
	// mouse event handling methods
	//

	onMouseEnter: function() {
		this.getChildView('buttons').$el.show();
	},

	onMouseLeave: function() {
		this.getChildView('buttons').$el.fadeOut();
	}
});