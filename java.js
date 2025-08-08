let send = document.getElementById("send");
send.onclick = function(){
    let yo = document.getElementById("e");
    let ho = document.getElementById("bobo");
    if(yo.value != ""){
        ho.style.display = "block";
        ho.style.width = "98%";
        yo.value = "" ;
    }else{
        document.querySelector(".error").style.display = "block";
    }
}