// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const newArr =  drivers.filter(element => element.revenue > revenue)
    return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return result = driversWithRevenueOver(drivers, revenue).map(element => element.name);   
}

function exactMatch(driverArray, obj) {
    let key = Object.keys(obj)
    let result = driverArray.filter(drivers => drivers[key] === obj[key]);
    return result;
}

function exactMatchToList(drivers, obj) {
    return result = exactMatch(drivers, obj).map(driver => driver.name)
}