
function printError(elemId, hintMsg) {
document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
 var name = document.contactForm.nam.value;
 var pass= document.contactForm.pass.value;
   
   

  
	// Defining error variables with a default value
    var nameErr = emailErr =passwordErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }


// Validate password
     if(pass== "") {
        printError("passwordErr", "Please enter your password ");
    } else{
        // hardcoding name and password
            if(name=="rashmi" && pass=="rashmi"){
             alert("click on okay to move");
          window.location.href ="successpage.html";
         }
         else{
             alert("please enter valid  details");
         }
        }
         
        if((nameErr  || passwordErr  ) == true) {
       return false;
    } 
}
   
