let length=parseInt(prompt("Enter The String length :- "))

let paraEL=document.getElementById("paraele")
console.log(paraEL)

const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqqrstuvwxyz0123456789"
function generatestr(length){
    let res=" "
    for(let i=0 ; i<length ; i+=1){
        res+=characters.charAt(Math.floor(Math.random()*62));
    }
    paraEL.textContent+=res
}

generatestr(length)