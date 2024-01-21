/* Your Code Here */
// Create employee record
const createEmployeeRecord = array => ({
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
});

// Create employee records
const createEmployeeRecords = employeeArrays => employeeArrays.map(createEmployeeRecord);

// Create time in event
const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
};

// Create time out event
const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
};

// Calculate hours worked on a specific date
const hoursWorkedOnDate = function(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour;
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour;

    return (timeOut - timeIn) / 100;
};

// Calculate wages earned on a specific date
const wagesEarnedOnDate = function(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
};

// Calculate all wages for an employee
const employeeObject = {
    // other properties
    allWagesFor: function() {
        const eligibleDates = this.timeInEvents.map(event => event.date);
        return eligibleDates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
    },
    // other methods
};


// Find employee by first name
const findEmployeeByFirstName = (srcArray, firstName) => srcArray.find(employee => employee.firstName === firstName);

// Calculate total payroll for all employees
const calculatePayroll = employeeRecords => employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

