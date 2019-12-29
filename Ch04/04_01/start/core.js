const path = require('path');
var util = require('util'); //has a time stamp(log)
var v8 = require('v8'); //info about memory

util.log(path.basename(__filename));

var dirUploads = path.join(__filename, 'htdocs','files','upload_images');

util.log(dirUploads);
util.log(v8.getHeapStatistics());