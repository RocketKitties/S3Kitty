/******************************************************************************\
|                                                                              |
|                         user-notifications-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying a list of a user's notifications.       |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import Notifications from '../../../../collections/notifications/notifications.js';
import BaseView from '../../../../views/base-view.js';
import NotificationsListView from '../../../../views/apps/notification-center/mainbar/lists/notifications-list-view.js';

export default BaseView.extend({

	//
	// attributes
	//

	template: template(`
		<h1 class="mobile-only"><i class="fa fa-newspaper"></i>My Notifications</h1>
		
		<div class="notifications panel"></div>
	`),

	regions: {
		notifications: '.notifications'
	},

	//
	// ajax methods
	//

	fetchNotifications(options) {
		new Notifications().fetch({

			// callbacks
			//
			success: (collection) => {

				// show list view
				//
				if (options && options.success) {
					options.success(collection);
				}
			},

			error: (model, response) => {

				// show error message
				//
				application.error({
					message: "Could not get notifications.",
					response: response
				});
			}
		});
	},

	//
	// rendering methods
	//

	onRender: function() {

		this.fetchNotifications({

			// callbacks
			//
			success: (collection) => {
				this.showNotificationsList(collection);
			}
		});
	},

	showNotificationsList: function(collection) {
		if (this.hasRegion('notifications')) {
			this.showChildView('notifications', new NotificationsListView({
				collection: collection,
				multicolumn: true
			}));
		}
	}
});