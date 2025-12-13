let buttons= document.getElementsByClassName("btn");
let screenSection=document.querySelector(".screenSection");


const displayvalue=(value)=>{
    screenSection.innerText+=value;  
}

for (let btn of buttons){
    btn.addEventListener("click",(e)=>{
    let btnValues =e.target.innerText;
    let evaluate;
    if (btnValues=="="){
    try{
        
        evaluate=eval(screenSection.innerText);
    }
    catch{
        evaluate="";
    }
    console.log(evaluate);
    screenSection.innerText="";
    displayvalue(evaluate);
    }else if (btnValues=="C"){
        screenSection.innerText="";
    } else{
    console.log(btnValues);
    displayvalue(btnValues);
        }

        }) 
}

