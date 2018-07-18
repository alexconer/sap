//**** Example for basic REQUEST RESPONSE handling
function mult(){
	var body = '';
	var num1 = $.request.parameters.get('num1');
	var num2 = $.request.parameters.get('num2');
	
	var res = num1*num2;
	
	$.response.setBody(res.toString());
	$.response.status = $.net.http.OK;
}

var aCmd = $.request.parameters.get('cmd');
switch(aCmd){
	case "multiply":
		mult();
	break;
	default:
		$.response.setBody("Invalid command " + aCmd);
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;	
}