var x=parseInt(prompt("Enter a number"));
let rem=0,rev=0;
let old=x;
while(x!=0){
    rem=x%10;
    rev=rev*10+rem;
    // x=parseInt(x/10);
    x=x/10;
}
if(old===rev){
    document.getElementById( "result" ).innerHTML = `The no. ${old} is palindrome`;
    console.log("Palin");
}else{
    document.getElementById( "result" ).innerHTML = `The no. ${old} is not palindrome`;
    console.log("Not Palin");
}
