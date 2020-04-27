var check = document.getElementsByClassName("cb");
var soLuong = document.getElementsByClassName("soLuong");
var thanhTien = document.getElementsByClassName("thanhtien");
var donGia = document.getElementsByClassName("donGia");
var row = document.getElementsByTagName("tr");
var tong = 0;
var sum = document.getElementById("tong");
var sumfinal = 0;

document.getElementById("muc-gia").onclick = function () {
    var valu = document.getElementById("muc-gia").value;
    console.log(valu);

    if (valu == 1) {
        for (var j = 1; j < donGia.length; j++) {
            if (Number(donGia[j].textContent) < 200) {
                console.log(donGia[j].textContent);
                row[j].style.display = "";
            } else {
                row[j].style.display = "none";
            }
        }
    }
    if (valu == 2) {
        for (var j = 1; j < donGia.length; j++) {
            if (Number(donGia[j].textContent) < 500 && Number(donGia[j].textContent) > 200) {
                row[j].style.display = "";
            } else {
                row[j].style.display = "none";
            }
        }
    }
    if (valu == 3) {
        for (var j = 1; j < donGia.length; j++) {
            if (Number(donGia[j].textContent) > 500) {
                row[j].style.display = "";
            } else {
                row[j].style.display = "none";
            }
        }
    }
    if (valu == 0) {
        for (var j = 1; j < donGia.length; j++) {
            row[j].style.display = "";
        }
    }

}
check[0].onclick = function () {
    if (check[0].checked) {
        soLuong[0].disabled = false;
        var val = soLuong[0].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[0].value) * Number(donGia[1].textContent);
            thanhTien[0].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;
        }
    }
    else {
        soLuong[0].disabled = true;
        soLuong[0].value = 0;
        tong = 0;
        thanhTien[0].innerHTML = tong;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}

check[1].onclick = function () {
    if (check[1].checked) {
        soLuong[1].disabled = false;
        var val = soLuong[1].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[1].value) * Number(donGia[2].textContent);
            thanhTien[1].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;
        }

    }
    else {
        soLuong[1].disabled = true;
        soLuong[1].value = 0;
        tong = 0;
        thanhTien[1].innerHTML = tong;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[2].onclick = function () {
    if (check[2].checked) {
        soLuong[2].disabled = false;
        var val = soLuong[2].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[2].value) * Number(donGia[3].textContent);
            thanhTien[2].innerHTML = tong;
            sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
        }
        
        
    }
    else {
        soLuong[2].disabled = true;
        soLuong[2].value = 0;
        tong = 0;
        thanhTien[2].innerHTML = tong;

        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[3].onclick = function () {
    if (check[3].checked) {
        soLuong[3].disabled = false;
        var val = soLuong[3].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[3].value) * Number(donGia[4].textContent);
            thanhTien[3].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;
        }
        
    }
    else {
        soLuong[3].value = 0;
        tong = 0;
        thanhTien[3].innerHTML = tong;
        soLuong[3].disabled = true;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[4].onclick = function () {
    if (check[4].checked) {
        soLuong[4].disabled = false;
        var val = soLuong[4].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[4].value) * Number(donGia[5].textContent);
            thanhTien[4].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;

        }

    }
    else {
        soLuong[4].value = 0;
        tong = 0;
        thanhTien[4].innerHTML = tong;
        soLuong[4].disabled = true;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[5].onclick = function () {
    if (check[5].checked) {
        soLuong[5].disabled = false;
        var val = soLuong[5].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[5].value) * Number(donGia[6].textContent);
            thanhTien[5].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;

        }

    }
    else {
        soLuong[5].value = 0;
        tong = 0;
        thanhTien[5].innerHTML = tong;
        soLuong[5].disabled = true;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[6].onclick = function () {
    if (check[6].checked) {
        soLuong[6].disabled = false;
        var val = soLuong[6].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[6].value) * Number(donGia[7].textContent);
            thanhTien[6].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;
        }

    }
    else {
        soLuong[6].value = 0;
        tong = 0;
        thanhTien[6].innerHTML = tong;
        soLuong[6].disabled = true;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[7].onclick = function () {
    if (check[7].checked) {
        soLuong[7].disabled = false;
        var val = soLuong[7].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[7].value) * Number(donGia[8].textContent);
            thanhTien[7].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;
        }
 
    }
    else {
        soLuong[7].value = 0;
        tong = 0;
        thanhTien[7].innerHTML = tong;
        soLuong[7].disabled = true;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}
check[8].onclick = function () {
    if (check[8].checked) {
        soLuong[8].disabled = false;
        var val = soLuong[8].onkeyup = function () {
            tong = 0;
            tong += Number(soLuong[8].value) * Number(donGia[9].textContent);
            thanhTien[8].innerHTML = tong;
            sumfinal = 0;
            for (var o = 0; o < thanhTien.length; o++) {
                sumfinal += Number(thanhTien[o].textContent);
            }
            sum.innerHTML = sumfinal;
        }

    }
    else {
        soLuong[8].value = 0;
        tong = 0;
        thanhTien[8].innerHTML = tong;
        soLuong[8].disabled = true;
        sumfinal = 0;
        for (var o = 0; o < thanhTien.length; o++) {
            sumfinal += Number(thanhTien[o].textContent);
        }
        sum.innerHTML = sumfinal;
    }
}

document.getElementById("tt").onclick = function(){
    alert("Bạn chắc chắc muốn thanh toán. Chuẩn bị chuyển trang...")
}















