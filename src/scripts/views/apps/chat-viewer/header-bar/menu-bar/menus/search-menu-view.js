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

	enabled: function() {
		let hasChat = this.parent.app.collection.length > 0;

		return {
			'search-kind message': hasChat,
			'search-kind date': hasChat
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {
			'search-kind message': preferences.matches('search_kind', 'message'),
			'search-kind date': preferences.matches('search_kind', 'date')
		};
	}
});