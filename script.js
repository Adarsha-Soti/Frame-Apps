let screenSection=document.querySelector(".screenSection");
let buttons=document.getElementsByClassName("buttonSection");

const operatorBtn=["*","%","+","-","/"];
const allowedKey="1234567890";
let lastClickedbtn=null;

const display =(values)=>{
screenSection.innerText+=values;
}

function clickedEvent(){
    for (let btn of buttons){
       btn.addEventListener("click",(e)=>{
           let clickedBtn=e.target.innerText;
           if (clickedBtn=="x"){
            clickedBtn="*";
           }
        // just to get value outside this fucking function
           lastClickedbtn=clickedBtn;
           //once button is clicked it would check conditions
            checkCondition(lastClickedbtn);
        }
    )
    }
    document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(allowedKey.includes(e.key)||operatorBtn.includes(e.key)){
        display(e.key);
    }
    else if (e.key=="Enter"){
        checkCondition("=");
    }else if (e.key=="Backspace"){
        checkCondition("DEL");
    }else return;
    });
    
};
// to check conditions 
const checkCondition=(btnValue)=>{
    let lastChar=(screenSection.innerText).slice(-1);
    let currentText= screenSection.innerText;
    let newText=currentText.slice(0,-1);

     if(operatorBtn.includes(lastChar)&& operatorBtn.includes(lastClickedbtn)){
      return;
    }else if(btnValue=="C") {
        screenSection.innerText=null;
    }else if(btnValue=="DEL") {
    screenSection.innerText=newText;  
    }else if (btnValue=="="){
        if (lastClickedbtn!=operatorBtn){
            let evaluate= eval(screenSection.innerText).toString();
            screenSection.innerText=null;
            display(evaluate);
        } else return;
        
    }
    else{
        display(lastClickedbtn);
    };
        
}
clickedEvent();
