let boxes = document.querySelectorAll(".box");
let turn0=true;//for selecting player 1
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
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

let checkwinner=()=>{
    for (let pattern of winPattern){
        console.log(boxes[pattern[0]])
    }
};
