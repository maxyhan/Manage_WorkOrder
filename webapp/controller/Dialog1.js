var ci_attach1, base64_marker, baseval = [],
	ci_obj1, ci_att1 = [];
sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/m/MessageBox",
	"sap/m/UploadCollectionParameter",
	"./utilities",
	"sap/ui/core/routing/History"
], function (ManagedObject, MessageBox, UploadCollectionParameter, Utilities, History) {

	return ManagedObject.extend("com.sap.build.ba293bd41-us_1.manageWorkOrder.controller.Dialog1", {
		constructor: function (oView) {
			this._oView = oView;
			this._oControl = sap.ui.xmlfragment(oView.getId(), "com.sap.build.ba293bd41-us_1.manageWorkOrder.view.Dialog1", this);
			this._bInit = false;
		},
		moreok: function () {

			Dialog1.close();

		},
		moreclose: function () {

			Dialog1.close();

		},

		ci_handleDelete: function (oEvent) {

			var path = oEvent.getParameter('listItem').getBindingContext().getPath();
			var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
			var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

			var Data = list_ID.getModel();

			var d = Data.getData();
			d.splice(idx, 1);
			Data.setData(d);

		},

		onUploadComplete: function (oEvent) {

			var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
			setTimeout(function () {
				var oUploadCollection = this.byId("UploadCollection1");

				for (var i = 0; i < oUploadCollection.getItems().length; i++) {
					if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
						oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
						break;
					}
				}

				// delay the success message in order to see other messages before
				MessageToast.show("Event uploadComplete triggered");
			}.bind(this), 8000);
		},
		onChange: function (oEvent) {
			// debugger;
			var oUploadCollection = oEvent.getSource();
			// Header Token
			var oCustomerHeaderToken = new UploadCollectionParameter({
				name: "x-csrf-token",
				value: "securityTokenFromModel"
			});
			oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
			// MessageToast.show("Event change triggered");
		},
		_onFileUploaderChange: function () {
			var oFileuploader = this.getView().byId("ci_fileUploader11");
			ci_attach1 = this.getView().byId("UploadCollection");
			var len = oFileuploader.length;
			var sFilename = oFileuploader.getValue();

			//	baseval = [" "," "," "," "," "];
			var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

			var base64_marker = 'data:' + file.type + ';base64,';

			var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
			console.log("filename : " + filename);
			var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
			console.log("fileext : " + fileext);
			var sfileext = fileext.substring(0, 3);
			console.log("sfileext : " + sfileext);
			var tsfileext = sfileext.toUpperCase();
			console.log("tsfileext : " + tsfileext);
			var that = this;
			if (file) {
				var reader = new FileReader();

				reader.onload = function (readerEvt) {
					var binaryString = readerEvt.target.result;
					var base64 = btoa(binaryString);
					console.log("base64 : " + base64);

					oFileuploader.setValue();
					baseval.push(base64);
					console.log(baseval);
					ci_obj1 = {
						Name: filename,
						Ext: tsfileext,
						Base64: base64
					};
					ci_att1.push(ci_obj1);

					console.log(ci_att1.length);
					var oModel = new sap.ui.model.json.JSONModel(ci_att1);
					console.log(ci_att1);
					console.log(ci_att1[0].Base64);
					ci_attach1.setModel(oModel);
					var oItems = new sap.m.ObjectListItem({
						icon: {
							path: "Ext",
							formatter: function (subject) {
								var lv = subject;
								if (lv === 'TXT') {
									return "sap-icon://document-text";
								} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
									return "sap-icon://attachment-photo";
								} else if (lv === 'PDF') {
									return "sap-icon://pdf-attachment";
								} else if (lv === 'DOC') {
									return "sap-icon://doc-attachment";
								} else if (lv === 'XLS') {
									return "sap-icon://excel-attachment";
								} else if (lv === 'MP3') {
									return "sap-icon://attachment-audio";
								} else if (lv === 'XLS') {
									return "sap-icon://excel-attachment";
								} else if (lv === 'PPT') {
									return "sap-icon://ppt-attachment";
								} else {
									return "sap-icon://document";
								}

							}
						},
						title: "{Name}.{Ext}",
						type: "Active",
					});
					ci_attach1.bindItems("/", oItems);
					that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

					/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
			console.log(ci_att11,"array");*/

				};

			};

			reader.readAsBinaryString(file);

		},
		_onUploadCollectionFileSizeExceed: function () {
			return new Promise(function (fnResolve) {
				sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
					title: "File Too Large",
					onClose: function () {
						fnResolve();
					}
				});
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},

		exit: function () {
			delete this._oView;
		},

		getView: function () {
			return this._oView;
		},

		getControl: function () {
			return this._oControl;
		},

		getOwnerComponent: function () {
			return this._oView.getController().getOwnerComponent();
		},

		open: function () {
			var oView = this._oView;
			var oControl = this._oControl;

			if (!this._bInit) {

				// Initialize our fragment
				this.onInit();

				this._bInit = true;

				// connect fragment to the root view of this component (models, lifecycle)
				oView.addDependent(oControl);
			}

			var args = Array.prototype.slice.call(arguments);
			if (oControl.open) {
				oControl.open.apply(oControl, args);
			} else if (oControl.openBy) {
				oControl.openBy.apply(oControl, args);
			}
		},

		close: function () {
			this._oControl.close();
		},

		setRouter: function (oRouter) {
			this.oRouter = oRouter;

		},
		getBindingParameters: function () {
			return {};

		},
		_onUploadCollectionUploadComplete: function (oEvent) {

			var oFile = oEvent.getParameter("files")[0];
			var iStatus = oFile ? oFile.status : 500;
			var sResponseRaw = oFile ? oFile.responseRaw : "";
			var oSourceBindingContext = oEvent.getSource().getBindingContext();
			var sSourceEntityId = oSourceBindingContext ? oSourceBindingContext.getProperty("") : null;
			var oModel = this.getView().getModel();

			return new Promise(function (fnResolve, fnReject) {
				if (iStatus !== 200) {
					fnReject(new Error("Upload failed"));
				} else if (oModel.hasPendingChanges()) {
					fnReject(new Error("Please save your changes, first"));
				} else if (!sSourceEntityId) {
					fnReject(new Error("No source entity key"));
				} else {
					try {
						var oResponse = JSON.parse(sResponseRaw);
						var oNewEntityInstance = {};

						oNewEntityInstance[""] = oResponse["ID"];
						oNewEntityInstance[""] = sSourceEntityId;
						oModel.createEntry("", {
							properties: oNewEntityInstance
						});
						oModel.submitChanges({
							success: function (oResponse) {
								var oChangeResponse = oResponse.__batchResponses[0].__changeResponses[0];
								if (oChangeResponse && oChangeResponse.response) {
									oModel.resetChanges();
									fnReject(new Error(oChangeResponse.message));
								} else {
									oModel.refresh();
									fnResolve();
								}
							},
							error: function (oError) {
								fnReject(new Error(oError.message));
							}
						});
					} catch (err) {
						var message = typeof err === "string" ? err : err.message;
						fnReject(new Error("Error: " + message));
					}
				}
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onUploadCollectionChange: function (oEvent) {

			var oUploadCollection = oEvent.getSource();
			var aFiles = oEvent.getParameter('files');

			if (aFiles && aFiles.length) {
				var oFile = aFiles[0];
				var sFileName = oFile.name;

				var oDataModel = this.getView().getModel();
				if (oUploadCollection && sFileName && oDataModel) {
					var sXsrfToken = oDataModel.getSecurityToken();
					var oCsrfParameter = new sap.m.UploadCollectionParameter({
						name: "x-csrf-token",
						value: sXsrfToken
					});
					oUploadCollection.addHeaderParameter(oCsrfParameter);
					var oContentDispositionParameter = new sap.m.UploadCollectionParameter({
						name: "content-disposition",
						value: "inline; filename=\"" + encodeURIComponent(sFileName) + "\""
					});
					oUploadCollection.addHeaderParameter(oContentDispositionParameter);
				} else {
					throw new Error("Not enough information available");
				}
			}

		},
		_onUploadCollectionTypeMissmatch: function () {
			return new Promise(function (fnResolve) {
				sap.m.MessageBox.warning(
					"The file you are trying to upload does not have an authorized file type (JPEG, JPG, GIF, PNG, TXT, PDF, XLSX, DOCX, PPTX).", {
						title: "Invalid File Type",
						onClose: function () {
							fnResolve();
						}
					});
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},
		_onUploadCollectionFileSizeExceed: function () {
			return new Promise(function (fnResolve) {
				sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
					title: "File Too Large",
					onClose: function () {
						fnResolve();
					}
				});
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},
		_onButtonPress: function () {

			this.close();

		},
		_onButtonPress1: function () {

			this.close();

		},
		_onButtonPress2: function () {

			this.close();

		},
		onInit: function () {

			this._oDialog = this.getControl();
			this.data = this.getView().getModel("oGlobalModel").getProperty("/matdata");
			console.log("datamat", this.data);
		},
		onExit: function () {
			this._oDialog.destroy();

		}

	});
}, /* bExport= */ true);