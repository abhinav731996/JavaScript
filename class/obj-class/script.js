const user = {
    id: 101,
    full_name: "Abhinav",
    age: 26,
    'parmanent-address': "Rohtak, Haryana",
    getAge: function(){
        return this.age;
    },
    setAge: function(num){
        return this.age = num
    }

}

console.log(user);
console.log(user.full_name);
console.log(user['parmanent-address']);          //to call a string 
console.log(user.getAge());
console.log(user.setAge(40));                    // output undefined
console.log(user.getAge());

console.log(Object.keys(user));                  // to get only keys 
console.log(Object.values(user));                  // to get only values

Object.keys(user).forEach(key => {               // to get values 
    console.log(`${key} : ${user[key]}`);  
});

Object.keys(user).forEach(key => {                // to remove extra set & get functions only give values 
    if(!(typeof user[key] == 'function')){
        console.log(`${key} : ${user[key]}`);
    }
});

console.log(Object.entries(user));                // to get key & value pairs 

Object.entries(user).forEach(([key, value]) => {
    if(!(typeof value == 'function')){
        console.log(`${key} : ${value}`);
    }
});
