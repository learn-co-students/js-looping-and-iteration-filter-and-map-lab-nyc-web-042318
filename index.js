// Code your solution here:
function driversWithRevenueOver(array,revenue) {
  return array.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(array,revenue) {
  names = []
  let new_array = driversWithRevenueOver(array,revenue)
  new_array.map(function (driver) {
    names.push(driver.name)
  })
  return names
}

function exactMatch (array, hash) {
  return array.filter(function (driver) {
    let matches = false;

    for (const key in hash) {
      matches = driver[key] === hash[key];
    }

    return matches;
  });
}

function exactMatchToList (array, hash) {
  return exactMatch(array, hash).map(function (driver) {
      return driver.name;
    });
}
