let boxes = document.querySelectorAll(".box");
let turn0=true;//for selecting player 1
let count=0;
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newbutton=document.querySelector("#newgm")
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0){
            box.innerText="0";
            box.style.color="violet"
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkwinner();
        if(count===9 && !isWinner){
            gamedraw();
        }
    });
    
});

let winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8]
]

let showWinner =(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
};

const gamedraw=()=>{
    msg.innerText=`draw`;
    msgcontainer.classList.remove("hide");
    disable();
}

let checkwinner=()=>{
    for (let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1==pos2 && pos2==pos3 && pos1==pos3){
                showWinner(pos1);
            }
        
        
    }
}
};

let disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enable=()=>{
    turn0=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }

}

let newgame=()=>{
    turn0=true;
    enable();
}

newbutton.addEventListener("click",newgame);