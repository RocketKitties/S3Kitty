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

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {
			'search-kind name': preferences.matches('search_kind', 'name'),
			'search-kind create-date': preferences.matches('search_kind', 'create_date'),
			'search-kind modify-date': preferences.matches('search_kind', 'modify_date'),
			'search-kind access-date': preferences.matches('search_kind', 'access_date')
		};
	}
});