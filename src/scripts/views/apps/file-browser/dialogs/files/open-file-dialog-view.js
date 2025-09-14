/******************************************************************************\
|                                                                              |
|                           open-file-dialog-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a dialog box to open a file or directory.                |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import File from '../../../../../models/storage/files/file.js';
import OpenItemsDialogView from '../../../../../views/apps/file-browser/dialogs/files/open-items-dialog-view.js';

export default OpenItemsDialogView.extend({

	//
	// dialog attributes
	//
	
	icon: '<i class="fa fa-file"></i>',
	title: "Open File",

	//
	// querying methods
	//

	hasSelected: function() {
		return this.getChildView('file_browser').numSelected() == 1 &&
			this.getChildView('file_browser').getSelectedModel() instanceof File;
	},

	onRender: function() {

		// call superclass method
		//
		OpenItemsDialogView.prototype.onRender.call(this);

		// set initial state
		//
		this.setDisabled(true);
	}
});