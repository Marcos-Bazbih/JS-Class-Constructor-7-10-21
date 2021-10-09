const form = document.getElementById("form");
const inputFName = document.getElementById("inputFName");
const inputLName = document.getElementById("inputLName");
const inputAge = document.getElementById("inputAge");
const inputEmail = document.getElementById("inputEmail");
const inputClass = document.getElementById("inputClass");
const inputBirthYear = document.getElementById("inputBirthYear");
const inputPicture = document.getElementById("inputPicture");

const usersTableBody = document.getElementById("usersTableBody");



class Student {
    firstName;
    lastName;
    age;
    email;
    class;
    birthYear;
    picture;
    constructor(userFName, userLName, userAge, userEmail, userClass, userBirthYear, userPicture) {
        this.firstName = userFName;
        this.lastName = userLName;
        this.age = userAge;
        this.email = userEmail;
        this.class = userClass;
        this.birthYear = userBirthYear;
        this.picture = userPicture;
    }
    infoToString() {
        let studentInfoString = "";
        for (let key in this) {
            studentInfoString += `${key}: ${this[key]} `
        }
        return studentInfoString;
    }
    logStudentInfo(){
        console.log(this);
    }
}
const STUDENTS = [];

form.onsubmit = (event) => {
    event.preventDefault();
    let newStudent = new Student(inputFName.value, inputLName.value, inputAge.value, inputEmail.value, inputClass.value, inputBirthYear.value, inputPicture.value)
    STUDENTS.push(newStudent)
    usersTableBody.innerHTML += `<tr><td>${newStudent.firstName}</td> <td>${newStudent.lastName}</td> <td>${newStudent.age}</td> <td>${newStudent.email}</td> <td>${newStudent.class}</td> <td>${newStudent.birthYear}</td> <td>${newStudent.picture}</td> <td><button class="userNameBtn">${newStudent.firstName}</button></td></tr>`
    let userNameBtn = document.getElementsByClassName("userNameBtn");
    for(let i=0; i<userNameBtn.length;i++){
        userNameBtn[i].onclick = () =>{
            STUDENTS[i].logStudentInfo()
        }
    }
    // console.log(newStudent);
    // newStudent.logStudentInfo();
}