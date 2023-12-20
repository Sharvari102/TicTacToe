let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was click")
        if(turn0){
            box.innerText="O"
            // console.log("O");
            turn0=false;
        }
        else{
            box.innerText="X";
            // console.log("X")
            turn0=true;
        }
        box.disabled=true;
        count++;
        //console.log('count->'+count);
        let isWinner=checkWinner();
        console.log('count-->'+count,isWinner);
        if(count===9 && !isWinner && isWinner!=undefined){
            gameOver();
            count=0;
        }
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        // box.innerText="";
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText ='Congratulation '+ winner +",you won!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    
    
};
const gameOver=()=>{
    msg.innerText="Game Over,Play again";
    msgContainer.classList.remove("hide");
    disableBoxes();
    

};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log("pattern0:"+boxes[pattern[0]]);
        // console.log("pattern1:"+boxes[pattern[1]]);
        // console.log("pattern2:"+boxes[pattern[2]]);
    let posVal1=boxes[pattern[0]].innerText;
    let posVal2=boxes[pattern[1]].innerText;
    let posVal3=boxes[pattern[2]].innerText;

    if(posVal1!="" && posVal2!="" && posVal3!=""){
        console.log('cpunt111-->'+count);
        console.log("position",posVal1,posVal2,posVal3);

        if(posVal1===posVal2 &&posVal2===posVal3){
            // console.log("Winner",posVal1);
            showWinner(posVal1);
            return true;
        }
        else if(posVal1 === posVal2 && posVal2 !== posVal3 && count === 9)
        {
            return false;
        }
        //return false;

    }
    
    
    }
};

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;

};

newGame.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);


