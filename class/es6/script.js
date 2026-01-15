let arr1 = ["Abhinav", "Software Engineer", "Indixpert", "Rohtak", "Haryana", "India"];

let obj1 = {name: "abhinav", desigination: "software engineer", company: "indixpert", city: "rohtak", state: "haryana", country: "india"};

function printData(arr) {
    const[name, desigination, company] = arr
    console.log(name, desigination, company);
    
}

function printData2(obj) {
    const{name, desigination, company} = obj
    console.log(name, desigination, company);

}

printData(arr1);
printData2(obj1);


//------------ rest operator --------------
function rest(arr) {
    const[name, desigination, company, ...rest] = arr
    console.log(name, desigination, company, ...rest);
    
}
function rest2(obj) {
    const{name, desigination, company, ...rest} = obj
    console.log(rest);
    
}

rest(arr1);
rest2(obj1)

// -------------- spread operator -------------

let arr2 = [1,2,3,4,5,6,7,8];

// let arr3 = arr2;             // same on both i.e. 15
let arr3 = [...arr2];           // different on both i.e. 4 & 15

arr3[3] = 15

console.log(arr2);
console.log(arr3);

// ----------- stringify -----------

let arr4 = [1,2,3,4,5,[6,7,8,9]];
let arr5 = Array.from(JSON.parse(JSON.stringify(arr4)));

arr5[5][0]=15;

console.log(arr4);
console.log(arr5);
