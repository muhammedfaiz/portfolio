validate=()=>{
   var err=document.getElementById("err");

    if(document.getElementById("name").value==""){
        err.innerHTML="* please enter the name";
        return false;
    }else if(document.getElementById("mail").value==""){
        err.innerHTML="* please enter the emailid";
        return false;
    }else if(document.getElementById("phone").value==""){
        err.innerHTML="* please enter the number";
        return false;
    }else if(document.getElementById("messages").value==""){
        err.innerHTML="* please sent the message";
        return false;
    }
    
    else{
        document.getElementById("submitted").innerHTML="Messaged successfully"
        return true;
    }
}