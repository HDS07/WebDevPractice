function fun1(){
    let compmove=Math.random();
    let compchoose='';
    if(compmove>=0&&compmove<1/3){
        compchoose='rock';
    }
    else if(compmove>=1/3&&compmove<2/3){
        compchoose='scissors';
    }
    else if(compmove>=2/3&&compmove<1){
        compchoose='paper';
    }
    
    let result='';
    if(compchoose==='rock'){
        result='Tie.';
    }
    else if(compchoose==='scissors'){
        result='You win.';
    }
    else if(compchoose==='paper'){
        result='You lose';
    }
    alert(`You choose rock.Computer choose ${compchoose}.${result}`);
}