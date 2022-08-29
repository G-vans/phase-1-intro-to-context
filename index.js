// Your code here

let createEmployeeRecord = function(employee){
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    }
}


function createEmployeeRecords(newEmployees){
return newEmployees.map(createEmployeeRecord)
}

const getHour = function(dateTime){
return parseInt(dateTime.match(/\d{4}$/)[0])

}

const getDate = function(dateTime){
return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0]

}

function createTimeInEvent(newEmployees, timeIn) {
newEmployees.timeInEvents.push({
type: "TimeIn",
date: getDate(timeIn),
hour: getHour(timeIn),
})
return newEmployees
}

function createTimeOutEvent(newEmployees, timeOut) {
newEmployees.timeOutEvents.push({
type: "TimeOut",
date: getDate(timeOut),
hour: getHour(timeOut),
})
return newEmployees
}
function hoursWorkedOnDate(newEmployees, dateProvided) {
let timeIn = newEmployees.timeInEvents.find(event =>
  event.date == dateProvided)
let timeOut = newEmployees.timeOutEvents.find(event =>
  event.date == dateProvided)
let totalTime = (timeOut.hour - timeIn.hour) / 100
return totalTime;
}
function wagesEarnedOnDate(newEmployees, dateProvided) {
let hours = hoursWorkedOnDate(newEmployees, dateProvided)
return newEmployees.payPerHour * hours;
}
function allWagesFor(newEmployees) {
return newEmployees.timeInEvents.reduce((total, event) => {
  return total + wagesEarnedOnDate(newEmployees, event.date)
}, 0)
}
function calculatePayroll(employeeRecord) {
return employeeRecord.reduce((total, employee) => {
  return total + allWagesFor(employee)
}, 0)
}