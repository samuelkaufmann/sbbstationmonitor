var express = require('express');
var syncClient = require('sync-rest-client');
var app = express();
app.set('view engine','ejs');

//ROUTES UI
app.get('', function (req, res) {
	var resData;
	
	res.render('ui/index', resData);
})
//ROUTES API
app.get('/api/stationmonitor/:stationid/:limit', function (req, res) {
	//var stationid = 8571216;
	//var limit = 1;
	stationid = req.params.stationid;
	limit = req.params.limit;
	var url = 'http://transport.opendata.ch/v1/stationboard?id=' + stationid + '&limit=' + limit;
	var result = syncClient.get(url);
	var body = result.body;
	var stationname = body.station.name;
	var stops = body.stationboard;
	var departureTime;
	var departureTo;
	var departureDelay;
	var departures;
	for(var x = 0;x<stops.length;x++) {
		departureTime = stops[x].stop.departureTimestamp,
		departureTo = stops[x].to,
		departureDelay = stops[x].stop.delay
		var timestamp = departureTime;
		var date = new Date(timestamp * 1000);
		departureTime = date.getHours() + ':' + date.getMinutes();
		var departures = {
			departureTime: departureTime,
			to: departureTo,
			delay: departureDelay
		}
	}
	var datas = {
		stationsname: stationname,
		departures: departures
	}
	res.send(datas);
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})