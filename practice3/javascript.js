function findSmallest(){
    let num1=parseInt(document.getElementById("number1").value);
    let num2=parseInt(document.getElementById("number2").value);
    if(num1>num2){
        document.getElementById( "smallest" ).innerHTML = `The smallest number is ${num2}.`;
    }
    else if(num1==num2){
        document.getElementById( "smallest" ).innerHTML = `Both number is Equal.`;
    }
    else{
        document.getElementById( "smallest" ).innerHTML = `The smallest number is ${num1}.`;
    }

}