var express = require('express');
var app = express();
var url = require('url');

app.get('/', function (req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	var stationid = 8571216;
	var limit = 1;
	var apiResponse = getsbbdata(stationid, limit);
	
	res.send(apiResponse);
})

function getsbbdata(stationid, limit) {
	var requrl = 'http://transport.opendata.ch/v1/stationboard?id=' + stationid + '&limit=' + limit;
	var connectionData;
	connectionData = requrl;
	return connectionData;
}

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})