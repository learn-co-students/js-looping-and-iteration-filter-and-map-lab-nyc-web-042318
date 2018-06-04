// Code your solution here:
function driversWithRevenueOver(array, string) {
  return array.filter(function (hash) { return hash['revenue'] > parseInt(string); });
}

function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(function (hash) { return hash['name'] });
}

function exactMatch(array, namehash) {
  return array.filter(function (hash) {
    for (const key in namehash) {return hash[key] === namehash[key]}
  });
}

function exactMatchToList(array, namehash) {
  hashlist = array.filter(function (hash) {
    for (const key in namehash) {return hash[key] === namehash[key]}
  });

  return hashlist.map(function (thing) {
    return thing['name'];
  })
}
