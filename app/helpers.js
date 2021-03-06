export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function toReturn(stake, price) {
    return ((Number(stake) * eval(price)) + Number(stake)).toFixed(2)
}

export function showBetTime() {
    const date = new Date();
    // gets the hours
    var hours = date.getHours();
    // gets the day
    var days = date.getDay();
    // gets the month
    var minutes = date.getMinutes();
    // gets AM/PM
    var ampm = hours >= 12
        ? 'pm'
        : 'am';
    // converts hours to 12 hour instead of 24 hour
    hours = hours % 12;
    // converts 0 (midnight) to 12
    hours = hours
        ? hours
        : 12; // the hour '0' should be '12'
    // converts minutes to have leading 0
    minutes = minutes < 10
        ? '0' + minutes
        : minutes;
    // the time string
    var time = hours + ':' + minutes + ' ' + ampm;
    // gets the match for the date string we want
    var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
    //the result
    return match[0] + ' ' + time;

    return betTime;
}

export function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = ('0' + a.getHours()).slice(-2);
  var min = ('0' + a.getMinutes()).slice(-2);
  var sec = ('0' + a.getSeconds()).slice(-2);
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}
