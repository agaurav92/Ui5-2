function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZFI_FIM_COST_CENTER_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}