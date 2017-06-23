var moment = require('moment');

function dateCreator(days) {
  var date = new Date();
  date.setDate(date.getDate() - days);

  var formattedDate = moment(date).format('MMMM Do YYYY');


  return formattedDate
}

module.exports = dateCreator;
