let students = ["abhinav", "anjali", "faiz", "kalpna", "sakhir", "nisha"];

let studentsDetail =[
    {
        name: "abhinav",
        batch: "march 2025"
    },
    {
        name: "anjali",
        batch: "march 2025"
    }
]

// console.log(students.length);
// console.log(studentsDetail.length);

// // for removing from last 

// students.push("dinesh");
// console.log(students);

// students.pop();
// console.log(students);


// // for removing from start 

// students.unshift("dinesh", "anand");
// console.log(students);

// students.shift()
// console.log(students);

// students.splice(2,1, 'aditya');
// console.log(students);

let addstudents = students.slice(0,2);
console.log(addstudents);


// // include 
console.log(students.includes("bharat"));
console.log(students.includes("abhinav"));

console.log(addstudents.with(1, "sam"));
