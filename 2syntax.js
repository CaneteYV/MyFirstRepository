document.getElementById("num").innerHTML= 67;
document.getElementById("deci").innerHTML= 6.7;

document.getElementById("singleq").innerHTML= "Hello World!";
document.getElementById("doubleq").innerHTML= "Hello Word!";

let greeting = "Welcome to JavaShit!";
const pi = 3.67;
var isActive = false;

document.getElementById("vlet").innerHTML= greeting;
document.getElementById("vconst").innerHTML= pi;
document.getElementById("vvar").innerHTML= isActive;

let aa = 10;
const bb = 20;
var cc = 30;

document.getElementById("a").innerHTML= aa;
document.getElementById("b").innerHTML= bb;
document.getElementById("c").innerHTML= cc;

function changeValue() {
    aa = 100;
   
    cc = 300;
    document.getElementById("a").innerHTML= aa;
document.getElementById("b").innerHTML= bb;
document.getElementById("c").innerHTML= cc;
}
