function fun(){
    let compmove=Math.random();
    if(compmove>=0&&compmove<1/3){
        alert( "Computer chose Rock");
    }
    else if(compmove>=1/3&&compmove<2/3){
        alert( "Computer chose scissors");
    }
    else if(compmove>=2/3&&compmove<1){
        alert( "Computer chose paper");
    }
}