var express = require('express');
var app = express();

var tools = require('./tools');

app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {

  tools.test('venus', function(status) {

    console.log('status: ' + status);
    var venusStatus = status;
    console.log('venusStatus: ' + status);

    var machines = [
      { name: 'Venus', status: venusStatus }
    //  { name: 'Mars', status: marsStatus }
    //  { name: 'Martini', drunkness: 5 },
    //  { name: 'Scotch', drunkness: 10 }
    ];

    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
      machines: machines,
      tagline: tagline
    });

    
  });

    //console.log('status: ' + venusStatus);

 // var drinks = [
 //   { name: 'Venus', status: venusStatus },
 //   { name: 'Martini', drunkness: 5 },
 //   { name: 'Scotch', drunkness: 10 }
 // ];

 
});

// about page 
app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
