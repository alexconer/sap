sap.ui.jsview("test01_ui.HelloWorld", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test01_ui.HelloWorld
	*/ 
	getControllerName : function() {
		return "test01_ui.HelloWorld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test01_ui.HelloWorld
	*/ 
	createContent : function(oController) {
		var myBtn = new sap.ui.commons.Button("btn");
		myBtn.setText("Push me!");
		myBtn.attachPress(function(){$("#btn").fadeOut();});
		return myBtn;
	}

});
