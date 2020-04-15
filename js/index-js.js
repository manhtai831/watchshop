var index = 1;
        slideShow(index);
        function plusSlide(n) {
            slideShow(index += n);
        }
        function currentSlide(n) {
            slideShow(index = n);
        }
        function slideShow(n) {
            var i;
            var slides = document.getElementsByClassName("intro-pro");
            var dots = document.getElementsByClassName("dot");
            if (n < 1) {
                index = slides.length;
            }
            if (n > slides.length) { index = 1; }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[index - 1].style.display = "block";
            dots[index - 1].className += " active";

        }
        var index1 = 0;
        slideShow1();

        function slideShow1() {

            var i;
            var slides = document.getElementsByClassName("fade");



            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            index1++;
            if (index1 > slides.length) {
                index1 = 1;
            }

            slides[index1 - 1].style.display = "block";
            setTimeout(slideShow1, 10000);
        }
        function openNav(n) {
            var z = document.getElementsByClassName("sub-menu2");
            var i;
            var index2 = n;
            var x = document.getElementsByClassName("g1");
            for (i = 0; i < x.length; i++) {
                x[i].style.textDecoration = "none";
            }
            x[index2].style.textDecoration = "underline";
            z[index2].style.height = "500px";
        }
        function closeNav(n) {
            var z = document.getElementsByClassName("sub-menu2");
            var i;
            var index2 = n;
            var x = document.getElementsByClassName("g1");
            for (i = 0; i < x.length; i++) {
                x[i].style.textDecoration = "none";
            }

            z[index2].style.height = "0%";
        }


        function cl(n) {
            var i;
            var a = document.getElementsByClassName("brands");
            var b = document.getElementsByClassName("letter");
            for (i = 0; i < a.length; i++) {
                a[i].style.display = "none";
            }
            for (i = 0; i < b.length; i++) {
                b[i].style.backgroundColor = "rgb(72, 72, 248)";
                b[i].style.color = "white";
            }
            if (n == 0) {
                document.getElementsByClassName("letter")[0].style.backgroundColor = "white";
                document.getElementsByClassName("letter")[0].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 1) {
                document.getElementsByClassName("letter")[1].style.backgroundColor = "white";
                document.getElementsByClassName("letter")[1].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 2) {
                document.getElementsByClassName("letter")[2].style.backgroundColor = "white";
                document.getElementsByClassName("letter")[2].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 3) {
                document.getElementsByClassName("letter")[3].style.background = "white";
                document.getElementsByClassName("letter")[3].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 4) {
                document.getElementsByClassName("letter")[4].style.background = "white";
                document.getElementsByClassName("letter")[4].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 5) {
                document.getElementsByClassName("letter")[5].style.background = "white";
                document.getElementsByClassName("letter")[5].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 6) {
                document.getElementsByClassName("letter")[6].style.background = "white";
                document.getElementsByClassName("letter")[6].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 7) {
                document.getElementsByClassName("letter")[7].style.background = "white";
                document.getElementsByClassName("letter")[7].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 8) {
                document.getElementsByClassName("letter")[8].style.background = "white";
                document.getElementsByClassName("letter")[8].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 9) {
                document.getElementsByClassName("letter")[9].style.background = "white";
                document.getElementsByClassName("letter")[9].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 10) {
                document.getElementsByClassName("letter")[10].style.background = "white";
                document.getElementsByClassName("letter")[10].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 11) {
                document.getElementsByClassName("letter")[11].style.background = "white";
                document.getElementsByClassName("letter")[11].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 12) {
                document.getElementsByClassName("letter")[12].style.background = "white";
                document.getElementsByClassName("letter")[12].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 13) {
                document.getElementsByClassName("letter")[13].style.background = "white";
                document.getElementsByClassName("letter")[13].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 14) {
                document.getElementsByClassName("letter")[14].style.background = "white";
                document.getElementsByClassName("letter")[14].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 15) {
                document.getElementsByClassName("letter")[15].style.background = "white";
                document.getElementsByClassName("letter")[15].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 16) {
                document.getElementsByClassName("letter")[16].style.background = "white";
                document.getElementsByClassName("letter")[16].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 17) {
                document.getElementsByClassName("letter")[17].style.background = "white";
                document.getElementsByClassName("letter")[17].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 18) {
                document.getElementsByClassName("letter")[18].style.background = "white";
                document.getElementsByClassName("letter")[18].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 19) {
                document.getElementsByClassName("letter")[19].style.background = "white";
                document.getElementsByClassName("letter")[19].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 20) {
                document.getElementsByClassName("letter")[20].style.background = "white";
                document.getElementsByClassName("letter")[20].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 21) {
                document.getElementsByClassName("letter")[21].style.background = "white";
                document.getElementsByClassName("letter")[21].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 22) {
                document.getElementsByClassName("letter")[22].style.background = "white";
                document.getElementsByClassName("letter")[22].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 23) {
                document.getElementsByClassName("letter")[23].style.background = "white";
                document.getElementsByClassName("letter")[23].style.color = "blue";
                a[n].style.display = "block";
            }
            if (n == 24) {
                document.getElementsByClassName("letter")[24].style.background = "white";
                document.getElementsByClassName("letter")[24].style.color = "blue";
                a[n].style.display = "block";
            }

        }

        productScroll();

        function productScroll() {
            var slider = document.getElementById("slider");
            var next = document.getElementsByClassName("pro-next");
            var prev = document.getElementsByClassName("pro-prev");
            var slide = document.getElementById("slide");
            var item = document.getElementById("slide");
            for (var l = 0; l < next.length; l++) {
                var position = 0;
                prev[l].addEventListener("click", function () {
                    if (position > 0) {
                        position -= 1;
                        translateX(position);
                    }
                });

                next[l].addEventListener("click", function () {
                    if (position >= 0 && position < hiddenItems()) {
                        position += 1;
                        translateX(position);
                        console.log(position);
                    }
                });
            }
            function hiddenItems() {
                var items = getCount(item, false);
                var visibleItems = slider.offsetWidth / 320;
                return items - Math.ceil(visibleItems);
            }

        }

        
        function translateX(position) {
            slide.style.left = position * -320 + "px";
        }
        function getCount(parent, getChildrensChildren) {
            //count no of items
            var relevantChildren = 0;
            var children = parent.childNodes.length;
            for (var l = 0; l < children; l++) {
                if (parent.childNodes[l].nodeType != 3) {
                    if (getChildrensChildren)
                        relevantChildren += getCount(parent.childNodes[l], true);
                    relevantChildren++;
                }
            }
            return relevantChildren;
        }
        productScroll1();

        function productScroll1() {
            var slider1 = document.getElementById("slider1");
            var next1 = document.getElementsByClassName("pro-next1");
            var prev1 = document.getElementsByClassName("pro-prev1");
            var slide1 = document.getElementById("slide1");
            var item1 = document.getElementById("slide1");
            for (var l = 0; l < next1.length; l++) {
                var position1 = 0;
                prev1[l].addEventListener("click", function () {
                    if (position1 > 0) {
                        position1 -= 1;
                        translateX1(position1);
                    }
                });

                next1[l].addEventListener("click", function () {
                    if (position1 >= 0 && position1 < hiddenItems1()) {
                        position1 += 1;
                        translateX1(position1);
                        console.log(position1);
                    }
                });
            }
            function hiddenItems1() {
                var items1 = getCount1(item1, false);
                var visibleItems1 = slider1.offsetWidth / 320;
                return items1 - Math.ceil(visibleItems1);
            }

        }

        
        function translateX1(position1) {
            slide1.style.left = position1 * -320 + "px";
        }
        function getCount1(parent, getChildrensChildren) {
            //count no of items
            var relevantChildren1 = 0;
            var children1 = parent.childNodes.length;
            for (var l = 0; l < children1; l++) {
                if (parent.childNodes[l].nodeType != 3) {
                    if (getChildrensChildren)
                        relevantChildren1 += getCount1(parent.childNodes[l], true);
                    relevantChildren1++;
                }
            }
            return relevantChildren1;
        }
var model = document.getElementById("myModel");
var btn = document.getElementById("register");
var clo = document.getElementById("close");

btn.onclick = function (){
    model.style.display = "block"
}
clo.onclick = function (){
    model.style.display = "none";
}
window.onclick = function(event){
    if(event.target == model){
        model.style.display = "none";
    }
}
var reg_email = /\w+@+\w+(\.\w){1,2}/;
var reg_phone = /0[0-9]{9,10}/;
var reg_pass = /\w{6}/;
var a11 = document.getElementById("mail");
var b11 = document.getElementById("phone");
var c11 = document.getElementById("pass");
document.getElementsByClassName("create")[0].onclick = function(){
    if(a11.value == ""){
    document.getElementById("x1").innerHTML = "This is a required field.";
}
if(reg_email.test(a11.value) == false && a11.value != ""){
    document.getElementById("x1").innerHTML = "Please enter a valid email address.";
}
if(b11.value == ""){
    document.getElementById("x2").innerHTML = "This is a required field.";
}
if(reg_phone.test(b11.value) == false && b11.value != ""){
    document.getElementById("x2").innerHTML = "Please enter a valid phone.";
}
if(c11.value == ""){
    document.getElementById("x3").innerHTML = "This is a required field.";
}
if(reg_pass.test(c11.value) == false && c11.value != ""){
    document.getElementById("x3").innerHTML = "Please enter 6 or more characters without leading or trailing spaces.";
}



}
