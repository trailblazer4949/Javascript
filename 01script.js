//First Code for Javascript
/*
Author - Bharat Vyas
Description- Learned about defing a variable
*/
var firstName = "Bharat";
var lastName = "Vyas";
var emailId = "Bharatvyas@gmail.com"
var password = 1234567
var confirmPassword = 123456;
var phoneNumber = 7972323623;
var isLoggedInFromInstagram = true;
var isLoggedInFromFacebook = false;
var gender = "Male";

console.log("First name is :" + firstName);//Printing First name

//We can use `` for multiple and ${} for printing just like {} and format in python 
console.log(`
First name is ${firstName}
Last name is ${lastName}
EmailId is ${emailId}
Password is ${password}
Phone number is ${phoneNumber}
Gender is ${gender} 

`);

/* OUTPUT :
First name is :Bharat

First name is Bharat
Last name is Vyas
EmailId is Bharatvyas@gmail.com
Password is 1234567
Phone number is 7972323623
Gender is Male
*/
