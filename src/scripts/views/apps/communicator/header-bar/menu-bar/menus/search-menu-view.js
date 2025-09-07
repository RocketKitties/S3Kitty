/******************************************************************************\
|                                                                              |
|                              search-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying search dropdown menus.                  |
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
import Chat from '../../../../../../models/chats/chat.js';
import SearchMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/search-menu-view.js';

export default SearchMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .search-kind': 'onClickSearchKind'
	},

	//
	// querying methods
	//

	visible: function() {
		let isTopic = this.parent.app.model instanceof Topic;
		let isChat = this.parent.app.model instanceof Chat;

		return {
			'search-kind message': isTopic || isChat,
			'search-kind date': isTopic || isChat,
			'search-kind num-links': isTopic,
			'search-kind num-comments': isTopic
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {
			'search-kind message': preferences.matches('search_kind', 'message'),
			'search-kind date': preferences.matches('search_kind', 'date'),
			'search-kind num-links': preferences.matches('search_kind', 'num_links'),
			'search-kind num-comments': preferences.matches('search_kind', 'num_comments')
		};
	}
});