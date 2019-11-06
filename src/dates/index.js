// import moment here; use this package in each function

var moment = require("moment");
moment().format();
const today = () => {
  let date = moment();
  let day = date.day();
  return moment.weekdays(day);
};

const calendar = () => {
  return moment().format("MMM DD, YYYY");
};

const currentTime = () => {
  return moment().format("hh:mm:ss A");
};

module.exports = {
  today,
  calendar,
  currentTime
};
