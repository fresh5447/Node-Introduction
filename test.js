var moment = require('moment');

var date = new Date();
date.setDate(date.getDate() - 10);

var formattedDate = moment(date).format('MMMM Do YYYY');


console.log(formattedDate);
