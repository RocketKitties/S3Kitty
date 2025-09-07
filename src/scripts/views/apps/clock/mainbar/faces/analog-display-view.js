/******************************************************************************\
|                                                                              |
|                            analog-display-view.js                            |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view used to display the time using an analog display.      |
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

export default BaseView.extend({

	//
	// attributes
	//

	className: 'analog lcd display',

	template: template(`
		<svg width="200" height="200">
			<filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
				<feOffset in="blur" dx="2.5" dy="2.5"/>
			</filter>

			<g id="hands">
				<line x1="100" y1="100" x2="100" y2="40" id="minutehand">
					<animatetransform attributeName="transform"
						attributeType="XML"
						type="rotate"
						dur="3600s"
						repeatCount="indefinite"/>
				</line>
				<line x1="100" y1="100" x2="100" y2="55" transform="rotate(80 100 100)" id="hourhand">
					<animatetransform attributeName="transform"
						attributeType="XML"
						type="rotate"
						dur="43200s"
						repeatCount="indefinite"/>
				</line>
				<line x1="100" y1="100" x2="100" y2="30" id="secondhand">
						<animatetransform attributeName="transform"
						attributeType="XML"
						type="rotate"
						dur="60s"
						repeatCount="indefinite"/>
				</line>
			</g>

			<circle id="center" cx="100" cy="100" r="3"></circle>
		</svg>
	`),

	//
	// rendering methods
	//

	onRender: function() {

		// show analog clock
		//
		this.showHands();
		this.showTickMarks();
	},

	showHands: function() {
		let hands = [];
		hands.push(this.el.querySelector('#secondhand > *'));
		hands.push(this.el.querySelector('#minutehand > *'));
		hands.push(this.el.querySelector('#hourhand > *'));

		let cx = 100;
		let cy = 100;

		function shifter(val) {
			return [val, cx, cy].join(' ');
		}

		let date = new Date();
		let hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
		let minuteAngle = 360 * date.getMinutes() / 60;
		let secAngle = 360 * date.getSeconds() / 60;

		hands[0].setAttribute('from', shifter(secAngle));
		hands[0].setAttribute('to', shifter(secAngle + 360));
		hands[1].setAttribute('from', shifter(minuteAngle));
		hands[1].setAttribute('to', shifter(minuteAngle + 360));
		hands[2].setAttribute('from', shifter(hoursAngle));
		hands[2].setAttribute('to', shifter(hoursAngle + 360));
	},

	showTickMarks: function() {
		for (let i = 1; i <= 12; i++) {
			let el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
			el.setAttribute('x1', '100');
			el.setAttribute('y1', '15');
			el.setAttribute('x2', '100');
			el.setAttribute('y2', '35');
			el.setAttribute('transform', 'rotate(' + (i * 360 / 12) + ' 100 100)');
			this.$el.find('svg')[0].appendChild(el);
		}
	}
});