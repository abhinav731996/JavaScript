const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nameEl = contactForm.querySelector("#name");
    let emailEl = contactForm.querySelector("#email");
    let name = nameEl?.value?.trim();
    let email = emailEl?.value?.trim();
    // console.log(name);
    let hasError = false;
    let nameErr = validateName(name);

    if(nameErr.error){
        hasError = true;
        nameEl.classList.add("hasError")
        // console.log(nameEl.nextSibling());
        nameEl.closest(".form-group").querySelector(".errorMessage").textContent = nameErr.message;
        
    }else{
        nameEl.classList.remove("hasError")
        nameEl.closest(".form-group").querySelector(".errorMessage").textContent = "";
        
    }
    
    let emailErr = validateEmail()
    if(emailErr.error){
        hasError = true;
        emailEl.classList.add("hasError")
        // console.log(emailEl.nextSibling());
        emailEl.closest(".form-group").querySelector(".errorMessage").textContent = emailErr.message;
        
    }else{
        emailEl.classList.remove("hasError")
        emailEl.closest(".form-group").querySelector(".errorMessage").textContent = "";
        
    }
    
    if(!hasError){
        console.log("Form Submited Successfully ");
    }
});

function validateName(val){
    let error = false;
    let errorMessage = "";

    if(val || val === ""){
        errorMessage = "Name can't be empty";
        error = true;
    }
    else if(val?.trim().length < 3){
        errorMessage = "Name must have min. 3 char";
        error = true;
    }
    return {error: error, message: errorMessage};
}
function validateEmail(val){
    let error = false;
    let errorMessage = "";
    let testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(val || val === ""){
        errorMessage = "Email can't be empty";
        error = true;
    }
    else if(!testEmail.test(val?.trim().match(testEmail))){
        errorMessage = "Must have valid email";
        error = true;
    }
    return {error: error, message: errorMessage};
}