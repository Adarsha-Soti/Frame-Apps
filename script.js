let screenSection=document.querySelector(".screenSection");
let buttons=document.getElementsByClassName("buttonSection");

const operatorBtn=["x","%","+","-","/"];
let lastClickedbtn=null;

const display =(values)=>{
screenSection.innerText+=values;
}

function clickedEvent(){
    for (let btn of buttons){
       btn.addEventListener("click",(e)=>{
           let clickedBtn=e.target.innerText;
        // just to get value outside this fucking function
           lastClickedbtn=clickedBtn;
           //once button is clicked it would check conditions
            checkCondition(clickedBtn);
        }
    )
    }
    
};
// to check conditions 
const checkCondition=(btnValue)=>{
    let lastChar=(screenSection.innerText).slice(-1);
    let currentText= screenSection.innerText;
    let newText=currentText.slice(0,-1);

    // if(operatorBtn.includes(lastChar)&& operatorBtn.includes(lastClickedbtn)){
    //  return;
    // }else{
        if (btnValue=="x"){
        display("*")
        }else if(btnValue=="C") {
            screenSection.innerText=null;
        }else if(btnValue=="DEL") {
        screenSection.innerText=newText;  
        }
        else if (btnValue=="="){
            if (lastClickedbtn!=operatorBtn){
                let evaluate= eval(screenSection.innerText).toString();
                screenSection.innerText=null;
                display(evaluate);
            }
            
        }
        else{
            display(lastClickedbtn);
        };
    // }
        
}
clickedEvent();
