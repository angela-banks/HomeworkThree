//Password Options 

let upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let lower = ["abcdefghijklmnopqrstuvwxyz"];
let special = ["!,@#$%^&*+=<>()"];
let numbers = ["0123456789"];
let charSet = "";

//Grab ID's

let pickUpper = document.getElementById("upperLetters");
let pickLower = document.getElementById("lowerLetters");
let pickSpecial = document.getElementById("specialChars");
let pickNumbers = document.getElementById("numbers");
let Length = document.getElementById("Length");

//Grab By Class

// let length = document.getElementsByClassName("Length");
// let pickUpper = length.firstChild;
// let pickLower = length.childNodes[1];
// let pickSpecial = length.childNodes[2];
// let pickNumbers = length.childNodes[3];

console.log(upper)
console.log(lower)
console.log(special)
console.log(numbers)
console.log(Length)



//If Statements

function myfunction() {

    let password = "";
   
    if (Length.value >=  8 && Length.value <= 128 ) {
       
        if (pickUpper.checked == true) { 
            charSet += upper;
            console.log(upper);
        }
    
        
        if (pickLower.checked == true ) {
            charSet += lower;
            console.log(lower);
        }
    
        if (pickSpecial.checked == true ) {
            charSet += special;
            console.log(special)
        }
    
        if (pickNumbers.checked == true) {
            charSet += numbers
            console.log(numbers)
        }
    
        for (i = 0; i <Length.value; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
            console.log(password);
          }

    }


    return document.getElementById("password").innerText = password;


}

//Copy Button 

function copyfunction() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

}