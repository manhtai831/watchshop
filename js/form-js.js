var reg_email = /\w+@+\w+(\.\w){1,2}/;
var reg_phone = /0[0-9]{9,10}/;
var reg_pass = /\w{6,}/;
var a12 = document.getElementById("mail1");
var b12 = document.getElementById("phone1");
var c12 = document.getElementById("pass1");
console.log(document.getElementsByClassName("create").length);
document.getElementsByClassName("create")[1].onclick = function () {
    console.log(document.getElementsByClassName("create").length);
    if (a12.value == "") {
        document.getElementById("m1").innerHTML = "This is a required field.";
    }
    if (reg_email.test(a12.value) == false && a12.value != "") {
        document.getElementById("m1").innerHTML = "Please enter a valid email address.";
    }
    if (b12.value == "") {
        document.getElementById("m2").innerHTML = "This is a required field.";
    }
    if (reg_phone.test(b12.value) == false && b12.value != "") {
        document.getElementById("m2").innerHTML = "Please enter a valid phone.";
    }
    if (c12.value == "") {
        document.getElementById("m3").innerHTML = "This is a required field.";
    }
    if (reg_pass.test(c12.value) == false && c12.value != "") {
        document.getElementById("m3").innerHTML = "Please enter 6 or more characters without leading or trailing spaces.";
    }



}

var a13 = document.getElementById("mail21");
var b13 = document.getElementById("phone2");
var c13 = document.getElementById("pass2");


document.getElementById("register11").onclick = function () {
    console.log("vao ham");
    if (a13.value == "") {
        document.getElementById("m11").innerHTML = "This is a required field.";
        a13.style.backgroundColor = "yellow";

    }
    else {
        a13.style.backgroundColor = "white";
        document.getElementById("m11").innerHTML = "OK";
    }
    if (reg_email.test(a13.value) == false && a13.value != "") {
        document.getElementById("m11").innerHTML = "Please enter a valid email address.";
        a13.style.backgroundColor = "yellow";
    }
    if (reg_email.test(a13.value) == true && a13.value != "") {
        document.getElementById("m11").innerHTML = "OK";
        a13.style.backgroundColor = "white";
    }

    if (b13.value == "") {
        document.getElementById("m21").innerHTML = "This is a required field.";
        b13.style.backgroundColor = "yellow";
    }
    else{
        a13.style.backgroundColor = "white";
        document.getElementById("m11").innerHTML = "OK";
    } 
    if (reg_phone.test(b13.value) == false && b13.value != "") {
        document.getElementById("m21").innerHTML = "Please enter a valid phone.";
        b13.style.backgroundColor = "yellow";
    }
    
    if (reg_phone.test(b13.value) == true && b13.value != "") {
        document.getElementById("m21").innerHTML = "OK.";
        b13.style.backgroundColor = "white";
    }

    if (c13.value == "") {
        document.getElementById("m31").innerHTML = "This is a required field.";
        c13.style.backgroundColor = "yellow";
    }
    else {
        document.getElementById("m31").innerHTML = "OK";
        c13.style.backgroundColor = "white";
    }
    if (reg_pass.test(c13.value) == false && c13.value != "") {
        c13.style.backgroundColor = "yellow";
        document.getElementById("m31").innerHTML = "Please enter 6 or more characters without leading or trailing spaces.";
    }
    if (reg_pass.test(c13.value) == true && c13.value != "") {
        c13.style.backgroundColor = "white";
        document.getElementById("m31").innerHTML = "OK.";
    }
    


    console.log(document.getElementsByClassName("gt1")[1]);
    console.log(document.getElementsByClassName("gt1")[0]);
    if (document.getElementsByClassName("gt1")[1].checked == false && document.getElementsByClassName("gt1")[0].checked == false) {
        document.getElementById("m41").innerHTML = "This is a required field.";
        return false;
    }
    else document.getElementById("m41").innerHTML = "OK";



    if (document.getElementsByClassName("cb1")[0].checked == false &&
        document.getElementsByClassName("cb1")[1].checked == false &&
        document.getElementsByClassName("cb1")[2].checked == false &&
        document.getElementsByClassName("cb1")[3].checked == false &&
        document.getElementsByClassName("cb1")[4].checked == false) {
        document.getElementById("m51").innerHTML = "This is a required field.";
        return false
    }
    else document.getElementById("m51").innerHTML = "OK";
    console.log(document.getElementById("select").value);
    if (document.getElementById("select").value == 0) {
        document.getElementById("m61").innerHTML = "This is a required field.";
        return false
    }
    document.getElementById("select").onclick = function () {
        if (document.getElementById("select").value == 0) {
            document.getElementById("m61").innerHTML = "This is a required field.";
            return false;
        }
        else document.getElementById("m61").innerHTML = "OK.";
    }
    if(document.getElementById("ghiChu").value.length >200){
        document.getElementById("m71").innerHTML = "Out of length letter. Limited 200 character.";
        document.getElementById("ghiChu").style.backgroundColor = "yellow";
        return false;
    }
    else {
        document.getElementById("ghiChu").style.backgroundColor = "white";
    }

}