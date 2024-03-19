function longword(str){
    let newstr=str.split(" ");
    newstr.sort(function(a,b){
        return b.length-a.length;
    })
    return newstr[0];
}
function random(){
    let x=document.getElementById("string").value;
    let y=longword(x);
    document.getElementById( "result" ).innerHTML = y;
    console.log(x);
}