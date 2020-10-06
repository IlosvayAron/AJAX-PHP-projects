var xmlHttp = creatXmlHttpRequestObject();

function creatXmlHttpRequestObject(){
    var xmlHttp;

    if(window.ActiveXObject){
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try {
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
        }
    }

    if(!xmlHttp)
        alert("can\'t creat the object hoss!");
    else
        return xmlHttp;
}

function process(){
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        food = encodeURIComponent(document.getElementById("userInput").value);
        xmlHttp.open("GET","foodstore.php?food=",+food,true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }else{
        setTimeout('process()',1000);
    }
}