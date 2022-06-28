function ToFahrenheit(){
    var c=document.getElementById("c").value;
    
    var f=9/5*c+32;
    
    document.getElementById("f").value=f

    }
    function ToCelsius(){
    var f=document.getElementById("f").value;
        
    var c=(f-32)*(5/9)
    document.getElementById("c").value=c;
    }
   