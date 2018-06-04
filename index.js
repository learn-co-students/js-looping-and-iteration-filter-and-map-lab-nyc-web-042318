// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(a){return a['revenue'] > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(d){return d.name;})
}

function exactMatch(drivers, obj){
  return drivers.filter(function(a){
    let object = false;

    for (const key in obj) {
      object = a[key] === obj[key];
    }

    return object;
  });
  return drivers.filter(function(a){return a['name'] === value});
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(a){return a.name})

}
