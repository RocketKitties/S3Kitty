/******************************************************************************\
|                                                                              |
|                               sort-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying sort dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SortMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/sort-menu-view.js';

export default SortMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .sort-kind': 'onClickSortKind',
		'click .sort-order': 'onClickSortOrder'
	},

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {
			'sort-kind title': preferences.matches('sort_kind', 'title'),
			'sort-kind priority': preferences.matches('sort_kind', 'priority'),
			'sort-kind kind': preferences.matches('sort_kind', 'kind'),
			'sort-kind create-date': preferences.matches('sort_kind', 'create_date'),
			'sort-kind modify-date': preferences.matches('sort_kind', 'modify_date'),
			'sort-kind due-date': preferences.matches('sort_kind', 'due_date'),
			'sort-order increasing': preferences.matches('sort_order', 'increasing'),
			'sort-order decreasing': preferences.matches('sort_order', 'decreasing')
		};
	}
});