var text;
function keyboardBtns(obj) {
    var chosenBtn = document.getElementById(obj.id).innerHTML;
    if (chosenBtn === "clear") {
        document.getElementById("text").innerHTML = "";
    } else if (chosenBtn === "back") {
        text = document.getElementById("text").innerHTML;
        document.getElementById("text").innerHTML = text.slice(0, text.length - 1);
    } else if (chosenBtn === "space") {
        document.getElementById("text").innerHTML += "&nbsp;";
    } else if (chosenBtn === "capLock") {
        var letterCnt = document.getElementsByClassName("letter").length;

        if (document.getElementById("caplock").checked == false) {
            document.getElementById("caplock").checked = true;
            for (let i = 0; i < letterCnt; i++) {
                var letterName = document.getElementsByClassName("letter")[i].innerHTML;
                document.getElementsByClassName("letter")[i].innerHTML = letterName.toUpperCase();
            }
        } else {
            document.getElementById("caplock").checked = false;
            for (let i = 0; i < letterCnt; i++) {
                var letterName = document.getElementsByClassName("letter")[i].innerHTML;
                document.getElementsByClassName("letter")[i].innerHTML = letterName.toLowerCase();
            }
        }
    }
    else {
        document.getElementById("text").innerHTML += chosenBtn;
    }
}
function checkInput(){
    if(document.getElementById("textInput").value == ""){
        alert("type something")
    }
}
function commandBtns(obj) {
    var checkBtn = document.getElementById(obj.id).id;
    var textInput = document.getElementById("textInput").value;
    if (checkBtn === "charAt"){
        if(isNaN(textInput) ){
            document.getElementById("errorText").innerHTML = "Invaild input for charAt()";
        } else if(document.getElementById("textInput").value == "") {
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else{
            alert(document.getElementById("text").innerHTML.charAt(textInput)) ;
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";
        }
        
        
    } else if(checkBtn === "charCodeAt") {
        if(isNaN(textInput) ){
            document.getElementById("errorText").innerHTML = "Invaild input for charCodeAt()";
        } else if(document.getElementById("textInput").value == "") {
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else{
            alert(document.getElementById("text").innerHTML.charCodeAt(textInput)) ;
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";

        }
    } else if(checkBtn === "toUpperCase"){
        alert(document.getElementById("text").innerHTML.toUpperCase());      
    } else if(checkBtn === "toLowerCase"){
        alert(document.getElementById("text").innerHTML.toLowerCase());
    } else if(checkBtn === "trim"){
        alert(document.getElementById("text").innerHTML.replaceAll("&nbsp;","").trim());
    } else if(checkBtn === "includes"){
        if(document.getElementById("textInput").value == ""){
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else {
            alert(document.getElementById("text").innerHTML.includes(textInput));
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";

        }
        
    } else if(checkBtn === "indexOf") {
        if(document.getElementById("textInput").value == ""){
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else {
            alert(document.getElementById("text").innerHTML.indexOf(textInput));
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";

        }
    } else if(checkBtn === "lastIndexOf"){
        if(document.getElementById("textInput").value == ""){
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else {
            alert(document.getElementById("text").innerHTML.lastIndexOf(textInput));
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";

        }
    } else if(checkBtn === "startsWith"){
        if(document.getElementById("textInput").value == ""){
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else {
            alert(document.getElementById("text").innerHTML.startsWith(textInput));
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";

        }
    } else if(checkBtn === "endsWith"){
        if(document.getElementById("textInput").value == ""){
            document.getElementById("errorText").innerHTML = "Please enter an input";
        } else {
            alert(document.getElementById("text").innerHTML.endsWith(textInput));
            document.getElementById("errorText").innerHTML = "Type Number for charAt,charCodeAt,indexOf,lastIndexOf,startsWith,endsWith";

        }
    }
}