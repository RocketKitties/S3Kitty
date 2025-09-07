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

import Topic from '../../../../../../models/topics/topic.js';
import ViewMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/view-menu-view.js';

export default ViewMenuView.extend({

	//
	// attributes
	//

	events: {

		// mainbar options
		//
		'click .show-comments': 'onClickOption',
		'click .show-options': 'onClickOption',
		'click .translation': 'onClickOption',
		'click .language-option': 'onClickLanguageOption',

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

	visible: function() {
		let preferences = this.parent.app.preferences;
		let isTopic = this.parent.app.model instanceof Topic;
		let hasTranslation = preferences.get('translation');
		let hasLanguages = application.session.get('config').languages != undefined;

		return {
			'show-comments': isTopic,
			'show-options': isTopic,
			'language': hasTranslation && hasLanguages
		};
	},

	enabled: function() {
		return this.parent.app.model != undefined;
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// viewing options
			//
			'show-comments': preferences.get('show_comments'),
			'show-options': preferences.get('show_options'),
			'translation': preferences.get('translation'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels info': preferences.includes('sidebar_panels', 'info'),
			'sidebar-panels topics':  preferences.includes('sidebar_panels', 'topics'),
			'sidebar-panels chats':  preferences.includes('sidebar_panels', 'chats'),

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
	// mouse event handling methods
	//

	onClickLanguageOption: function(event) {
		let link = $(event.target).closest('a');

		// set menu item
		//
		this.$el.find('.language-option').closest('li').removeClass('selected');
		link.closest('li').addClass('selected');

		// set option
		//
		let language = link.text();
		this.parent.app.setOption('language', language);		
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {
		$(document).off('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange');
	}
});