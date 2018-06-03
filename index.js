function driversWithRevenueOver(array, string) {
  return array.filter(function (arrayObj) {
    return arrayObj['revenue'] >= string;
  })
};

//Before solution branch, without calling a function inside a function
// function driverNamesWithRevenueOver(array, string) {
//   const new_array = []
//   array.filter(function (arrayObj) {
//     if (arrayObj['revenue'] >= string){
//       new_array.push(arrayObj['name']);
//     };
//   });
//   return new_array;
// };

function driverNamesWithRevenueOver(array, string) {
  return driversWithRevenueOver(array, string).map(function (driverObj) {
    return driverObj.name;
  })
};

//Before Solution Branch, without taking advantage of the fact that, if the callback's return value is truthy, that element is copied into a new array
// function exactMatch(array, obj) {
//   key = Object.keys(obj)
//   value = obj[key]
//   let new_array = []
//   array.filter(function (arrayObj) {
//     if (arrayObj[key] === value) {
//       new_array.push(arrayObj)
//     }
//   })
//   return new_array
// }

//From Solution Branch, which has a callback that returns true or false
function exactMatch(array, obj) {
  return array.filter(function (arrayObj) {
    let matches = false;

    for (const key in obj) {
      matches = arrayObj[key] === obj[key]
    }

    return matches;
  });
}


function exactMatchToList(array, obj) {
  return exactMatch(array, obj).map(function (driverObj) {
    return driverObj.name;
  });
}
