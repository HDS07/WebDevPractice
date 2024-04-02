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
function fun2(){
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
        result='You win.';
    }
    else if(compchoose==='scissors'){
        result='You lose.';
    }
    else if(compchoose==='paper'){
        result='Tie.';
    }
    alert(`You choose paper.Computer choose ${compchoose}.${result}`);
}
function fun3(){
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
        result='You lose.';
    }
    else if(compchoose==='scissors'){
        result='Tie.';
    }
    else if(compchoose==='paper'){
        result='You  win.';
    }
    alert(`You choose scissors.Computer choose ${compchoose}.${result}`);
}