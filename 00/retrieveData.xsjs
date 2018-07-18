$.response.contentType = "text/html";
var output = "Hello world! <br><br>";

var conn = $.db.getConnection();
var stmt = conn.prepareStatement("select * from dummy");
var rs = stmt.executeQuery();
if (!rs.next()){
	$.response.setBody("Fail");
} else {
	output += "sql resp: " + rs.getString(1);
}
rs.close();
stmt.close();
conn.close();

$.response.setBody(output);