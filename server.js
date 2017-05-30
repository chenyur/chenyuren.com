'use strict';

const express = require('express');

// Constants
const PORT = 8085;

// App
const app = express();

var currentImageIndex = 0
var imageIndexes = ['0379', '0674', '0817', '0870', '0963', '0977', '1178', '1204', '1211', '1212', '1388', '1468']

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/randomBG', function (req, res) {
	currentImageIndex++
	if(currentImageIndex >= imageIndexes.length)
	{
		currentImageIndex = 0
	}
  res.send(imageIndexes[currentImageIndex]);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

