/******************************************************************************\
|                                                                              |
|                            digital-display-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view used to display the time using a digital display.      |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import BaseView from '../../../../../views/base-view.js';
import Timeable from '../../../../../views/behaviors/effects/timeable.js';
import TimeUtils from '../../../../../utilities/time/time-utils.js';

export default BaseView.extend(_.extend({}, Timeable, {

	//
	// attributes
	//

	className: 'digital lcd display',

	template: template(`
		<div class="digits">
			<div class="am-pm">AM</div>
			<div class="middle">
				<div class="hours">00</div>
				<div class="colons">:</div>
				<div class="minutes">00</div>
			</div>
			<div class="seconds">00</div>
		</div>
	`),

	//
	// setting methods
	//

	setTime: function(dow, time) {
		let hours = time.hours;
		let minutes = time.minutes;
		let seconds = Math.floor(time.seconds);
		let am = hours < 12;

		function pad(string) {
			return string.length == 1? '0' + string : string;
		}

		if (hours > 12) {
			hours -= 12;
		}
		if (hours == 0) {
			hours = 12;
		}

		this.$el.find('.am-pm').html(am? 'AM' : 'PM');
		this.$el.find('.hours').html(hours.toString());
		this.$el.find('.minutes').html(pad(minutes.toString()));
		this.$el.find('.seconds').html(pad(seconds.toString()));	
	},

	//
	// rendering methods
	//

	onRender: function() {
		this.update();
		this.animate();
	},

	animate: function() {
		if (!this.interval) {
			this.setInterval(() => {

				// update view
				//
				this.update();
			}, 1000);
		}
	},

	//
	// updating methods
	//

	update: function() {
		let dow = TimeUtils.daysOfWeek[new Date().getDay()];
		let time = TimeUtils.getTime();
		this.setTime(dow, time);
	}
}));