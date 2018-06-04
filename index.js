// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter( function(x) {return x['revenue'] > num })
};

function driverNamesWithRevenueOver(drivers, num){
  return driversWithRevenueOver(drivers, num).map(function(x) {return x['name']});
};

function exactMatch(drivers, obj) {
  return drivers.filter(function(x) {
    for (const k in obj) {
    return x[k] === obj[k]
  };
  });
};

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(x){
    return x.name
  });
};
