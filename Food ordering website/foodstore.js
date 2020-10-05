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