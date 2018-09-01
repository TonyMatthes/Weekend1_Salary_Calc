class Employee {
    constructor(firstName, lastName, identificationNumber, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.identificationNumber = identificationNumber
        this.title = title
        this.annualSalary = annualSalary
    }
}

function addCar() {
    let incomingEmployee = new Employee(
        $('#firstName').val(), $('#lastName').val(), $('#identificationNumber').val(), $('#title').val(), $('#annualSalary').val());
    $('#tbody').append(`
        <tr>
        <td>` + incomingEmployee.firstName + `</td>
        <td>` + incomingEmployee.lastName + `</td>
        <td>` + incomingEmployee.identificationNumber + `</td>
        <td>` + incomingEmployee.title + `</td>
        <td>` + incomingEmployee.annualSalary + `</td>`);
    employeeList.push(incomingEmployee);
    $("#input").val('');



    <td><button class=deleteButton>Remove Car</button></td>
        </tr>