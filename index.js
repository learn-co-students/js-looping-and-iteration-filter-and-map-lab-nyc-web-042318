// Code your solution here:

function driversWithRevenueOver(drivers, n) {
  let result = drivers.filter(each => each.revenue > n);
  return result;
}


function driverNamesWithRevenueOver(drivers, n) {
  let result = drivers.filter(each => each.revenue > n);
  return result.map(each => each.name);
}


function exactMatch(drivers, obj) {
  let key =Object.keys(obj)[0];

  let result = drivers.filter(each => {
    if (each[key] === obj[key]){
      return each
    };
  });
  return result;
}
function exactMatchToList(drivers, obj) {
  let key =Object.keys(obj)[0];

  let result = drivers.filter(each => {
    if (each[key] === obj[key]){
      return each
    };
  });
  return result.map(each => each.name);
}
