function validateText() {
  if(document.querySelector('input[name="USERNAME"]').value.trim() !== ""){
    document.querySelector('input[name="USERNAME"]').style["borderBottom"] = "3px solid #1de71d";
  }
 else {
   document.querySelector('input[name="USERNAME"]').style["borderBottom"] = "3px solid #F00";
 };
}

function validatePassword() {
  if(document.querySelector('input[name="PASSWORD"]').value.trim() !== ""){
    document.querySelector('input[name="PASSWORD"]').style["borderBottom"] = "3px solid #1de71d";
  }
 else {
   document.querySelector('input[name="PASSWORD"]').style["borderBottom"] = "3px solid #F00";
 };
}

function validateEmail() {
  
  if(document.querySelector('input[name="EMAIL"]').value.includes("@") && document.querySelector('input[type="email"]').value.includes(".")){
    document.querySelector('input[name="EMAIL"]').style["borderBottom"] = "3px solid #1de71d";
  }
 else { document.querySelector('input[name="EMAIL"]').style["borderBottom"] = "3px solid #F00";
 };
}

