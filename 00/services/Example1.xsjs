//**** Example for basic REQUEST RESPONSE handling
$.import("sap.hana.democontent.epm.services", "messages");
var MESSAGES = $.sap.hana.democontent.epm.services.messages; // упрощаем доступ к импортированному классу

function mult(){
	var num1 = $.request.parameters.get('num1');
	var num2 = $.request.parameters.get('num2');
	
	var res = num1*num2;
	
	$.response.setBody(res.toString());
	$.response.status = $.net.http.OK;
}

function downloadExcel(){
	var body = '';
	
	try{
		var query = 'select \"PARTNERID\", \"PARTNERROLE\", \"EMAILADDRESS\", \"COMPANYNAME\" ' +
				    '  from \"SAP_HANA_DEMO\".\"sap.hana.democontent.epm.data::MD.BusinessPartner\"';

		$.trace.debug(query);
		var conn = $.db.getConnection();
		var pstm = conn.prepareStatement(query);
		var rs = pstm.executeQuery();
		
		body = 'PartnerId' + '\t' + 'PartnerRole' + '\t' + 'EmailAddress' + '\t' + 'CompanyName' + '\n';
		
		while (rs.next()){
			body += rs.getNString(1) + '\t' + rs.getNString(2) + '\t' + rs.getNString(3) + '\t' + rs.getNString(4) + '\n';
		}
		
		rs.close();
		pstm.close();
		conn.close();
		
	} catch (e){
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		$.responce.setBody('e.message');
		return;
	}
	
	$.response.setBody(body);
	$.response.contentType = 'application/vnd.ms-excel; charset=utf-16le';
	$.response.headers.set('Content-Disposition', 'attachment; filename=Excel.xls');
	$.response.headers.set('access-control-allow-origin', '*');
	$.response.status = $.net.http.OK;
}

var aCmd = $.request.parameters.get('cmd');
switch(aCmd){
	case "multiply":
		mult();
	break;
	case "excel":
		downloadExcel();
	break;
	default:
		$.response.setBody("Invalid command " + aCmd);
		//$.responce.setBody(MESSAGES.getMessage('SEPM_ADMIN', '002', aCmd)); // SEPM_TEST 001
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;	
}