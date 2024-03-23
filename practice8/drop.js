let ageEL=document.getElementById("age-el")

function ageoption(){
    for(let i=1 ; i<100 ; i++){
        ageEL.innerHTML+="<option>"+i+"<option>"
    }
}
ageoption()