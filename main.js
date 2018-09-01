console.log('guh');

class Employee {
    constructor(firstName, lastName, identificationNumber, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.identificationNumber = identificationNumber
        this.title = title
        this.annualSalary = annualSalary
    }
}

let employeeList = []

let annualSalaryTotal = 0

let monthlyTotal = 0

$(document).ready(onReady);

function onReady() {
    console.log('JQ guh');
    $("#submitButton").on('click', submitEmployee);
}

function submitEmployee() {

    let incomingEmployee = new Employee(
        $('#firstName').val(),
        $('#lastName').val(),
        Number($('#identificationNumber').val()),
        $('#title').val(),
        Number($('#annualSalary').val()));

    console.log(incomingEmployee);

    for (property in incomingEmployee) {
        if (incomingEmployee[property] == '' || 0) {
            alert('Please fill in all fields before submitting')
            return false;
        }
    }

    annualSalaryTotal += (incomingEmployee.annualSalary);
    monthlyTotal = Math.round(annualSalaryTotal / 12);

    $('#outputDisplay').append(`<tr>
            <td>` + incomingEmployee.firstName + `</td>
            <td>` + incomingEmployee.lastName + `</td>
            <td>` + incomingEmployee.identificationNumber + `</td>
            <td>` + incomingEmployee.title + `</td>
            <td>` + incomingEmployee.annualSalary + `</td>
            <td><button class=deleteButton>Remove Employee</button></td>
            </tr>`);

    employeeList.push(incomingEmployee);

    $('#totalMonthly').replaceWith(
        '<h2 id="totalMonthly">Total Monthly: '
        + monthlyTotal
        + '</h2>');
    if (monthlyTotal > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    };

    $('input').val('');
}
