let password = "myPassword1!";
let favColour = "#000080!";
let attempts = 0;
let attemptsLeft = 3;
let login = ""

/* code that prompts a password input box that reveals secret favColour if input matches the
stored password and stops asking for input afterwards. After 3 wrong attempts it will give the
alert "you have had too many attempts" and also stop asking for input. 

If password is correctly entered isLoggedIn = true otherwise isLoggedin = false

There is also an alert to say how many attempts are left

The text on the webpage also changes depending on if you are logged in or not

*/

function authenticateUser(){
    let passwordInput = prompt("Please input the password!");
if(passwordInput === password){
    alert("This is the secret! My Favourite colour is " + favColour);
    passwordInput = 0;
    return true;
    }

while (attempts < 3 && passwordInput != 0 ){
   
    if (passwordInput != password && attempts < 3 && passwordInput != 0){
        attempts++; 
        attemptsLeft -= 1
    alert("you have " + attemptsLeft + " attempts left!")
    let passwordInput = prompt("Please input the password!");}
        
            
            if (attempts === 2 && passwordInput != 0 ){
                passwordInput = 0;
                alert("you have had too many attempts");
        return false; }
        
            }

        }
        
        
let isLoggedIn = authenticateUser();

isLoggedIn? login = "You Logged in Nob Head!": login = "You didn't Log in Nob Head!";

/*if (isLoggedIn === false) {
    login = "You didn't Log in Nob head!"
}else {
    login = "You logged in Nob head!"
}*/
            
            
          
        




    



