var reg_email = /\w+@+\w+(\.\w){1,2}/;
var reg_phone = /0[0-9]{9,10}/;
var reg_pass = /\w{6}/;
var a12 = document.getElementById("mail1");
var b12 = document.getElementById("phone1");
var c12 = document.getElementById("pass1");
console.log(document.getElementsByClassName("create").length);
document.getElementsByClassName("create")[1].onclick = function(){
    console.log(document.getElementsByClassName("create").length);
    if(a12.value == ""){
    document.getElementById("m1").innerHTML = "This is a required field.";
}
if(reg_email.test(a12.value) == false && a12.value != ""){
    document.getElementById("m1").innerHTML = "Please enter a valid email address.";
}
if(b12.value == ""){
    document.getElementById("m2").innerHTML = "This is a required field.";
}
if(reg_phone.test(b12.value) == false && b12.value != ""){
    document.getElementById("m2").innerHTML = "Please enter a valid phone.";
}
if(c12.value == ""){
    document.getElementById("m3").innerHTML = "This is a required field.";
}
if(reg_pass.test(c12.value) == false && c12.value != ""){
    document.getElementById("m3").innerHTML = "Please enter 6 or more characters without leading or trailing spaces.";
}



}
