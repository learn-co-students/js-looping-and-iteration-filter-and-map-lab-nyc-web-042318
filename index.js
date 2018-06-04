// Code your solution here:
function driversWithRevenueOver(array, num) {
  const result = array.filter(function (element) { return element.revenue >= num})
  return result;
}

function driverNamesWithRevenueOver(array, num) {
  const result = driversWithRevenueOver(array, num).map(function (element) { return element.name })
  return result;
}

function exactMatch(array, attribute) {
  const result = array.filter(function (element) {
    if (attribute.hasOwnProperty('name')) {
      return element['name'] === attribute['name']
    } else {
      return element['revenue'] === attribute['revenue']
    }
  })
  return result;
}

function exactMatchToList(array, attribute) {
  const result = exactMatch(array, attribute).map(function (element) { return element.name })
  return result;
}
