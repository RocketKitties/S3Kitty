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

		// set initial menu state
		//
		return {
			'search-kind name': preferences.matches('search_kind', 'name'),
			'search-kind location': preferences.matches('search_kind', 'location'),
			'search-kind occupation': preferences.matches('search_kind', 'occupation'),
			'search-kind age': preferences.matches('search_kind', 'age'),
			'search-kind gender': preferences.matches('search_kind', 'gender'),
			'search-kind birth-date': preferences.matches('search_kind', 'birth-date'),
			'search-kind join-date': preferences.matches('search_kind', 'join-date'),
			'search-kind connect-date': preferences.matches('search_kind', 'connect-date')
		};
	}
});