/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const arr = date.split('-')
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const day = parseInt(arr[2])
  const month = parseInt(arr[1])
  const year = parseInt(arr[0])
  let result = 0
  for (var i = month-2 ; i >= 0; i--) {
    result += months[i]
  }
  const isLeap = year => {
    if (Math.floor(year/4) === year/4) {
      if (Math.floor(year/100) == year/100) {
        if (Math.floor(year/400) == year/400) {
        return true
      }
        return false
      }
      return true
  }
  }
  const shouldAddForLeap = isLeap(year) && month > 2
  result = shouldAddForLeap ? result + day + 1 : result + day
  return result
};