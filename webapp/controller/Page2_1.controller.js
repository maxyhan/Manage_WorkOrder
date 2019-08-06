var oModelccd, compobtn, more, oModelJson, busyDialog;
var ci_attach1, base64_marker, baseval = [],
	ci_obj1, ci_att1 = [];
var HotelBookingz, semhotelarrayz = [],
	seamoModelccd81;
var HotelBooking1, semhotelarray1, seamoModelccd5, itemInc = 0,
	itemInc1 = 0;
var semhotelarray = [],
	seamoModelccd4, HotelBooking, table, funLoc1;
var Quagga, funloc, equ, purch, fun, workloc;

var lat1, lng1, llong1, geocoder1, marker4, directionsDisplay, directionsService, prio, oModel13, maps, google, doc, message;

var HotelBooking1, semhotelarray1, seamoModelccd5, itemInc = 0,
	itemInc1 = 0;
var semhotelarray2 = [],
	seamoModelccd42, HotelBooking2, table, funLoc1, oCont;
var semhotelarray1 = [],
	seamoModelccd41, HotelBooking1, table, funLoc1;
var array1 = [],
	array2 = [],
	array3 = [],
	array4 = [],
	array5 = [];
var arr32 = [],
	arr31 = [];
var operaPostItems = [],
	compoPostItems = [];
var arrayz = [],
	oModelssd;

var oModel3;

sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"./Dialog1",
	"./Dialog4",
	"./Dialog5",
	"sap/m/UploadCollectionParameter",
	"./utilities",
	"./Dialog3",
	"./Dialog2",
	"sap/ui/core/routing/History",
	"sap/ui/model/odata/ODataModel",
], function (BaseController, MessageBox, JSONModel, MessageToast, Dialog1, Dialog4, Dialog5, UploadCollectionParameter, Utilities,
	Dialog3, Dialog2,
	History, ODataModel) {
	"use strict";

	return BaseController.extend("com.sap.build.ba293bd41-us_1.manageWorkOrder.controller.Page2_1", {
		handleRouteMatched: function (oEvent) {

			this.workOrd = this.getView().getModel("oGlobalModel").getProperty("/work");
			this.byId("objPageH").setObjectTitle(this.workOrd);
			var oView;

			this.bindItems();
			this.operationsBind();
			this.componentsBind();
			// this.addrow();
			//this.addbtnmore1();
			this.addbtnmore1(); /////////For More Fragment Resource Planning
			this.addbtnmore2(); /////////For More Fragment Material required

			this.matreq();
		},
		matreq: function () {

			arrayz = [];

			var moretab = sap.ui.core.Fragment.byId("morefragment", "tab5");

			// var mi = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield1");
			// console.log("mi", mi);
			// var mi1 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield2");
			// var mi2 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield3");
			// var mi3 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield4");
			// var mi4 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield5");

		},

		addrow: function () {
			//alert("pressed");
			// debugger;
			var oCont = this;

			// itemInc1 = itemInc1 + 10;
			arr31 = [];

			var itemTab1 = this.getView().byId("optab");
			var rowlen = itemTab1.getItems().length;
			console.log(rowlen);
			for (var i = 0; i < rowlen; i++) {

				var operation = itemTab1.getItems()[i].getCells()[0].getValue();
				var descrip = itemTab1.getItems()[i].getCells()[1].getValue();
				var workcen = itemTab1.getItems()[i].getCells()[2].getValue();
				var plant = itemTab1.getItems()[i].getCells()[3].getValue();
				var controlkey = itemTab1.getItems()[i].getCells()[4].getValue();
				var duration = itemTab1.getItems()[i].getCells()[5].getValue();
				// var plant = itemTab1.getItems()[i].getCells()[3].getText();

				var obj3 = {
					Empty1: operation,
					Empty2: descrip,
					Empty3: workcen,
					Empty4: plant,
					Empty5: controlkey,
					Empty6: duration,
					Empty7: ""
				};

				arr31.push(obj3);
			}

			var obj = {

				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: ""

			};

			debugger;

			arr31.push(obj);
			arr32 = {
				"arr32": arr31
			};

			var that = this;
			oModel3 = new sap.ui.model.json.JSONModel(arr32);
			var taskTab1 = that.getView().byId("optab");
			taskTab1.setModel(oModel3);

			// HotelBookingz = oCont.getView().byId("optab");

			var titems1 = new sap.m.ColumnListItem({
				type: "Navigation",
				press: function (oArg) {
					that._onRowPress(oArg);
				},

				cells: [new sap.m.Input({
						value: "{Empty1}"
					}), new sap.m.Input({
						value: "{Empty2}"
					}), new sap.m.Input({
						value: "{Empty3}"
					}), new sap.m.Input({
						value: "{Empty4}"
					}),
					new sap.m.Input({
						value: "{Empty5}"
					}),
					new sap.m.Input({
						value: "{Empty6}"
					}),
					new sap.m.Button({
						icon: "sap-icon://add-equipment",
						text: "",
						type: sap.m.ButtonType.Transparent,
						press: function (oArg) {
							that._onSegmentedButtonItemPress(oArg);
						}
					}),
					new sap.m.Button({
						icon: "sap-icon://overview-chart",
						text: "",
						type: sap.m.ButtonType.Transparent,
						press: function (oArg) {
							that._onSegmentedButtonItemPress1(oArg);
						}
					}),
					new sap.m.Button({
						icon: "sap-icon://navigation-right-arrow",
						text: "",
						type: sap.m.ButtonType.Transparent,
						press: function (oArg) {
							that._onIconPress(oArg);
						}
					})

				]
			});

			taskTab1.bindItems("/arr32", titems1);

		},
		addbtnmore1: function () {

			//	this.handleRouteMatched();

			HotelBooking1 = {

				Empty1: "",
				Empty2: ""

			};

			//debugger;

			semhotelarray1.push(HotelBooking1);

			HotelBooking1 = sap.ui.core.Fragment.byId("morefragment", "tab4");

			seamoModelccd41 = new sap.ui.model.json.JSONModel(); // created a JSON model   
			seamoModelccd41.setData({ // Set the data to the model using the JSON object defined already  
				seamtrans1: semhotelarray1

			});
			HotelBooking1.setModel(seamoModelccd41);

		},
		addbtnmore2: function () {

			this.HotelBooking2 = {

				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: ""

			};

			//debugger;

			semhotelarray2.push(this.HotelBooking2);

			this.HotelBooking2 = sap.ui.core.Fragment.byId("morefragment", "tab5");

			seamoModelccd42 = new sap.ui.model.json.JSONModel(); // created a JSON model   
			seamoModelccd42.setData({ // Set the data to the model using the JSON object defined already  
				seamtrans2: semhotelarray2

			});
			this.HotelBooking2.setModel(seamoModelccd42);

		},
		openfrG: function () { /////////////// for component button in operation tab

			itemInc = itemInc + 10;

			HotelBooking = {

				Empty1: itemInc,
				Empty2: "",
				pass12: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: ""

			};

			//debugger;

			semhotelarray.push(HotelBooking);

			HotelBooking = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");

			seamoModelccd4 = new sap.ui.model.json.JSONModel(); // created a JSON model   
			seamoModelccd4.setData({ // Set the data to the model using the JSON object defined already  
				seamtrans: semhotelarray

			});
			HotelBooking.setModel(seamoModelccd4);
		},

		compo_btn: function () {
			var that = this;
			if (this.tabmodel) {

				compobtn.open();
				that.c2();
			} else {

				semhotelarray = [];

				itemInc = 0;

				this.openfrG();

				compobtn.open();
				that.c2();
				//	this.addbtncp();
			}

		},
		addbtncp: function () {

			itemInc = itemInc + 10;

			semhotelarray.push({

				Empty1: itemInc,
				Empty2: "",
				pass12: this.planplt,
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: ""

			});
			seamoModelccd4.refresh(); //which will add the new record

			var oCont = this; ///// Purchase data Button to be invisible after the Add button will be pressed

			var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

			form.setVisible(false);

		},
		c1: function () {

			this.plangrp = this.getView().byId("combo3").getSelectedKey(); //// to post Planner Group
			//alert(this.plangrp);

		},

		c2: function () {

			this.planplt = this.getView().byId("planPlantBind5").getValue(); //// to post Planning plant
			// alert(this.planplt);
			// debugger;
			var sPath = "/MaterialF4Set?$filter= Plant eq '" + this.planplt + "'";
			var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {

					var plntcnt = oData.results.length;
					console.log("countable:", plntcnt);
					//	alert(plntcnt);
					// var Material = oData.results[0].Material;
					// console.log("Material:",Material);
					//  alert(Material);

					var c4model = new sap.ui.model.json.JSONModel();

					c4model.setData(oData);
					var mat = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");
					//	alert(mat);
					mat.setModel(c4model);
					var comboven = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

					var oItems = new sap.ui.core.ListItem({
						key: "{Material}",
						text: "{Material} - {Description}"
					});
					comboven.bindAggregation("items", {
						path: "/results",
						template: oItems
					});

				}
			});

		},
		frag2mat: function (oEvent) {

			var cc_oTable = oEvent.getSource().getParent().getParent();

			var oSrc = oEvent.getSource();
			var aItems = oSrc.getSelectedKey();
			//alert(aItems);
			//console.log(oEvent);
			var value = oEvent.getSource().getParent().getBindingContext().getPath();
			var valueind = value.split("/");
			var indexi = valueind[2];
			console.log(indexi);
			//var arrayId12 = indexi.split("/");
			//	componentVal = sap.ui.core.Fragment.byId("Operationsfragment","matcombo").getSelectedKey();

			//componentVal = sap.ui.core.Fragment.byId("Operationsfragment","matcombo").getSelectedKey();

			var ocont = this;

			var oModel123 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);

			//	var mat = sap.ui.core.Fragment.byId("Operationsfragment","matcombo");
			var sPath = "/ComponentListSet(Component='" + aItems + "',Plant='" + this.planplt + "')";
			//debugger;
			oModel123.read(sPath, {
				//filters: [new sap.ui.model.Filter("PASSPORTID", sap.ui.model.FilterOperator.EQ, aItems)],
				success: function (oData, oResp) {
					console.log(oData);
					cc_oTable.getItems()[indexi].getCells()[3].setValue(oData.Description);
					cc_oTable.getItems()[indexi].getCells()[1].setValue(oData.OpActivity);
					cc_oTable.getItems()[indexi].getCells()[4].setValue(oData.UOM);
					cc_oTable.getItems()[indexi].getCells()[5].setValue(oData.StorageLoc);
					cc_oTable.getItems()[indexi].getCells()[7].setValue(oData.ReqQty);

				},
			});

			// var value = oEvent.getSource().getParent().getBindingContext().getPath();
			// var valueind = value.split("/");
			// var indexi1 = valueind[7];
			// console.log(indexi1);

		},
		plannplnt: function () {

			var oCont = this;

			var plant = oCont.getView().byId("combo4");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			oModel.read('/PlannerGroupF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var PlanningPlant = oData.results[0].PlanningPlant;
					console.log("PlanningPlant:" + PlanningPlant)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.PlanningPlant) == -1) {
							dups.push(el.PlanningPlant);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{PlanningPlant}",
						text: "{PlanningPlant}-{NamePlanningPlant}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					plant.setModel(oModel);
					plant.bindItems("/arr7", oItems);
				}
			});

		},
		newmaterial: function () {

			var oCont = this;

			var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

			form.setVisible(true);

			//sap.ui.core.Fragment.byId("Operationsfragment", "val1").setValue(oCont.z1);
			//alert(oCont.z1);
			sap.ui.core.Fragment.byId("Operationsfragment", "combo15").setValue(oCont.z2);
			sap.ui.core.Fragment.byId("Operationsfragment", "combo8").setValue(oCont.z3);
			sap.ui.core.Fragment.byId("Operationsfragment", "combo9").setValue(oCont.z4);
			sap.ui.core.Fragment.byId("Operationsfragment", "val3").setValue(this.planplt);
			sap.ui.core.Fragment.byId("Operationsfragment", "val4").setValue(oCont.z5);
			sap.ui.core.Fragment.byId("Operationsfragment", "combo16").setValue(oCont.z6);

		},
		purdoc: function () {
			/////Icon Tab Bar inside the fragment

			var oCont = this;

			//	oCont.mtl = this.getView().byId("combo3").setValue(plant);
			//debugger;
			var sPath = "/PurchDataSet(Plant='1000',PurGroup='100',Quom='ST')"; //('TEQ-00')
			var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log("Odata", oData)

					//oCont.z1 = oData.Quom;
					//alert(z1);
					oCont.z2 = oData.PriceUom;
					oCont.z3 = oData.MatGroup;
					oCont.z4 = oData.PurGroup;
					oCont.z5 = oData.PriceUnit;
					oCont.z6 = oData.GLAccount;

				}

			});

		},
		OK: function () {

			this.opsTable = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
			this.tabmodel = this.opsTable.getModel();
			console.log(this.tabmodel);

			////////////////////////////////////Table binding for more table for MAterial Required Table	
			array1 = [];
			array2 = [];
			array3 = [];
			array4 = [];
			array5 = [];

			var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();

			var lengthconfirmcart = rowItems.length;

			//	alert(lengthconfirmcart);

			for (var i = 0; i < rowItems.length; i++) {

				var item = rowItems[i];
				var Cells = item.getCells();

				this.Material = Cells[2].getValue();
				this.Description = Cells[3].getValue();
				this.UoM = Cells[4].getValue();
				this.Storage = Cells[5].getValue();
				this.ReqQty = Cells[7].getValue();

				var obj = {
					mat: this.Material,
					dec: this.Description,
					uom: this.UoM,
					Storage: this.Storage,
					ReqQty: this.ReqQty
				};

				array1.push(obj);
				// debugger;
			}
			oModelssd = new sap.ui.model.json.JSONModel();
			oModelssd.setData({

				moretab: array1

			});
			this.HotelBooking2.setModel(oModelssd);

			compobtn.close();

		},

		Cancel: function () {

			compobtn.close();

		},
		bindItems: function () {
			var that = this;
			var oPath = "WorkOrderHeaderSet('" + this.workOrd + "')";
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read(oPath, {

				success: function (oData, oResponse) {
					console.log(oData);

					var text = oData.ShortText;
					var lngText = oData.LongText;
					var funcloc = oData.FunctLoc;
					var plnGrp = oData.Plangroup;
					var mWrkctr = oData.MnWkCtr;
					var pmActype = oData.Pmacttype;
					var equip = oData.Equipment;
					var prio = oData.PriorityText;
					var orderType = oData.OrderType;

					var plant = oData.Plant;
					//	var startDate = oData.StartDate;
					var mydate = new Date(oData.StartDate);
					var formathours = ("0" + mydate.getHours()).slice(-2);
					var formatmin = ("0" + mydate.getMinutes()).slice(-2);
					var formatsec = ("0" + mydate.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
					var StartDate = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;

					// that.getView().byId("requiredStartBind5").setValue(Desstdate);

					// var finishDate = oData.FinishDate;
					var mydate = new Date(oData.FinishDate);
					var formathours = ("0" + mydate.getHours()).slice(-2);
					var formatmin = ("0" + mydate.getMinutes()).slice(-2);
					var formatsec = ("0" + mydate.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
					var FinishDate = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;

					var UserSt = oData.UserSt;
					//	var NotifNo = oData.NotifNo;
					that.getView().byId("objPageH").setObjectSubtitle(text);

					that.getView().byId("textAreaBind2").setValue(text);
					that.getView().byId("lngTextBind2").setValue(lngText); //funcloc
					that.getView().byId("functechBind1").setValue(funcloc);
					that.getView().byId("equipBind1").setValue(equip);
					that.getView().byId("priorityBind4").setValue(prio);
					that.getView().byId("startDateBind4").setValue(StartDate);
					that.getView().byId("finishDateBind4").setValue(FinishDate);
					that.getView().byId("userstatBind5").setValue(UserSt);
					//		that.getView().byId("NotifNo").setValue(NotifNo);

					that.getView().byId("orderTypeBind5").setValue(orderType);
					that.getView().byId("planPlantBind5").setValue(plant);

					that.getView().byId("plnGrpBind3").setValue(plnGrp);
					that.getView().byId("mWrkctrBind3").setValue(mWrkctr); //funcloc
					that.getView().byId("pmActypeBind3").setValue(pmActype);

					that.techObjHis();
				}
			});
		},
		functionalDetails: function (oEvent) {
			var sDialogName = "Dialog4";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog4(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			var oSource = oEvent.getSource();
			// debugger;
			var funLocDetails = this.getView().byId("functechBind1").getValue();
			// debugger;
			var SplitTotalFoot = funLocDetails.split("/");
			var act_valu = SplitTotalFoot[0];
			// console.log("act_valu :", act_valu)
			//var typ1e = this._oParentView.byId("prio").getValue();
			//	this.startbind();
			var sPath = "/FunctionalDataPullSet('" + act_valu + "')";

			// console.log("PP", sPath);
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					// console.log("oData", oData);

					oController.byId("funLocDesc").setText(oData.Description);
					oController.byId("funLocObjectType").setText(oData.ObjectType);
					oController.byId("funLocPlanSection").setText(oData.PlantSection);
					oController.byId("funLocLocation").setText(oData.Location);
					oController.byId("funLocRoom").setText(oData.MaintRoom);
					oController.byId("funLocSyStatus").setText(oData.PpWkctr); //SyStatus
					oController.byId("funLocUserStatus").setText(oData.ReadChnam); //UserStatus

					oModel = oController.getView().getModel();
					oModel.setProperty(sPath, oData);

				}
			});
			oDialog.open(oSource);

		},
		functionalDetails1: function (oEvent) {
			var sDialogName = "Dialog4";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog4(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			var oSource = oEvent.getSource();
			// debugger;
			var funLocDetails = this.getView().byId("functech").getSelectedKey();
			// debugger;
			var SplitTotalFoot = funLocDetails.split("/");
			var act_valu = SplitTotalFoot[0];
			// console.log("act_valu :", act_valu)
			//var typ1e = this._oParentView.byId("prio").getValue();
			//	this.startbind();
			var sPath = "/FunctionalDataPullSet('" + act_valu + "')";

			// console.log("PP", sPath);
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					// console.log("oData", oData);

					oController.byId("funLocDesc").setText(oData.Description);
					oController.byId("funLocObjectType").setText(oData.ObjectType);
					oController.byId("funLocPlanSection").setText(oData.PlantSection);
					oController.byId("funLocLocation").setText(oData.Location);
					oController.byId("funLocRoom").setText(oData.MaintRoom);
					oController.byId("funLocSyStatus").setText(oData.PpWkctr); //SyStatus
					oController.byId("funLocUserStatus").setText(oData.ReadChnam); //UserStatus

					oModel = oController.getView().getModel();
					oModel.setProperty(sPath, oData);

				}
			});
			oDialog.open(oSource);

		},

		equipmentDetails: function (oEvent) {

			var sDialogName = "Dialog5";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog5(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var source = oEvent.getParameters();
			var equipmentDetails = this.getView().byId("equipBind1").getValue();
			// debugger;
			var SplitTotalFoot = equipmentDetails.split("/");
			var act_valu = SplitTotalFoot[0];
			// console.log("act_valu :", act_valu)
			//var typ1e = this._oParentView.byId("prio").getValue();
			//	this.startbind();
			var sPath = "/EuipQuickViewSet(Equipment='" + act_valu + "')";
			// console.log("PP", sPath);
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					// console.log("oData", oData);

					oController.byId("equipDescription").setText(oData.Description);
					oController.byId("equipCat").setText(oData.Category);
					oController.byId("objectType").setText(oData.ObjType);
					oController.byId("modelNo").setText(oData.Model);
					oController.byId("manufacture").setText(oData.Manufacturer);
					// oController.byId("syStat").setText(oData.PpWkctr);
					// oController.byId("userStat").setText(oData.ReadChnam);
					oController.byId("locat").setText(oData.Location);
					oController.byId("room3").setText(oData.Room);
					oController.byId("wkCen").setText(oData.WorkCenter);

					oModel = oController.getView().getModel();
					oModel.setProperty(sPath, oData);

				}
			});

			oDialog.open(source);

		},
		equipmentDetails1: function (oEvent) {

			var sDialogName = "Dialog5";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog5(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var source = oEvent.getParameters();
			var equipmentDetails = this.getView().byId("equip").getSelectedKey();
			// debugger;
			var SplitTotalFoot = equipmentDetails.split("/");
			var act_valu = SplitTotalFoot[0];
			// console.log("act_valu :", act_valu)
			//var typ1e = this._oParentView.byId("prio").getValue();
			//	this.startbind();
			var sPath = "/EuipQuickViewSet(Equipment='" + act_valu + "')";
			// console.log("PP", sPath);
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					// console.log("oData", oData);

					oController.byId("equipDescription").setText(oData.Description);
					oController.byId("equipCat").setText(oData.Category);
					oController.byId("objectType").setText(oData.ObjType);
					oController.byId("modelNo").setText(oData.Model);
					oController.byId("manufacture").setText(oData.Manufacturer);
					// oController.byId("syStat").setText(oData.PpWkctr);
					// oController.byId("userStat").setText(oData.ReadChnam);
					oController.byId("locat").setText(oData.Location);
					oController.byId("room3").setText(oData.Room);
					oController.byId("wkCen").setText(oData.WorkCenter);

					oModel = oController.getView().getModel();
					oModel.setProperty(sPath, oData);

				}
			});

			oDialog.open(source);

		},

		_onSegmentedButtonItemPress: function (oArg) {

			var sDialogName = "Dialog3";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog3(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			oDialog.open();

		},
		_onSegmentedButtonItemPress1: function () {

			var sDialogName = "Dialog2";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];

			if (!oDialog) {
				oDialog = new Dialog2(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}
			oDialog.open();

		},

		editPress: function () {

			this.getView().byId("BIND1").setVisible(false);
			this.getView().byId("WITHOUTBIND1").setVisible(true);

			this.getView().byId("BIND2").setVisible(false);
			this.getView().byId("WITHOUTBIND2").setVisible(true);

			this.getView().byId("BIND3").setVisible(false);
			this.getView().byId("WITHOUTBIND3").setVisible(true);

			this.getView().byId("BIND4").setVisible(false);
			this.getView().byId("WITHOUTBIND4").setVisible(true);

			this.getView().byId("BIND5").setVisible(false);
			this.getView().byId("WITHOUTBIND5").setVisible(true);

			var functech = this.getView().byId("functechBind1").getValue();
			this.getView().byId("functech").setValue(functech);

			var equip = this.getView().byId("equipBind1").getValue();
			this.getView().byId("equip").setValue(equip);

			var textArea = this.getView().byId("textAreaBind2").getValue();
			this.getView().byId("textArea").setValue(textArea);

			var lngText = this.getView().byId("lngTextBind2").getValue();
			this.getView().byId("lngText").setValue(lngText);

			var plnGrp = this.getView().byId("plnGrpBind3").getValue();
			this.getView().byId("plnGrp").setValue(plnGrp);

			var mWrkctr = this.getView().byId("mWrkctrBind3").getValue();
			this.getView().byId("mWrkctr").setValue(mWrkctr);

			var pmActype = this.getView().byId("pmActypeBind3").getValue();
			this.getView().byId("pmActype").setValue(pmActype);

			var priority = this.getView().byId("priorityBind4").getValue();
			this.getView().byId("priority").setValue(priority);

			var startDate = this.getView().byId("startDateBind4").getValue();
			this.getView().byId("startDate").setValue(startDate);

			var finishDate = this.getView().byId("finishDateBind4").getValue();
			this.getView().byId("finishDate").setValue(finishDate);

			var orderType = this.getView().byId("orderTypeBind5").getValue();
			this.getView().byId("orderType").setValue(orderType);

			var planPlant = this.getView().byId("planPlantBind5").getValue();
			this.getView().byId("combo4").setValue(planPlant);

			var userstat = this.getView().byId("userstatBind5").getValue();
			this.getView().byId("userstat").setValue(userstat);

			this.getView().byId("editButton").setVisible(false);
			this.getView().byId("createButton").setVisible(false);

			this.getView().byId("saveButton").setVisible(true);
			this.getView().byId("cancelButton").setVisible(true);
			this.getView().byId("ci_fileUploader1").setEnabled(true);
			this.getView().byId("operAddButton").setEnabled(true);
			this.getView().byId("compAddButton").setEnabled(true);

		},
		busyDialog: function () {
			// var busyDialog = this.byId("BusyDialog");
			// debugger;
			busyDialog.open();

			jQuery.sap.delayedCall(3000, this, function () {
				busyDialog.close();
			});
		},
		savePress: function (oEvent) {

			var that = this;

			var functech = that.getView().byId("functech").getSelectedKey();
			var equip = that.getView().byId("equip").getValue();
			var textArea = that.getView().byId("textArea").getValue();
			var lngText = that.getView().byId("lngText").getValue();
			var plnGrp = that.getView().byId("plnGrp").getValue();

			debugger;

			var mWrk = that.getView().byId("mWrkctr").getValue();
			var SplitTotalFoot = mWrk.split(" - ");
			var mWrkctr = SplitTotalFoot[0];
			var pmActype = that.getView().byId("pmActype").getValue();
			var priority = that.getView().byId("priority").getValue();
			var startDate = that.getView().byId("startDate").getValue();
			var finishDate = that.getView().byId("finishDate").getValue();
			var plant = that.getView().byId("combo4").getSelectedKey();
			var orderType = that.getView().byId("orderType").getValue();
			var assignTask = that.getView().byId("assignTask").getValue();
			var existNotification = that.getView().byId("existNotification").getValue();
			var userstat = that.getView().byId("userstat").getValue();

			var optab = this.getView().byId("optab");
			var rowlen = optab.getItems().length;
			debugger;
			console.log(rowlen);
			for (var i = 0; i < rowlen; i++) {

				var operation = optab.getItems()[i].getCells()[0].getValue();
				var descrip = optab.getItems()[i].getCells()[1].getValue();
				var workcen = optab.getItems()[i].getCells()[2].getValue();
				var plant = optab.getItems()[i].getCells()[3].getValue();
				var controlKey = optab.getItems()[i].getCells()[4].getValue();
				var duration = optab.getItems()[i].getCells()[5].getValue();

				var obj1 = {
					Number: that.workOrd, // "821610",
					Operation: operation, // "0010",
					Description: descrip, //"Spare Part",
					WorkCenter: workcen // "MECHANIK"

				};

				operaPostItems.push(obj1);
			}

			var compoTab = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
			var count1 = compoTab.getItems().length;

			for (var i = 0; i < count1; i++) {

				var compItem = compoTab.getItems()[0].getCells()[0].getValue();
				var compOper = compoTab.getItems()[i].getCells()[1].getValue();
				var compMat = compoTab.getItems()[i].getCells()[2].getSelectedKey();

				var comDes = compoTab.getItems()[i].getCells()[3].getValue();
				var compUom = compoTab.getItems()[i].getCells()[4].getSelectedKey();
				var compStorLoc = compoTab.getItems()[i].getCells()[5].getValue();
				var compItemCat = compoTab.getItems()[i].getCells()[6].getSelectedKey();
				var compReqQty = compoTab.getItems()[i].getCells()[7].getValue();
				var compAvail = compoTab.getItems()[i].getCells()[8].getValue();

				var objz = {
					Item: compItem,
					Operation: compOper,
					Material: compMat, //mat
					Description: comDes, //desc1
					Uom: compUom,
					StorLoc: compStorLoc,
					ItemCat: compItemCat, // "L",
					ReqQty: compReqQty // "10"
				};

				//console.log("objz", objz);
				compoPostItems.push(objz);
			} // For loop Closed
			console.log("arr2", compoPostItems);

			that.busyDialog();
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Do you want to save the changes?", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Information Message",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						// notify user
						if (oAction == "YES") {

							//	var oController = this;
							that.busyDialog();
							var mess;
							var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

							var postdata = {

								Number: that.workOrd, // "821610",
								OrderType: orderType, // "PM01",
								Planplant: plant, //"1000",
								MnWkCtr: mWrkctr, // "MECHANIK",
								Plant: "1000",
								FunctLoc: functech, // "1032",
								ShortText: textArea, //"Maintanence Orders"
								CHToOperation: operaPostItems,
								// CHToComponent :compoPostItems
							};
							// debugger;
							that.busyDialog();
							console.log(postdata);
							var sPath = "/WorkOrderHeaderSet";
							debugger;
							oModel3.create(sPath, postdata,

								{
									success: function (oData, oResponse) {
										console.log(oData);
										console.log("Outout1: " + oData);
										var msg1 = oData.Message;
										var msg2 = "Work Order " + that.workOrd + " changed sucessfully.";

										// that.DMS();
										var typ = oData.Type;
										debugger;
										console.log(typ);
										// debugger;
										if (typ == "S") {

											sap.m.MessageBox.confirm(msg2, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {
														that._onCloseButtonPress();
														// that.cancelP();
														window.location.reload();
													}
												}.bind(this)
											});

										} else if (typ == "E") {

											sap.m.MessageBox.confirm("Unable to save changes for work order " + that.workOrd + ".", {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "Error",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that._onCloseButtonPress();
														window.location.reload();
													}
												}.bind(this)
											});

										} else {

											sap.m.MessageBox.confirm(msg2, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that._onCloseButtonPress();
														window.location.reload();
													}
												}.bind(this)
											});

										}

									},
									error: function (oData, oResponse) {

										sap.m.MessageBox.confirm("error", {
											icon: sap.m.MessageBox.Icon.ERROR,
											title: "Error",
											actions: [sap.m.MessageBox.Action.OK],

											onClose: function (oAction) {

												if (oAction == "OK") {
													that._onCloseButtonPress();
													// that.cancelP();
													window.location.reload();
												}
											}.bind(this)
										});

									}

								});

						} else if (oAction == "NO") {

						}
					}
				});

			/*	this.getView().byId("editButton").setVisible(true);
			this.getView().byId("createButton").setVisible(true);

			this.getView().byId("saveButton").setVisible(false);
			this.getView().byId("cancelButton").setVisible(false);
*/
		},
		createPress: function () {

			sap.m.URLHelper.redirect(
				"https://createworkorderv2-ba293bd41.dispatcher.us1.hana.ondemand.com/webapp/test/testFLPService.html?hc_reset#BUILD-prototype"
			);

		},
		cancelPress: function () {

			var oCont = this;

			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Do you want to clear info?", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Information",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						// notify user
						if (oAction == "YES") {

							oCont.getView().byId("BIND1").setVisible(true);
							oCont.getView().byId("WITHOUTBIND1").setVisible(false);

							oCont.getView().byId("BIND2").setVisible(true);
							oCont.getView().byId("WITHOUTBIND2").setVisible(false);

							oCont.getView().byId("BIND3").setVisible(true);
							oCont.getView().byId("WITHOUTBIND3").setVisible(false);

							oCont.getView().byId("BIND4").setVisible(true);
							oCont.getView().byId("WITHOUTBIND4").setVisible(false);
							oCont.getView().byId("BIND5").setVisible(true);
							oCont.getView().byId("WITHOUTBIND5").setVisible(false);

							oCont.getView().byId("editButton").setVisible(true);
							oCont.getView().byId("createButton").setVisible(true);

							oCont.getView().byId("saveButton").setVisible(false);
							oCont.getView().byId("cancelButton").setVisible(false);

							oCont.getView().byId("ci_fileUploader1").setEnabled(false);
							oCont.getView().byId("operAddButton").setEnabled(false);
							oCont.getView().byId("compAddButton").setEnabled(false);

						} else if (oAction == "NO") {

						}
					}
				});

		},

		operationsBind: function () {
			/*			var optable = this.getView().byId("optab");
						var oCont = this;
						this.opsArr = [];

						var sPath = "WOperationSet?$filter=Number eq'" + this.workOrd + "'";

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read(sPath, {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("Data Ops", oData);

								//	oCont.getView().getModel("oGlobalModel").setProperty("/matdata", oData);

								oModel = new sap.ui.model.json.JSONModel(oData);

								optable.setModel(oModel);

								console.log("list", optable);

							}
						});*/

			// var oController = this;
			var arr31 = [];
			var taskTable = this.getView().byId("optab");
			var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
			oModelJson = new sap.ui.model.json.JSONModel();
			var sPath = "/WOperationSet";
			// debugger;
			oModel.read(sPath, {
				filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, this.workOrd)], //"K1-B01-1")],

				success: function (oData, oResponse) {
					var count = oData.results.length;

					for (var i = 0; i < count; i++) {
						debugger;

						var operation = oData.results[i].Operation;
						console.log("TaskKey", operation);

						var description = oData.results[i].Description;
						var workcenter = oData.results[i].WorkCenter;

						var obj1 = {
							opera: operation,
							descrp: description,
							workcen: workcenter

						};

						arr31.push(obj1);
						console.log("arr4", arr31)
							//	arr5 = {
							//		"arr5": arr4
							//	};

						oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							arr32: arr31

						});
					}
					var that = this;
					taskTable.setModel(oModelccd);
					var titems1 = new sap.m.ColumnListItem({
						type: "Navigation",
						press: function (oArg) {
							that._onRowPress(oArg);
						},
						cells: [
							new sap.m.Input({
								value: "{opera}"
							}),
							new sap.m.Input({
								value: "{descrp}"
							}),
							new sap.m.Input({
								value: "{workcen}"
							}),
							new sap.m.Input({
								value: ""
							}),
							new sap.m.Input({
								value: ""
							}),
							new sap.m.Input({
								value: ""
							}),
							new sap.m.Button({
								icon: "sap-icon://add-equipment",
								text: "",
								type: sap.m.ButtonType.Transparent,
								press: function (oArg) {
									that._onSegmentedButtonItemPress(oArg);
								}
							}),
							new sap.m.Button({
								icon: "sap-icon://overview-chart",
								text: "",
								type: sap.m.ButtonType.Transparent,
								press: function (oArg) {
									that._onSegmentedButtonItemPress1(oArg);
								}
							})

						]
					});

					taskTable.bindItems("/arr32", titems1);

				},

				error: function (oData, oResponse) {

				}
			});
			console.log("array 11", arr32)
		},

		/*					debugger;
							console.log("Function oModel:", oData);
							oModelJson.setData(oData);
							var oTemplate = new sap.m.ColumnListItem({

								cells: [
									new sap.m.Input({
										value: "{Operation}"

									}),
									new sap.m.Input({
										value: "{Description}"
									}),

									new sap.m.Input({
										value: "{WorkCenter}"
									}),
									new sap.m.Input({
										value: ""
									}),

									new sap.m.Input({
										value: ""
									}),
									new sap.m.Input({
										value: ""
									}),
									new sap.m.Button({
										text: "",
										icon: "sap-icon://add-equipment",
										press: "_onSegmentedButtonItemPress"
									}),
									new sap.m.SegmentedButtonItem({
										text: "",
										icon: "sap-icon://overview-chart",
										press: "_onSegmentedButtonItemPress1"
									})

								]
							});
							optab.setModel(oModelJson);
							optab.bindItems("/results", oTemplate);

						}

					});

			},*/

		componentsBind: function () {
			/*var comptable = this.getView().byId("compsTab");
			var oCont = this;
			this.opsArr = [];

			var sPath = "WComponentSet?$filter=Number eq'" + this.workOrd + "'";

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read(sPath, {
				//	filters: ofilters,
				success: function (oData, oResponse) {
					var leng = oData.results.length;
					console.log("Data Compes", oData);

					oCont.getView().getModel("oGlobalModel").setProperty("/matdata", oData);

					oModel = new sap.ui.model.json.JSONModel(oData);

					comptable.setModel(oModel);

					console.log("list", comptable);

				}
			});*/

			var arr41 = [];
			var compsTable = this.getView().byId("compsTab");
			var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
			oModelJson = new sap.ui.model.json.JSONModel();
			var sPath = "/WComponentSet";
			// debugger;
			oModel.read(sPath, {
				filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, this.workOrd)], //"K1-B01-1")],

				success: function (oData, oResponse) {
					var Count = oData.results.length;

					for (var i = 0; i < Count; i++) {
						debugger;

						var operation = oData.results[i].Operation;
						console.log("TaskKey", operation);

						var MatDesc = oData.results[i].MatDesc;
						var ItemCat = oData.results[i].ItemCat;
						var ReqQty = oData.results[i].ReqQty;
						var uom = oData.results[i].uom;

						var obj1 = {
							opera: operation,
							MatDesc: MatDesc,
							ItemCat: ItemCat,
							ReqQty: ReqQty,
							uom: uom

						};

						arr41.push(obj1);
						console.log("arr4", arr41)
							//	arr5 = {
							//		"arr5": arr4
							//	};

						oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							arr42: arr41

						});
					}
					var that = this;
					compsTable.setModel(oModelccd);
					var titems1 = new sap.m.ColumnListItem({

						cells: [new sap.m.Text({
								text: "{itemKey}"
							}), new sap.m.Text({
								text: "{dCodegrp}"
							}), new sap.m.Text({
								text: "{dlCode}"
							}), new sap.m.Text({
								text: "{dlCodegrp}"
							})

						]
					});

					compsTable.bindItems("/arr42", titems1);

				},

				error: function (oData, oResponse) {

				}
			});
			console.log("array 11", arr32)

		},

		techObjHis: function () {
			// debugger;
			// var oController = this;
			var funLoc1 = this.getView().byId("functechBind1").getValue();
			// alert(funLoc1);
			var table = this.getView().byId("objHisTable");
			var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
			oModelJson = new sap.ui.model.json.JSONModel();
			var sPath = "/ManageNotifTechnicalObjHistorySet";
			// debugger;
			oModel.read(sPath, {
				filters: [new sap.ui.model.Filter("FunctionLoc", sap.ui.model.FilterOperator.EQ, "K1-B01-1")], // funLoc1)],
				success: function (oData, oResponse) {
					// console.log("Function oModel:", oData);
					oModelJson.setData(oData);
					var oTemplate = new sap.m.ColumnListItem({

						cells: [
							new sap.m.ObjectIdentifier({
								title: "{NotifNo}"

							}),
							/*new sap.m.Text({
								text: "{path:'NotifDate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
							}),*/
							new sap.m.Text({
								text: "{OrderNo}"
							}),

							new sap.m.Text({
								text: "{NotifDate}"
							}),
							new sap.m.Text({
								text: "{Prioritytext}"
							}),

							new sap.m.Text({
								text: "{Description}"
							}), new sap.m.Text({
								text: "{FunctionLoc}"
							}), new sap.m.Text({
								text: "{Equipment}"
							})

						]
					});
					table.setModel(oModelJson);
					table.bindItems("/results", oTemplate);

				}

			});

		},
		render: function () {
			// debugger;
			var tableLength = this.getView().byId("objHisTable");
			var oFirstItem = tableLength.getItems().length;

			// console.log("oFirstItem :", oFirstItem1);
			this.byId("counttable").setText("Items (" + oFirstItem + ")");

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
				var oUploadCollection = this.byId("UploadCollection");

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
			var oFileuploader = this.getView().byId("ci_fileUploader1");
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
		_onRowPress: function (oArg) {

			more.open();

		},

		/*	_onRowPress: function (oEvent) {

				var sDialogName = "Dialog1";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];
				if (!oDialog) {
					oDialog = new Dialog1(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}

				var context = oEvent.getSource().getBindingContext();
				oDialog._oControl.setBindingContext(context);

				oDialog.open();

			},*/
		_onRowPress1: function (oEvent) {

			var sDialogName = "";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		},
		PlannerGrp: function () {

			var planGrpCombo = this.getView().byId("plnGrp");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
			oModel.read('/PlannerGroupF4Set', {

				success: function (oData, oResponse) {
					var PlannerGroup = oData.results[0].PlannerGroup;
					console.log("PlannerGroup:" + PlannerGroup)
					var dups = [];
					var arr = oData.results.filter(function (el) {
						if (dups.indexOf(el.PlannerGroup) == -1) {
							dups.push(el.PlannerGroup);
							return true;
						}
						return false;
					});
					var arr6 = {
						"arr6": arr
					};
					console.log("arr6:" + arr6);
					var oItems = new sap.ui.core.ListItem({
						key: "{PlannerGroup}",
						text: "{PlannerGroup} - {NamePlannerGroup}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr6);
					planGrpCombo.setModel(oModel);
					planGrpCombo.bindItems("/arr6", oItems);
				}
			});

		},
		workCenter: function () {

			var workCenter = this.getView().byId("mWrkctr");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
			oModel.read('/WorkCenterF4Set', {

				success: function (oData, oResponse) {
					var Key = oData.results[0].Key;
					console.log("Key:" + Key)
					var dups = [];
					var arr = oData.results.filter(function (el) {
						if (dups.indexOf(el.Key) == -1) {
							dups.push(el.Key);
							return true;
						}
						return false;
					});
					var arr6 = {
						"arr6": arr
					};
					console.log("arr6:" + arr6);
					var oItems = new sap.ui.core.ListItem({
						key: "{Key}",
						text: "{Key} - {Text}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr6);
					oModel.setSizeLimit(1500);
					workCenter.setModel(oModel);
					workCenter.bindItems("/arr6", oItems);
				}
			});

		},
		existNotification: function () {

			var existNotification = this.getView().byId("existNotification");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01', true);
			oModel.read('/NotificationF4Set', {

				success: function (oData, oResponse) {
					var NotificationNo = oData.results[0].NotificationNo;
					console.log("NotificationNo:" + NotificationNo)
					var dups = [];
					var arr = oData.results.filter(function (el) {
						if (dups.indexOf(el.NotificationNo) == -1) {
							dups.push(el.NotificationNo);
							return true;
						}
						return false;
					});
					var arr6 = {
						"arr6": arr
					};
					console.log("arr6:" + arr6);
					var oItems = new sap.ui.core.ListItem({
						key: "{NotificationNo}",
						text: "{NotificationNo} - {Description}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr6);
					existNotification.setModel(oModel);
					existNotification.bindItems("/arr6", oItems);
				}
			});

		},
		functionLocation: function () {

			var functionLocation = this.getView().byId("functech");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
			oModel.read('/FunctionalLocF4Set', {

				success: function (oData, oResponse) {
					var FuncLoc = oData.results[0].FuncLoc;
					console.log("FuncLoc:" + FuncLoc)
					var dups = [];
					var arr = oData.results.filter(function (el) {
						if (dups.indexOf(el.FuncLoc) == -1) {
							dups.push(el.FuncLoc);
							return true;
						}
						return false;
					});
					var arr6 = {
						"arr6": arr
					};
					console.log("arr6:" + arr6);
					var oItems = new sap.ui.core.ListItem({
						key: "{FuncLoc}",
						text: "{FuncLoc} - {FuncText}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr6);
					oModel.setSizeLimit(8000);
					functionLocation.setModel(oModel);
					functionLocation.bindItems("/arr6", oItems);
				}
			});

		},
		equipment: function () {

			var equipment = this.getView().byId("equip");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
			oModel.read('/EquipmentF4Set', {

				success: function (oData, oResponse) {
					var EquipmentNo = oData.results[0].EquipmentNo;
					console.log("FuncLoc:" + EquipmentNo)
					var dups = [];
					var arr = oData.results.filter(function (el) {
						if (dups.indexOf(el.EquipmentNo) == -1) {
							dups.push(el.EquipmentNo);
							return true;
						}
						return false;
					});
					var arr6 = {
						"arr6": arr
					};
					console.log("arr6:" + arr6);
					var oItems = new sap.ui.core.ListItem({
						key: "{EquipmentNo}",
						text: "{EquipmentNo} - {Text}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr6);
					oModel.setSizeLimit(8000);
					equipment.setModel(oModel);
					equipment.bindItems("/arr6", oItems);
				}
			});

		},
		tasklist: function () {

			var oCont = this;

			var assignTask = oCont.getView().byId("assignTask");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/TaskListSet', {
				//	filters: ofilters,
				success: function (oData, oResponse) {
					var leng = oData.results.length;
					console.log("length", leng);
					// debugger;
					var TaskType = oData.results[0].TaskType;
					var TaskText = oData.results[0].TaskText;

					console.log("TaskType:" + TaskType)
					console.log("TaskText:" + TaskText)
					var dups = [];
					var arr3 = oData.results.filter(function (el) {
						if (dups.indexOf(el.TaskType) == -1) {
							dups.push(el.TaskType);
							return true;
						} else if (dups.indexOf(el.TaskText) == -1) {
							dups.push(el.TaskText);
							return true;
						}
						return false;
					});
					var arr11 = {
						"arr11": arr3
					};
					console.log("arr11:" + arr11);
					var oItems = new sap.ui.core.ListItem({
						key: "{TaskType}",
						text: "{TaskType}-{TaskText}"
					});

					var oModel = new sap.ui.model.json.JSONModel(arr11);
					oModel.setSizeLimit(5300);
					assignTask.setModel(oModel);
					assignTask.bindItems("/arr11", oItems);

				}

			});

		},
		setuser: function () {

			var oCont = this;

			var usersta = oCont.getView().byId("userstat");
			//console.log(workloc);

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/UserStatusSet', {
				//	filters: ofilters,
				success: function (oData, oResponse) {
					var leng = oData.results.length;
					console.log("length", leng);
					// debugger;
					var Status = oData.results[0].Status;
					var Text = oData.results[0].Text;

					console.log("Status:" + Status)
					console.log("Description:" + Text)
					var dups = [];
					var arr3 = oData.results.filter(function (el) {
						if (dups.indexOf(el.Status) == -1) {
							dups.push(el.Status);
							return true;
						} else if (dups.indexOf(el.Text) == -1) {
							dups.push(el.Text);
							return true;
						}
						return false;
					});
					var arr11 = {
						"arr11": arr3
					};
					console.log("arr11:" + arr11);
					var oItems = new sap.ui.core.ListItem({
						key: "{Status}",
						text: "{Status}-{StatusText}"
					});

					var oModel = new sap.ui.model.json.JSONModel(arr11);
					oModel.setSizeLimit(5300);
					usersta.setModel(oModel);
					usersta.bindItems("/arr11", oItems);

				}

			});

		},
		fraguom: function () {

			//var oCont = this;

			var unit = sap.ui.core.Fragment.byId("Operationsfragment", "combo17");
			//alert(unit);

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/UOMF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {

					var unitt = oData.results.length;
					for (var i = 0; i < unitt; i++) {
						var UOM = oData.results[i].UOM;
						console.log("UOM", UOM);
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.UOM) == -1) {
								dups.push(el.UOM);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};
					}
					//	debugger;
					console.log("arr6:", arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{Text}",
						text: "{Text}"

						// key: "{UOM}",
						// text: "{UOM}-{Text}"

					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					oModel.setSizeLimit(900);
					unit.setModel(oModel);
					unit.bindItems("/arr7", oItems);
				}
			});

		},

		fragItmcat: function () {

			var oCont = this;

			var icat = sap.ui.core.Fragment.byId("Operationsfragment", "combo19");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/ItemCategoryF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var ItemCat = oData.results[0].ItemCat;
					console.log("ItemCat" + ItemCat)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.ItemCat) == -1) {
							dups.push(el.ItemCat);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{ItemCat}",
						text: "{ItemCat}-{ItemCatText}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					icat.setModel(oModel);
					icat.bindItems("/arr7", oItems);
				}
			});

		},
		fragCurr: function () {

			var oCont = this;

			var curr = sap.ui.core.Fragment.byId("Operationsfragment", "combo15");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/CurrencyF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var Currency = oData.results[0].Currency;
					console.log("Currency" + Currency)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.Currency) == -1) {
							dups.push(el.Currency);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{Currency}",
						text: "{Currency}-{CurrencyText}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					curr.setModel(oModel);
					curr.bindItems("/arr7", oItems);
				}
			});
		},
		fragmatgrp: function () {

			var oCont = this;

			var matgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo8");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/MaterialGroupF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var MaterialGroup = oData.results[0].MaterialGroup;
					console.log("MaterialGroup:" + MaterialGroup)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.MaterialGroup) == -1) {
							dups.push(el.MaterialGroup);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{MaterialGroup}",
						text: "{MaterialGroup}-{MatGrpText}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					matgrp.setModel(oModel);
					matgrp.bindItems("/arr7", oItems);
				}
			});

		},

		fragpurgrp: function () {

			var oCont = this;

			var purgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo9");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/POGrpSet', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var PurGrp = oData.results[0].PurGrp;
					console.log("PurGrp" + PurGrp)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.PurGrp) == -1) {
							dups.push(el.PurGrp);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{PurGrp}",
						text: "{PurGrp}-{PurGrpDesc}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					purgrp.setModel(oModel);
					purgrp.bindItems("/arr7", oItems);
				}
			});

		},

		fragvend: function () {

			var oCont = this;

			var vend = sap.ui.core.Fragment.byId("Operationsfragment", "combo10");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/VendorF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var Vendor = oData.results[0].Vendor;
					console.log("Vendor" + Vendor)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.Vendor) == -1) {
							dups.push(el.Vendor);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{Vendor}",
						text: "{Vendor}-{Name}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					vend.setModel(oModel);
					vend.bindItems("/arr7", oItems);
				}
			});

		},

		fragagree: function () {

			var oCont = this;

			var agree = sap.ui.core.Fragment.byId("Operationsfragment", "combo12");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/AgreementF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var DocumentNo = oData.results[0].DocumentNo;
					console.log("DocumentNo" + DocumentNo)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.DocumentNo) == -1) {
							dups.push(el.DocumentNo);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{DocumentNo}",
						text: "{DocumentNo}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					agree.setModel(oModel);
					agree.bindItems("/arr7", oItems);
				}
			});
		},

		fragItem: function () {

			var oCont = this;

			var item = sap.ui.core.Fragment.byId("Operationsfragment", "combo13");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/AgreementF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var Item = oData.results[0].Item;
					console.log("Item" + Item)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.Item) == -1) {
							dups.push(el.Item);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{Item}",
						text: "{Item}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					item.setModel(oModel);
					item.bindItems("/arr7", oItems);
				}
			});

		},

		fragacc: function () {

			var oCont = this;

			var acc = sap.ui.core.Fragment.byId("Operationsfragment", "combo16");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/GLAccountF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var AccNo = oData.results[0].AccNo;
					console.log("AccNo" + AccNo)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.AccNo) == -1) {
							dups.push(el.AccNo);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{AccNo}",
						text: "{AccNo}-{AccGroup}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					acc.setModel(oModel);
					acc.bindItems("/arr7", oItems);
				}
			});

		},

		fraginfo: function () {

			var oCont = this;

			var info = sap.ui.core.Fragment.byId("Operationsfragment", "combo14");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			oModel.read('/InfoRecordF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var DocNo = oData.results[0].DocNo;
					console.log("DocNo" + DocNo)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.DocNo) == -1) {
							dups.push(el.DocNo);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{DocNo}",
						text: "{DocNo}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					info.setModel(oModel);
					info.bindItems("/arr7", oItems);
				}
			});
		},
		moreok: function () {

			more.close();

		},
		moreclose: function () {

			more.close();

		},

		onInit: function () {

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRouteMatched(this.handleRouteMatched, this);
			this.oFclModel = this.getOwnerComponent().getModel("FclRouter");
			this.oFclModel.setProperty('/targetAggregation', 'midColumnPages');
			this.oFclModel.setProperty('/expandIcon', {});
			this.oView.setModel(new sap.ui.model.json.JSONModel({}), 'fclButton');
			this.ci_att1 = [];

			more = sap.ui.xmlfragment("morefragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.more", this);
			this.getView().addDependent(more);
			compobtn = sap.ui.xmlfragment("Operationsfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.Operations", this);
			this.getView().addDependent(compobtn);
			busyDialog = sap.ui.xmlfragment("busyDialogfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.busyDialog",
				this);
			this.getView().addDependent(busyDialog);
			// this.techObjHis();
			this.PlannerGrp();
			this.workCenter();
			this.existNotification();
			this.functionLocation();
			this.equipment();
			this.plannplnt();
			this.tasklist();
			this.setuser();

			this.fraguom();
			this.fragItmcat();
			this.fragCurr();
			this.fragmatgrp();
			this.fragpurgrp();
			this.fragvend();
			this.fragagree();
			this.fragItem();
			this.fraginfo();
			this.fragacc();

			this.purdoc();
		}
	});
}, /* bExport= */ true);