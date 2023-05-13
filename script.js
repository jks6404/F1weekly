/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

//1st task
function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(student){
    if (student.marks>50){
      console.log(student);
    }
  });
}

//2nd task
function PrintStudentsbyForEach() {
  //Write your code here , just console.log
    arr.forEach(function(student) {
        if (student.marks > 50) {
          console.log(student);
        }
      });
  }
  PrintStudentsbyForEach();

//3rd task
function addData() {
  //Write your code here, just console.log
  let newstudent={id:4, name:"susan", age:"20" , marks:45};
  arr.push(newstudent);
  console.log(arr);
}

//4th task
function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}
removeFailedStudent();

//5th task
function concatenateArray() {
  //Write your code here, just console.log
  let secondArr=[
    {id:6, name:"Kalvin", age:"20", marks:60},
    {id:7, name:"James", age:"21", marks:47},
    {id:8, name:"Rocky", age:"19", marks:76},
  ]

  arr=arr.concat(secondArr);
  console.log(arr);
}
