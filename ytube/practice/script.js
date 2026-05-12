
// // ************* Reduce function **************
// console.log("Abhinav");

// const arr = [[1,2], [3,4]];

// const flat = arr.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat);
// console.log(arr);


// ************* practice **************

// console.log(0.2 + 0.3 === 0.5);
// console.log(0.2 + 0.3 == 0.5);
// console.log(0.2 + 0.3);
// ------------------------------------------

// const obj = {
//     a:1,
//     b:2
// }
// let newObj = obj.toString();
// console.log(newObj);
// -------------------// to find max product of an Array-----------------------

// 
// const arr = [1, 2, 3, 4, 5, 6];

// let maxProd = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         const product = arr[i] * arr[j];

//         if (product > maxProd) {
//             maxProd = product;
//         }
        
//     }
// }

// console.log("MAX PRODUCT: ", maxProd);

// ---------------------// for shorting array -----------------------

// let num = [1, 4,7, 3, 6, 9, 8];
// console.log(num.sort((a,b) => a-b));


// ---------------------- classes -----------------------------

// class user {
//     constructor(name, phone, username, password) {
//         this.name = name;
//         this.phone = phone;
//         this.username = username;
//         this.password = password;
//     }
//     updatePassword(pass){
//         return this.password = pass;
//     }
//     getUserName() {
//         return this.username;
//     } 
// }

// let abhi = new user("Abhinav", "9034340569", "abhi90@gmail.com", "@abhi12")

// console.log(abhi);

// console.log(abhi.getUserName());
// console.log(abhi.updatePassword("Abhi@12"));

// console.log(abhi);


// ----------------------------- DOM ----------------------------

// console.log(document.title);
// console.log(document.body);
// console.log(document.URL);


// // #### adding & removing ####
// function addBtn() {
//     const box = document.createElement("div");
//     box.innerHTML = "New Box";
//     box.id = "box";
//     document.getElementById("container").appendChild(box);
// }

// function removeBtn() {
//     const box = document.getElementById("box");
//     if (box) {
//         box.remove();
//     }
// }

// // #### DOM Event ####

//****** */ add event listener
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked!!!")
})

// ******** remove event listener

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

function sayHello() {
    alert("Hello Codder !!")
}

addBtn.addEventListener("click", sayHello);
removeBtn.addEventListener("click", )
