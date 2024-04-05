function shortword(str){
    let newstr=str.split(" ");
    newstr.sort(function(a,b){
        return a.length-b.length;
    })
    return newstr[0];
}
function random(){
    let x=document.getElementById("string").value;
    let y=shortword(x);
    document.getElementById( "result" ).innerHTML = y;
    console.log(x);
}