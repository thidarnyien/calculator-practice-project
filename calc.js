let keypad=document.querySelector(".keypad");
let displayBox=document.querySelector(".display");
let operators=["+","-","*","/","%"];
let filterzero=x=>{
    let current=displayBox.innerText;
    let lastChar=current[current.length-1];
    if(current.length>8){
        return false;
    }
    if(current==='0'&& x!='.'){
            clearLast();
        }
    if(operators.includes(x) && operators.includes(lastChar)){
            return false;
    }
        return true;
    
}
let showIndisplay=(x)=> {
    if(filterzero(x)){
        let dis=displayBox.innerText += x;
    }
    
}
let calc= _=> {
    if(!operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
        displayBox.innerText = eval(displayBox.innerText);
    }
}
let clearAll=_=>displayBox.innerText=" ";
let clearLast=_=>displayBox.innerText= displayBox.innerText.substring(0,displayBox.innerText.length-1);
