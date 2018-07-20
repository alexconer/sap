sap.ui.jsview("test01_ui.xsjsTest", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test01_ui.xsjsTest
	*/ 
	getControllerName : function() {
		return "test01_ui.xsjsTest";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test01_ui.xsjsTest
	*/ 
	createContent : function(oController) {
		var multiplyPanel = new sap.ui.commons.Panel().setText("XS Service Test");
		multiplyPanel.setAreaDesign(sap.ui.commons.enums.AreaDesign.Fill);
		multiplyPanel.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		
		var layout = new sap.ui.commons.layout.MatrixLayout({width: "auto"});
		multiplyPanel.addContent(layout);
		
		var val1 = new sap.ui.commons.TextField("val1");
		var val2 = new sap.ui.commons.TextField("val2");
		var res = new sap.ui.commons.TextView("result");
		var eq = new sap.ui.commons.TextView("equal");
		var mult = new sap.ui.commons.TextView("mult");
		
		val1.attachEvent("liveChange", function(e){
			oController.onLiveChangeV1(e, val2);
		});
		val2.attachEvent("liveChange", function(e){
			oController.onLiveChangeV2(e, val1);
		});
		layout.createRow(val1, mult, val2, eq, res);
		return multiplyPanel;
	}

});
