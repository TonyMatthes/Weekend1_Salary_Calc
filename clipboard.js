// class Employee {
//     constructor(firstName, lastName, identificationNumber, title, annualSalary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.identificationNumber = identificationNumber
//         this.title = title
//         this.annualSalary = annualSalary
//     }
// }

// function addCar() {
//     let incomingEmployee = new Employee(
//         $('#firstName').val(), $('#lastName').val(), $('#identificationNumber').val(), $('#title').val(), $('#annualSalary').val());
//     $('#tbody').append(`
//         <tr>
//         <td>` + incomingEmployee.firstName + `</td>
//         <td>` + incomingEmployee.lastName + `</td>
//         <td>` + incomingEmployee.identificationNumber + `</td>
//         <td>` + incomingEmployee.title + `</td>
//         <td>` + incomingEmployee.annualSalary + `</td>`);
//     employeeList.push(incomingEmployee);
//     $("#input").val('');



   

//         $( "#submitBotton" ).click(function( event ) {
//             event.preventDefault();
//             $( "<div>" )
//               .append( "default " + event.type + " prevented" )
//               .appendTo( "#log" );
//           });

// function checkInputs() {
//     if ($('#firstName').val(),
//     $('#lastName').val(),
//     $('#identificationNumber').val(),
//     $('#title').val(),
//     $('#annualSalary').val() == '' || 0) {
//         alert('please fill in all fields');
//     }
//     else { submitEmployee() }

// $('#firstName').val(),
// $('#lastName').val(),
// $('#identificationNumber').val(),
// $('#title').val(),
// $('#annualSalary').val());

// for (property in incomingEmployee){
//     $("outputDisplay").append('<td>' + incomingEmployee[property] + '</td>')
// }

// <td>` + incomingEmployee.firstName + `</td>
//             <td>` + incomingEmployee.lastName + `</td>
//             <td>` + incomingEmployee.identificationNumber + `</td>
//             <td>` + incomingEmployee.title + `</td>
//             <td>` + incomingEmployee.annualSalary + `</td>
//             <td>

let EmployeeList = [{"firstName":"John", "lastName":"Doe", "age":"46"},
 {"firstName":"James", "lastName":"Blanc", "age":"24"}]
 let objLength = arrObj.length;
let myTable = '<table>'+
'<tr>'+
'<th>firstName</th>'+
'<th>last Name</th>'+
'<th>age</th>'+
'</tr>';

 for(let i = 0; i < objLength; i++){
mylet += '<tr>'+
'<td>'+arrObj[i].firstName+'</td>'+
'<td>'+arrObj[i].lastName+'</tD>'+
'<td>'+arrObj[i].age+'</th>'+
'</tr>'     
 }

 mylet += '</table>';