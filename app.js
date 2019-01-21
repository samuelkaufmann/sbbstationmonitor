var express = require('express');
var app = express();
app.use('/static',express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/:name', function (req, res) {
	var stationid = 8571216;
	var limit = 1;
	//var apiResponse = getsbbdata(stationid, limit);
	res.render('index', {person: req.params.name});
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