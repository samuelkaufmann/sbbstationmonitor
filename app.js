var express = require('express');
var app = express();
app.set('view engine','ejs');

//ROUTES UI
app.get('', function (req, res) {
	var resData;
	
	res.render('ui/index', resData);
})
//ROUTES API
app.get('/api/stationmonitor/:stationid/:limit', function (req, res) {
	var stationid = 8571216;
	var limit = 1;
	stationid = req.params.stationid;
	limit = req.params.limit;
	//var apiResponse = getsbbdata(stationid, limit);
	res.render('api/index', {person: stationid + limit});
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