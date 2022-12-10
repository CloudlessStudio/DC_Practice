const students = ["John"];

const addStudent= (newStudent,printCallback)=>{
    setTimeout(function(){
    students.push(newStudent);
    console.log("student added");
    printCallback();
    },2000);

}

const printStudents = ()=>{
    setTimeout(function(){
        for (let i in students){
            console.log(students[i]);
        }
    },1000);

}

const printStudentsPromise = ()=>{
        for (let i in students){
            console.log(students[i]);
        }
}

const addStudentViaPromise= (newStudent)=>{
    const studentPromise =  new Promise((resolve, reject) => {
        const studentFind = students.find(s=>s==newStudent);
        if(studentFind){
            reject()
        }
        else{
            students.push(newStudent);
            resolve();
        }
    })
    return studentPromise;

}
//addStudent("James", printStudents);

addStudentViaPromise("John").then(()=>{
    printStudentsPromise();
}).catch(()=>{
    console.log("already found this guy");
});
//printStudents();