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

let monthlyTotal = Math.round(annualSalaryTotal / 12)

$(document).ready(onReady);

function onReady() {
    console.log('JQ guh');
    $("#submitButton").on('click', submitEmployee);
    $('#outputTable').on('click', '.deleteButton', deleteEmployee)
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
            alert('Please fill in all fields before submitting')
            return false;
        }
    }

    annualSalaryTotal += (incomingEmployee.annualSalary);
    monthlyTotal = Math.round(annualSalaryTotal / 12);

    // $('#outputDisplay').append(`<tr>
    //         <td>` + incomingEmployee.firstName + `</td>
    //         <td>` + incomingEmployee.lastName + `</td>
    //         <td>` + incomingEmployee.identificationNumber + `</td>
    //         <td>` + incomingEmployee.title + `</td>
    //         <td>` + incomingEmployee.annualSalary + `</td>
    //         <td><button class=deleteButton>Remove Employee</button></td>
    //         </tr>`);

    employeeList.push(incomingEmployee);
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
            </tr>`)
    };

    // } attempted loop for array



    $('#totalMonthly').replaceWith(
        '<h2 id="totalMonthly">Total Monthly: $'
        + monthlyTotal
        + '</h2>');

    if (monthlyTotal > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    };

    $('input').val('');
}

function deleteEmployee() {

    let arrayDeleteIndex = Number($(this).attr('id'));

    annualSalaryTotal = annualSalaryTotal - employeeList[arrayDeleteIndex].annualSalary;
    monthlyTotal = Math.round(annualSalaryTotal / 12);
    employeeList.splice(arrayDeleteIndex);

    $('#totalMonthly').replaceWith(
        '<h2 id="totalMonthly">Total Monthly: $'
        + monthlyTotal
        + '</h2>');

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
            </tr>`)
    };
    
}
