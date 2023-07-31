function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition of given value is"+c
}

function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="Subraction of given is"+c
}

    
function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button3").innerHTML="Subraction of given is"+c
}


function divi(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button4").innerHTML="Division of given is"+c

}

function mod(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a%b;
    document.getElementById("button5").innerHTML="Module of given is"+c

}

function sqr(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value); 
    let c=a**2;
    let d=b**2;
    document.getElementById("button6").innerHTML="square of given is"+c
    document.getElementById("button6").innerHTML="square of given is"+d
}