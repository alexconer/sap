sap.ui.controller("test01_ui.xsjsTest", {

	onLiveChangeV1: function(e, v){
		var url = '../../../services/Example1.xsjs?cmd=multiply' + '&num1=' + escape(e.getParameters().liveValue) + '&num2=' + escape(v.getValue());
		jQuery.ajax({
			url: url,
			method: 'GET',
			dataType: 'json',
			success: this.onComplete,
			error: this.onError
		});
	},
	onLiveChangeV2: function(e, v){
		var url = '../../../services/Example1.xsjs?cmd=multiply' + '&num1=' + escape(v.getValue()) + '&num2=' + escape(e.getParameters().liveValue);
		jQuery.ajax({
			url: url,
			method: 'GET',
			dataType: 'json',
			success: this.onComplete,
			error: this.onError
		});
	},
	onComplete: function(text){
		var res = sap.ui.getCore().byId("result");
		if (text==undefined){
			res.setText(0);
		} else {
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var num = sap.ui.core.format.NumberFormat.getIntegerInstance({
				maxFractionDigits: 12,
				minFractionDigits: 0,
				groupingEnabled: true
			});
			res.setText(num.format(text));
		}
	},
	onError: function(xhr, status, err){
		sap.ui.commons.MessageBox.show(xhr.responseText, "ERROR", "Service call error");
		return;
	}

});