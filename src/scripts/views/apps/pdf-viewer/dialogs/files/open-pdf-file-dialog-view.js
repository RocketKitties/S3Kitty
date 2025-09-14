/******************************************************************************\
|                                                                              |
|                         open-pdf-file-dialog-view.js                         |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a dialog for opening pdf files.                          |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import Directory from '../../../../../models/storage/directories/directory.js';
import OpenFileDialogView from '../../../../../views/apps/file-browser/dialogs/files/open-file-dialog-view.js';

export default OpenFileDialogView.extend({

	//
	// attributes
	//

	title: "Open PDF File",

	//
	// filtering methods
	//

	filter: function (child) {

		// check if hidden
		//
		if (child.options.preferences) {
			if (!child.options.preferences.includes('options', 'hidden_files') && child.isHidden()) {
				return false;
			}
		}

		// check if a directory
		//
		if (child.model instanceof Directory) {
			return true;
		}

		// check if valid file type
		//
		let extensions = application.settings.associations.getFileExtensions('pdf_viewer');
		return extensions.contains(child.model.getFileExtension());
	}
});