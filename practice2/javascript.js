function calculate() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var opp =document.getElementById("operator").value;
    if(opp==="+"){
    var sum = num1 + num2;
    document.getElementById("result").innerText =sum;
    }
    else if(opp==="-"){
    var sub = num2 - num1;
    document.getElementById("result").innerText =sub;  
    }
  }