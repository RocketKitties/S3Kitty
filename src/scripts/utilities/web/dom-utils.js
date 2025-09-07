/******************************************************************************\
|                                                                              |
|                                 dom-utils.js                                 |
|                                                                              |
|******************************************************************************|
|                                                                              |
|       This contains minor general purpose DOM manipulation utilities.        |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.md', which is part of this source code distribution.          |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

import CssUtils from '../../utilities/web/css-utils.js';

export default {

	//
	// setting methods
	//

	setBackgroundStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.background) {
			$(element).css('background', attributes.background);
		}
		if (attributes.background_color) {
			$(element).css('background-color', attributes.background_color);
		}
		if (attributes.background_image) {
			$(element).css('background-image', 'url("' + attributes.background_image + '")');
		}
		if (attributes.background_size) {
			$(element).css('background-size', attributes.background_size);
		}
		if (attributes.background_position) {
			$(element).css('background-position', attributes.background_position);
		}
		if (attributes.background_repeat) {
			$(element).css('background-repeat', attributes.background_repeat.replace(/_/g, '-'));
		}
		if (attributes.background_attachment) {
			$(element).css('background-attachment', attributes.background_attachment);
		}
	},

	setBlockStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		function toDimension(dimension) {
			if (typeof dimension != 'string') {
				return dimension + 'px';
			} else {
				return dimension;
			}
		}

		// set dimension styles
		//
		if (attributes.width) {
			$(element).css('width', toDimension(attributes.width));
		}
		if (attributes.height) {
			$(element).css('height', toDimension(attributes.height));
		}
		if (attributes.transform) {
			$(element).css('transform', attributes.transform);
		}

		// set margin styles
		//
		if (attributes.margin != undefined) {
			$(element).css('margin', toDimension(attributes.margin));
		}
		if (attributes.margin_top != undefined) {
			$(element).css('margin-top', toDimension(attributes.margin_top));
		}
		if (attributes.margin_bottom != undefined) {
			$(element).css('margin-bottom', toDimension(attributes.margin_bottom));
		}
		if (attributes.margin_bottom != undefined) {
			$(element).css('margin-left', toDimension(attributes.margin_left));
		}
		if (attributes.margin_right != undefined) {
			$(element).css('margin-left', toDimension(attributes.margin_right));
		}

		// set padding styles
		//
		if (attributes.padding != undefined) {
			$(element).css('padding', toDimension(attributes.padding));
		}
		if (attributes.margin_top != undefined) {
			$(element).css('padding-top', toDimension(attributes.padding_top));
		}
		if (attributes.padding_bottom != undefined) {
			$(element).css('padding-bottom', toDimension(attributes.padding_bottom));
		}
		if (attributes.padding_left != undefined) {
			$(element).css('padding-left', toDimension(attributes.padding_left));
		}
		if (attributes.padding_right != undefined) {
			$(element).css('padding-right', toDimension(attributes.padding_right));
		}

		// set visibility styles
		//
		if (attributes.platform == 'mobile') {
			$(element).addClass('mobile-only');
		}
		if (attributes.platform == 'desktop') {
			$(element).addClass('desktop-only');
		}

		// set shadow styles
		//
		if (attributes.shadow) {
			$(element).css('box-shadow', attributes.shadow);
		}
	},

	setBorderStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.border == 'round') {
			$(element).addClass('round');
		} else if (attributes.border == 'rounded') {
			$(element).addClass('rounded');
		} else if (attributes.border) {
			$(element).css('border', attributes.border);
		}
		if (attributes.border_radius) {
			$(element).css('border-radius', attributes.border_radius);
		}
	},

	setImageStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.outline) {
			$(element).css('outline', attributes.outline);
		}
		if (attributes.rendering) {
			$(element).addClass(attributes.rendering);
		}
		if (attributes.filter) {
			$(element).css('filter', attributes.filter);
		}
	},

	setFont: function(element, font) {
		application.loadFont(font);
		if (font) {
			if (config.settings.fonts[font]) {
				$(element).css('font-family', config.settings.fonts[font]['font-family']);
			} else {
				$(element).css('font-family', font);
			}
		}
	},

	setFontStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.font) {
			this.setFont(element, attributes.font);
		}
		if (attributes.font_variant) {
			$(element).css('font-variant', attributes.font_variant);
		}
		if (attributes.font_size) {
			$(element).css('font-size', attributes.font_size);
		}
		if (attributes.font_style) {
			$(element).css('font-style', attributes.font_style);
		}
		if (attributes.font_weight) {
			$(element).css('font-weight', attributes.font_weight);
		}
		if (attributes.first_letter) {

			// create new style rule
			//
			let name = 'first-letter' + attributes.first_letter.replace('%', 'pc');
			CssUtils.addNamedCssRule(name, '.' + name, {
				'display': 'inline-block'
			});
			CssUtils.addCssRule('.' + name + '::first-letter', {
				'font-size': attributes.first_letter
			});

			// apply style rule
			//
			$(element).addClass(name);
		}
	},

	setTextStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.color) {
			$(element).css('color', attributes.color);
		}
		if (attributes.line_height) {
			$(element).css('line-height', attributes.line_height + 'px');
		}
		if (attributes.text_align) {
			$(element).css('text-align', attributes.text_align);
		}
		if (attributes.text_transform) {
			$(element).css('text-transform', attributes.text_transform);
		}
		if (attributes.text_shadow) {
			$(element).css('text-shadow', attributes.text_shadow);
		}
		if (attributes.outline) {
			$(element).addClass('outlined').css('--outline-color', attributes.outline);
		}
		this.setFontStyles(element, attributes);
	},

	setTextBlockStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		this.setTextStyles(element, attributes);
		this.setBlockStyles(element, attributes);
		this.setBorderStyles(element, attributes);
		this.setBackgroundStyles(element, attributes);
	},

	setTitleStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.color && attributes.color != 'white') {
			$(element).css('color', attributes.color);
		}
		this.setFontStyles(element, attributes);
	}
};