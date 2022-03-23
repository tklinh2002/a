function KiemTraTenDN(){
    var re = /^[a-z]/;
    if(re.test(document.getElementById("txtDN").value.trim())==true){
        spDN.innerText = "*";
        return true;
    }else{
        spDN.innerText = "* Bắt buộc bắt đầu bằng ký tự";
        return false;
    }
}

function KiemTraPassword(){
    var re = /(?=.*\d).{6,}/;
    if(re.test(document.getElementById("txtpw").value.trim())==true){
        spMK.innerText = "*";
        return true;
    }else{
        spMK.innerText ="* Phải có chữ, số, ít nhất 6 ký tự";
        return false;
    }
}

function KiemTraNLMK(){
    if(document.getElementById("txtpw").value.trim()==document.getElementById("txtNLMK").value.trim()){
        spNLMK.innerText = "*";
        return true;
    }else{
        spNLMK.innerText ="* Phải giống ở mật khẩu";
        return false;
    }
}

function KiemNgaySinh(){
    var ns = new Date(document.getElementById("txtNS").value);
    var today = new Date();

    if( eval(today.getFullYear()-ns.getFullYear())< 10){
        spNS.innerText = "tuổi phải lớn hơn 10";
        return false;
    }else
    {
        spNS.innerText = "*";
        return true;
    }
}

function SubmitForm(){
    if(KiemTraTenDN() ==false|| KiemTraPassword()==false || KiemTraNLMK()==false){
        alert("Bạn phải điền đầy đủ thông tin");
        return;
    }
        var t1 = document.getElementById("txtHT").value;
        var t2 = document.getElementById("txtNS").value;
        var w = window.open("../html/form_info.html");
        w.document.write("<b>Thông tin cá nhân </b><br>");
        w.document.write("Họ tên: "+t1+"<br>");
        w.document.write("Năm sinh: "+t2+"<br>");
        w.document.write("Địa chỉ: "+document.getElementById(txtDC).value+"<br>");
        
    
}