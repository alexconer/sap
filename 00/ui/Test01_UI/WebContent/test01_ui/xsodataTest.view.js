sap.ui.jsview("test01_ui.xsodataTest", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test01_ui.xsodataTest
	*/ 
	getControllerName : function() {
		return "test01_ui.xsodataTest";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test01_ui.xsodataTest
	*/ 
	createContent : function(oController) {
		var oModel = new sap.ui.model.odata.ODataModel("../../../services/businessPartners.xsodata", false);
		
		var arrayHeaders = new Array();
		var oControl;
		oTable = new sap.ui.table.Table("test", {tableId: "tabID", visibleRowCount: 10});
		oTable.setTitle("Business Partners");
		
		// add columns
		oControl = new sap.ui.commons.TextField().bindProperty("value", "PARTNERID");
		oTable.addColumn(new sap.ui.table.Column({label:new sap.ui.commons.Label({text:"Partner ID"}), template: oControl}));
		
		oTable.setModel(oModel);
		oTable.bindRows("/BusinessPartners");
		
		return oTable;
	}

});
