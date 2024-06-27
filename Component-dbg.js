sap.ui.define([
	"sap/ui/core/UIComponent",
	'sap/ui/model/json/JSONModel',
	'sap/f/library',
	"sap/ui/Device",
	"./Util/Constants",
	"./Util/OdataHelper",
	"sap/m/MessageToast",
	"FIM/COSTCENTER/CostCenter/model/models"
], function (UIComponent, JSONModel, fioriLibrary, Device, Constants, ODataHelper, MessageToast, models) {
	"use strict";

	return UIComponent.extend("FIM.COSTCENTER.CostCenter.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			var oModel = new JSONModel();
			this.setModel(oModel, "LayoutModel");
			// enable routing
			var oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
		},
		_onBeforeRouteMatched: function (oEvent) {
			var oModel = this.getModel("LayoutModel"),
				sLayout = oEvent.getParameters().arguments.layout;
			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}
			oModel.setProperty("/layout", sLayout);
		}
	});
});