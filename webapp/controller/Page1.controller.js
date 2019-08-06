var state, arr4 = [];
var search;
sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/odata/v2/ODataModel"

], function (BaseController, MessageBox, Utilities, History, Sorter, Filter, FilterOperator, ODataModel) {
	"use strict";

	return BaseController.extend("com.sap.build.ba293bd41-us_1.manageWorkOrder.controller.Page1", {
		handleRouteMatched: function (oEvent) {
			if (this.flag) {
				this._firstListBinding();
				this.flag = false;
			}
		},
		adv:function(){
			search.open();
			
		},
		canceltecch:function(){
			search.close();
		},

		radioButtonSelect: function (oEvent) {
			var oSelectedIndex = oEvent.getParameter("selectedIndex");
			var oRadioButtonSrc = oEvent.getSource().getAggregation("buttons");
			var oSelectedRadioText = oRadioButtonSrc[oSelectedIndex].getText();
			var aFilters = [];

			if (oSelectedRadioText === "Low") {
				alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "Medium") {
				alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "High") {
				alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "Very High") {
				alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "All") {
				alert(oSelectedRadioText);
			}

		},

		_firstListBinding: function () {
			/*var listSet = this.getView().byId("mainList");
			var oSorter = [new sap.ui.model.Sorter("CreatedOn", {
				descending: 'false'
			})];
			var listTemp = this.getView().byId("itemlist1");

			listSet.bindAggregation("items", {
				path: "/WorkOrderListSet",
				template: listTemp,
				sorter: oSorter

			});*/

		},

		vstatus: function (a) {
			if (a === 'Medium') {

				return "Warning";

			} else if (a === 'Very High') {

				return "Error";
			} else if (a === 'Low') {

				return "Success";
			} else if (a === 'Rejected') {

				return "Error";
			} else {
				return "None";
			}
		},
		/*		_onPageNavButtonPress: function (oEvent) {

					var oBindingContext = oEvent.getSource().getBindingContext();
					var wno = oEvent.getParameter("listItem").getBindingContext().getProperty("WorkOrderNo");
					this.getView().getModel("oGlobalModel").setProperty("/work", wno);
					console.log(wno);
					
					return new Promise(function (fnResolve) {

						this.doNavigate("Page2_1", oBindingContext, fnResolve, "", 1);
					}.bind(this)).catch(function (err) {
						if (err !== undefined) {
							MessageBox.error(err.message);
						}
					});

				},*/
		doNavigate: function (sRouteName, oBindingContext, fnPromiseResolve, sViaRelation, iNextLevel) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var routePattern = this.oRouter.getRoute(sRouteName).getPattern().split('/');
			var contextFilter = new RegExp('^:.+:$');
			var pagePattern = routePattern.filter(function (pattern) {
				var contextPattern = pattern.match(contextFilter);
				return contextPattern === null || contextPattern === undefined;
			});
			iNextLevel = iNextLevel !== undefined ? iNextLevel : pagePattern ? pagePattern.length - 1 : 0;
			this.oFclModel = this.oFclModel ? this.oFclModel : this.getOwnerComponent().getModel("FclRouter");

			var sEntityNameSet;
			var oNextUIState = this.getOwnerComponent().getSemanticHelper().getNextUIState(iNextLevel);
			var sBeginContext, sMidContext, sEndContext;
			if (iNextLevel === 0) {
				sBeginContext = sPath;
			}

			if (iNextLevel === 1) {
				sBeginContext = this.oFclModel.getProperty("/beginContext");
				sMidContext = sPath;
			}

			if (iNextLevel === 2) {
				sBeginContext = this.oFclModel.getProperty("/beginContext");
				sMidContext = this.oFclModel.getProperty("/midContext");
				sEndContext = sPath;
			}

			var sNextLayout = oNextUIState.layout;

			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
					if (iNextLevel === 0) {
						sBeginContext = sPath;
					} else if (iNextLevel === 1) {
						sMidContext = sPath;
					} else {
						sEndContext = sPath;
					}
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet,
					sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						beginContext: sBeginContext,
						midContext: sMidContext,
						endContext: sEndContext,
						layout: sNextLayout
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function (bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}
						if (iNextLevel === 0) {
							sBeginContext = sPath;
						} else if (iNextLevel === 1) {
							sMidContext = sPath;
						} else {
							sEndContext = sPath;
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName, {
								layout: sNextLayout
							});
						} else {
							this.oRouter.navTo(sRouteName, {
								beginContext: sBeginContext,
								midContext: sMidContext,
								endContext: sEndContext,
								layout: sNextLayout
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName, {
					layout: sNextLayout
				});
			}

			if (typeof fnPromiseResolve === "function") {

				fnPromiseResolve();
			}

		},
		_onTableItemPress: function (oEvent) {

			var oBindingContext = oEvent.getParameter("listItem").getBindingContext();

			var wno = oEvent.getParameter("listItem").getBindingContext().getProperty("WorkOrderNo");
			this.getView().getModel("oGlobalModel").setProperty("/work", wno);
			console.log(wno);
			this.oRouter.navTo("Page2_1", {
				wrk: wno,
				layout: "TwoColumnsMidExpanded",
			});

			/*	return new Promise(function (fnResolve) {

					this.doNavigate("Page2_1", oBindingContext, fnResolve, "", 1);
				}.bind(this)).catch(function (err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});*/

		},
		_onExpandButtonPress: function () {
			var endColumn = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().columnsVisibility.endColumn;
			var isFullScreen = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().isFullScreen;
			var nextLayout;
			var actionsButtonsInfo = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().actionButtonsInfo;
			if (endColumn && isFullScreen) {
				nextLayout = actionsButtonsInfo.endColumn.exitFullScreen;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(2).layout;
			}
			if (!endColumn && isFullScreen) {
				nextLayout = actionsButtonsInfo.midColumn.exitFullScreen;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(1).layout;
			}
			if (endColumn && !isFullScreen) {
				nextLayout = actionsButtonsInfo.endColumn.fullScreen;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(3).layout;
			}
			if (!endColumn && !isFullScreen) {
				nextLayout = actionsButtonsInfo.midColumn.fullScreen;
				nextLayout = nextLayout ? nextLayout : 'MidColumnFullScreen';
			}
			var pageName = this.oView.sViewName.split('.');
			pageName = pageName[pageName.length - 1];
			this.oRouter.navTo(pageName, {
				layout: nextLayout
			});

		},
		_onCloseButtonPress: function () {
			var endColumn = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().columnsVisibility.endColumn;
			var nextPage;
			var nextLevel = 0;

			var actionsButtonsInfo = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().actionButtonsInfo;

			var nextLayout = actionsButtonsInfo.midColumn.closeColumn;
			nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(0).layout;

			if (endColumn) {
				nextLevel = 1;
				nextLayout = actionsButtonsInfo.endColumn.closeColumn;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(1).layout;
			}

			var pageName = this.oView.sViewName.split('.');
			pageName = pageName[pageName.length - 1];
			var routePattern = this.oRouter.getRoute(pageName).getPattern().split('/');
			var contextFilter = new RegExp('^:.+:$');
			var pagePattern = routePattern.filter(function (pattern) {
				var contextPattern = pattern.match(contextFilter);
				return contextPattern === null || contextPattern === undefined;
			});

			var nextPage = pagePattern[nextLevel];
			this.oRouter.navTo(nextPage, {
				layout: nextLayout
			});

		},
		onInit: function () {

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRouteMatched(this.handleRouteMatched, this);
			this.oFclModel = this.getOwnerComponent().getModel("FclRouter");
			this.oFclModel.setProperty('/targetAggregation', 'beginColumnPages');
			this.oFclModel.setProperty('/expandIcon', {});
			this.oView.setModel(new sap.ui.model.json.JSONModel({}), 'fclButton');
			this._bDescendingSort = false;
			this.flag = true;

			this.tableBind();
			search =  sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.sea",this);
			this.getView().addDependent(search);

		},
		tableBind: function () {
			var oController = this;
			var table = oController.getView().byId("Table");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			var sPath = "/WorkOrderListSet";
			oModel.read(sPath, {
				// debugger;
				success: function (oData, oResponse) {
					var count = oData.results.length;
					for (var i = 0; i < count; i++) {
						var WorkOrderNo = oData.results[i].WorkOrderNo;
						// oModel.setProperty(sPath, oData);
						var Description = oData.results[i].Description;
						var CreatedOn = oData.results[i].CreatedOn;
						var year = CreatedOn.slice(0, 4);
						var month = CreatedOn.slice(4, 6);
						var date = CreatedOn.slice(6, 8);
						var CreatedOnDate = date + '.' + month + '.' + year;
						var OrderType = oData.results[i].OrderType;
						var SystStatus = oData.results[i].SystStatus;
						var UserStatus = oData.results[i].UserStatus;
						var priority = oData.results[i].Priority;
						// debugger;
						// var priority1 = "Low";
						var priority11 = "Success";
						// var priority2 = "Medium";
						var priority22 = "Warning";
						// var priority3 = "High";
						// var priority4 = "Very High";
						var priority33 = "Error";
						// var priority44 = "Indication02";
						// var priority44 = "Information";

						if (priority === 'Very High') {

							// priority = priority4;
							state = priority33;

						} else if (priority === 'High') {

							// priority = priority3;
							state = priority33;

						} else if (priority === 'Medium') {

							// priority = priority2;
							state = priority22;

						} else if (priority === 'Low') {

							// priority = priority1;
							state = priority11;

						}

						var obj1 = {
							WorkOrderNo: WorkOrderNo,
							Description: Description,
							CreatedOn: CreatedOnDate,
							OrderType: OrderType,
							SystStatus: SystStatus,
							UserStatus: UserStatus,
							priority: priority,
							prioritystate: state

						};
						arr4.push(obj1);
						//	arr5 = {
						//		"arr5": arr4
						//	};
					}
					var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
					oModelccd.setData({ // Set the data to the model using the JSON object defined already  
						listdata: arr4

					});
					table.setModel(oModelccd);

				},
				error: function (oData, oResponse) {

				}
			});

		},
		onLiveChange: function (oEvent) {
			var SamTbl = oEvent.getParameter("newValue");
			debugger;
			var filters = new Array();
			var oFilter = new sap.ui.model.Filter([
					new sap.ui.model.Filter("WorkOrderNo", sap.ui.model.FilterOperator.Contains, SamTbl),
					new sap.ui.model.Filter("Description", sap.ui.model.FilterOperator.Contains, SamTbl),
					new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.Contains, SamTbl),
					new sap.ui.model.Filter("OrderType", sap.ui.model.FilterOperator.Contains, SamTbl),
					new sap.ui.model.Filter("SystStatus", sap.ui.model.FilterOperator.Contains, SamTbl),
					new sap.ui.model.Filter("priority", sap.ui.model.FilterOperator.Contains, SamTbl)

				],
				false);
			filters = (oFilter);
			var listItem = this.getView().byId("Table");
			var binding = listItem.getBinding("items");
			binding.filter(filters);

		},
		render: function (oEvent) {

			var sTitle = "Work Order",
				oTable = this.getView().byId("Table");

			if (oTable.getBinding("items").isLengthFinal()) {
				var iCount = oEvent.getParameter("total"),
					iItems = oTable.getItems().length;
				sTitle += "(" + iItems + "/" + iCount + ")";
			}
			this.getView().byId("counttable").setText(sTitle);
		},
		/*	render: function () {
				var oController = this;
				var tableLength = oController.getView().byId("table");
				var oFirstItem = tableLength.getItems().length;
				debugger;
				// console.log("oFirstItem :", oFirstItem1);
				oController.byId("counttable").setText("Items (" + oFirstItem + ")");
			},*/
		onExit: function () {

			// to destroy templates for bound aggregations when templateShareable is true on exit to prevent duplicateId issue
			var aControls = [{
				"controlId": "sap_List_Page_0-content-sap_m_ObjectList-1",
				"groups": ["items"]
			}];
			for (var i = 0; i < aControls.length; i++) {
				var oControl = this.getView().byId(aControls[i].controlId);
				if (oControl) {
					for (var j = 0; j < aControls[i].groups.length; j++) {
						var sAggregationName = aControls[i].groups[j];
						var oBindingInfo = oControl.getBindingInfo(sAggregationName);
						if (oBindingInfo) {
							var oTemplate = oBindingInfo.template;
							oTemplate.destroy();
						}
					}
				}
			}

		}
	});
}, /* bExport= */ true);