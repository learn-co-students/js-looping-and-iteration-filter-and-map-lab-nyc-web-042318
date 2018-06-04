// Code your solution here:
function driversWithRevenueOver (drivers, number) {
  const people = drivers.filter(driver => driver.revenue > number);
  return people;
}

function driverNamesWithRevenueOver(drivers, number) {
  const people = drivers.filter(driver => driver.revenue > number);
  return people.map(function(driver){
    return driver.name;
  })
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    for (const key in object) {
      return driver[key] == object[key];
    }
  })
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name;
  })
}
