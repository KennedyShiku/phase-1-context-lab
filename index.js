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

function createEmployeeRecord(dataArray) {
    return {
      firstName: dataArray[0],
      familyName: dataArray[1],
      title: dataArray[2],
      payPerHour: dataArray[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employeeDataArray) {
    return employeeDataArray.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour) });
    return this;
  }
  
  function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour) });
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
  }
  
  function allWagesFor() {
    const dates = this.timeInEvents.map((event) => event.date);
    const totalWages = dates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  }
  
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find((employee) => employee.firstName === firstName);
  }
  
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
    return totalPayroll;
  }
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll,
  };
  


module.exports = {
  createEmployeeRecord,
  createEmployeeRecords,
  createTimeInEvent,
  createTimeOutEvent,
  hoursWorkedOnDate,
  wagesEarnedOnDate,
  allWagesFor,
  findEmployeeByFirstName,
  calculatePayroll,
};
