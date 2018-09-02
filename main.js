console.log('guh');

class Employee {
    constructor(firstName, lastName, identificationNumber, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.identificationNumber = identificationNumber;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

let employeeList = [];

let deletedEmployees= [];

let annualSalaryTotal = 0;

let monthlyTotal = Math.round(annualSalaryTotal / 12);

$(document).ready(onReady);

function onReady() {
    console.log('JQ guh');
    $("#submitButton").on('click', submitEmployee);
    $('#outputTable').on('click', '.deleteButton', deleteEmployee);
    $('#undoButton').on('click', undoDeletion);
}

function submitEmployee() {

    let incomingEmployee = new Employee(
        $('#firstName').val(),
        $('#lastName').val(),
        Number($('#identificationNumber').val()),
        $('#title').val(),
        Number($('#annualSalary').val()));

    for (property in incomingEmployee) {
        if (incomingEmployee[property] == '' || 0) {
            alert('Please fill in all fields before submitting');
            return false;
        }
    }

    annualSalaryTotal += (incomingEmployee.annualSalary);
    monthlyTotal = Math.round(annualSalaryTotal / 12);
    employeeList.push(incomingEmployee);
    updateDom();
    $('input').val('');
}

function deleteEmployee() {

    let arrayDeleteIndex = Number($(this).attr('id'));

    annualSalaryTotal = annualSalaryTotal - employeeList[arrayDeleteIndex].annualSalary;
    monthlyTotal = annualSalaryTotal / 12;
    monthlyTotal = Math.round(monthlyTotal);
    deletedEmployees = deletedEmployees.concat(employeeList.splice(arrayDeleteIndex, 1));
    updateDom();
}

function undoDeletion(){
employeeList = employeeList.concat(deletedEmployees.splice(deletedEmployees[deletedEmployees.length - 1], 1));
annualSalaryTotal += employeeList[employeeList.length-1].annualSalary;
monthlyTotal = annualSalaryTotal / 12;
monthlyTotal = Math.round(monthlyTotal);
updateDom();
}

function updateDom() {
    $('.outputDisplay').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('.outputDisplay').prepend(
            `<tr>
            <td>` + employeeList[i].firstName + `</td>
            <td>` + employeeList[i].lastName + `</td>
            <td>` + employeeList[i].identificationNumber + `</td>
            <td>` + employeeList[i].title + `</td>
            <td>` + employeeList[i].annualSalary + `</td>
            <td><button id="` + i + `" class="deleteButton">Remove Employee</button></td>
            </tr>`);
    };

    $('#totalMonthly').replaceWith(
        '<h2 id="totalMonthly">Total Monthly: $' +
        monthlyTotal +
        '</h2>');

    if (monthlyTotal > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    }
}
