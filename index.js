// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers)
{
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers)
{
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => fare => multiplier * fare;

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
const selectDifferentDrivers = (drivers, callbackFunction) => callbackFunction(drivers);