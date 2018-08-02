function popUser(){
	var user = $.request.parameters.get("username");
	var dest = $.net.http.readDestination('lessons.00.services', "user");
	
	var client = new $.net.http.Client();
	var req = new $.web.WebRequest($.net.http.GET, "");
	client.request(req, dest);
	
	var response = client.getResponse();
	
	var body;
	if (response.body){
		body = response.body.asString();
	}
	$.response.status = $.net.http.OK; //response.status;
	$.response.contentType = "application/json";
	
	if (response.status !== $.net.http.OK){
		var error = body;
		$.response.setBody(error);
	} else {
		var context = JSON.parse(body);
		$.response.setBody(context);
	}
}
popUser();