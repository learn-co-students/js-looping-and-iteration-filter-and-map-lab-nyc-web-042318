function driversWithRevenueOver(drivers, number) {
  return drivers.filter(function (driver) { return driver.revenue >= number });
}

function driverNamesWithRevenueOver(drivers, number) {
  return driversWithRevenueOver(drivers, number).map(function (driver) { return driver.name });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    const key = Object.keys(attribute)[0];
    return driver[key] === attribute[key];
  });
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function (driver) { return driver.name });
}
