let x=parseInt(prompt("Enter a number between 1-100"));
if(x>=1 && x<=100){
    if(x%2==0){
        document.getElementById("check").innerHTML=`The number ${x} is even.`;
    }
    else{
        document.getElementById("check").innerHTML=`The number ${x} is odd.`;
    }
}
else{
    document.getElementById("check").innerHTML=`The number ${x} is not between 1-100`;
}
 