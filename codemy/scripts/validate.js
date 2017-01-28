function validateText() {
  if(document.querySelector('input[type="text"]').value.trim() !== ""){
    document.querySelector('input[type="text"]').style["borderBottom"] = "3px solid #1de71d";
  }
 else {
   document.querySelector('input[type="text"]').style["borderBottom"] = "3px solid #F00";
 };
}

function validateEmail() {
  
  if(document.querySelector('input[type="email"]').value.includes("@") && document.querySelector('input[type="email"]').value.includes(".")){
    document.querySelector('input[type="email"]').style["borderBottom"] = "3px solid #1de71d";
  }
 else { document.querySelector('input[type="email"]').style["borderBottom"] = "3px solid #F00";
 }
}

