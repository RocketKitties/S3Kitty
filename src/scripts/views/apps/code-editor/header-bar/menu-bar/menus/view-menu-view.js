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
		'click .font-size': 'onClickFontSize',
		'click .decrease-font-size': 'onClickDecreaseFontSize',
		'click .increase-font-size': 'onClickIncreaseFontSize',
		'click .show-gutter': 'onClickOption',
		'click .show-indent-guides': 'onClickOption',
		'click .show-print-margin': 'onClickOption',
		'click .show-invisibles': 'onClickOption',
		'click .tabify': 'onClickTabify',
		'click .untabify': 'onClickUntabify',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .show-console': 'onClickOption',

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
		'click .view-preferences': 'onClickViewPreferences',
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

			// font options
			//
			'font-size-10': preferences.matches('font_size', 10),
			'font-size-11': preferences.matches('font_size', 11),
			'font-size-12': preferences.matches('font_size', 12),
			'font-size-13': preferences.matches('font_size', 13),
			'font-size-14': preferences.matches('font_size', 14),
			'font-size-15': preferences.matches('font_size', 15),
			'font-size-16': preferences.matches('font_size', 16),
			'font-size-18': preferences.matches('font_size', 18),
			'font-size-20': preferences.matches('font_size', 20),
			'font-size-24': preferences.matches('font_size', 24),

			// editing options
			//
			'show-gutter': preferences.get('show_gutter'),
			'show-indent-guides': preferences.get('show_indent_guides'),
			'show-print-margin': preferences.get('show_print_margin'),
			'show-invisibles': preferences.get('show_invisibles'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),
			'toolbars run': preferences.includes('toolbars', 'run'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels files': preferences.includes('sidebar_panels', 'files'),
			'sidebar-panels favorites': preferences.includes('sidebar_panels', 'favorites'),
			'sidebar-panels console': preferences.includes('panes', 'console'),

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
	// converting methods
	//

	itemToFontSize: function(className) {
		return parseInt(className.replace('font_size_', ''));
	},

	fontSizeToItem: function(fontSize) {
		return 'font_size_' + fontSize;
	},

	//
	// getting methods
	//

	getSelectedFontSize: function() {
		return this.itemToFontSize(this.getSelectedGroupItem('font-size'));
	},

	getFontSizes: function() {
		let fontSizes = [];
		let items = this.getGroupItems('font-size');
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			fontSizes.push(this.itemToFontSize(item));
		}
		return fontSizes;
	},

	getPrevFontSize: function(fontSize) {
		let fontSizes = this.getFontSizes();
		for (let i = 1; i < fontSizes.length; i++) {
			if (fontSizes[i] == fontSize) {
				return fontSizes[i - 1];
			}
		}
		return fontSizes[0];
	},

	getNextFontSize: function(fontSize) {
		let fontSizes = this.getFontSizes();
		for (let i = 0; i < fontSizes.length - 1; i++) {
			if (fontSizes[i] == fontSize) {
				return fontSizes[i + 1];
			}
		}
		return fontSizes[fontSizes.length - 1];
	},

	//
	// mouse event handling methods
	//

	onClickFontSize: function(event) {
		let fontName = this.getItemName(event.target);
		let fontSize = this.itemToFontSize(fontName);

		// update menu
		//
		this.setGroupItemSelected('font_size', fontName);

		// update app
		//
		this.parent.app.setOption('font_size', parseInt(fontSize));
	},

	onClickDecreaseFontSize: function() {
		let fontSize = this.getPrevFontSize(this.getSelectedFontSize());

		// update menu
		//
		this.setGroupItemSelected('font_size', this.fontSizeToItem(fontSize));

		// update app
		//
		this.parent.app.setOption('font_size', parseInt(fontSize));
	},

	onClickIncreaseFontSize: function() {
		let fontSize = this.getNextFontSize(this.getSelectedFontSize());

		// update menu
		//
		this.setGroupItemSelected('font_size', this.fontSizeToItem(fontSize));

		// update app
		//
		this.parent.app.setOption('font_size', parseInt(fontSize));
	},

	onClickTabify: function() {
		this.parent.app.tabify();

		// update menu
		//
		this.setItemSelected('show-invisibles');

		// update app
		//
		this.parent.app.setOption('show_invisibles', true);
	},

	onClickUntabify: function() {
		this.parent.app.untabify();

		// update menu
		//
		this.setItemSelected('show-invisibles');

		// update app
		//
		this.parent.app.setOption('show_invisibles', true);
	}
});