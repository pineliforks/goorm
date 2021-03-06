/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the AGPL v3 License:
 * http://www.goorm.io/intro/License
 * project_name : goormIDE
 * version: 1.0.0
 **/

/*jshint newcap:false, debug:true, unused: true, evil: true, devel: true, plusplus: false, browser: true, jquery: true, undef:false */
/*clientside jslint comment for global */
/*global org: false, YAHOO: false */
/*jshint unused: false */



org.goorm.core.file.save_as = function () {
	this.dialog = null;
	this.buttons = null;
	this.tabview = null;
	this.treeview = null;
};

org.goorm.core.file.save_as.prototype = {
	init: function () {

		var handle_save = function (panel) {
			if (typeof(this.hide) !== 'function' && panel) {
				panel.hide();
			}
			else{
				this.hide();
			}
		};

		var handle_cancel = function () {
			this.hide();
		};

		this.buttons = [{
			text: "<span localization_key='save'>Save</span>",
			handler: handle_save,
			isDefault: true
		}, {
			text: "<span localization_key='cancel'>Cancel</span>",
			handler: handle_cancel
		}];

		this.dialog = org.goorm.core.file.save_as.dialog;
		this.dialog.init({
			localization_key: "title_save_as",
			title: "Save as",
			path: "configs/dialogs/org.goorm.core.file/file.save_as.html",
			width: 600,
			height: 400,
			modal: true,
			buttons: this.buttons,
			success: function () {
				//TabView Init
				//self.tabview = new YAHOO.widget.TabView('filesave_asContents');

				//TreeView Init
				self.treeview = new YAHOO.widget.TreeView("file_save_as_treeview");
				self.treeview.render();
			}
		});
		this.dialog = this.dialog.dialog;

		//this.dialog.panel.setBody("AA");
	},

	show: function () {
		this.dialog.panel.show();
	}
};
