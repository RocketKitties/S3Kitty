/******************************************************************************\
|                                                                              |
|                               file-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying file dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import FileMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/file-menu-view.js';

export default FileMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .new-window': 'onClickNewWindow',
		'click .open-file': 'onClickOpenFile',
		'click .add-favorites': 'onClickAddFavorites',
		'click .remove-favorites': 'onClickRemoveFavorites',
		'click .show-info': 'onClickShowInfo',
		'click .save-as': 'onClickSaveAs',
		'click .download-file': 'onClickDownloadFile',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasSelectedFavorites = this.parent.app.hasSelectedFavorites();

		return {
			'new-window': true,
			'open-file': isSignedIn,
			'add-favorites': isSignedIn,
			'remove-favorites': hasSelectedFavorites,
			'show-info': this.parent.app.model != null,
			'save-as': isSignedIn,
			'download-file': this.parent.app.model != null,
			'close-window': true
		};
	},

	//
	// mouse event handling methods
	//

	onClickOpenFile: function() {
		this.parent.app.showOpenDialog();
	},

	onClickAddFavorites: function() {
		this.parent.app.showAddFavoritesDialog();
	},

	onClickRemoveFavorites: function() {
		this.parent.app.removeSelectedFavorites();
	},

	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickSaveAs: function() {
		this.parent.app.saveAs();
	},

	onClickDownloadFile: function() {
		this.parent.app.downloadFile();
	},

	onClickCloseFile: function() {
		this.parent.app.close();
	}
});