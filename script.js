const rockBtn=document.querySelector('.rock-btn');
const paperBtn=document.querySelector('.paper-btn');
const scissorBtn=document.querySelector('.scissors-btn');
const userHandsIcon=document.querySelector('.user.hand-icon');
const compHandsIcon=document.querySelector('.computer.hand-icon');
const userScore=document.querySelector('.user-score');
const compScore=document.querySelector('.computer-score');
const result=document.querySelector('.result');
let userWins=0;
let compWins=0;
const rock='👊';
const paper='🤚';
const scissor='🤞';
function gameResult(a,b){
    if(a===b){
        return "Draw";
    }
    else if(a==rock && b==scissor){
        userWins++;
        userScore.innerText=userWins;
        return "User Wins";
    }
    else if(a==paper && b==rock){
        userWins++;
        userScore.innerText=userWins;
        return "User Wins";
    }
    else if(a==scissor && b==paper){
        userWins++;
        userScore.innerText=userWins;
        return "User Wins";
    }
    else{
        compWins++;
        compScore.innerText=compWins;
        return "Computer Wins";
    }
}
function startGame(emoji){
    result.innerText="";
    userHandsIcon.innerText='🤜';
    compHandsIcon.innerText='🤛';
        userHandsIcon.classList.add('shakeUserHands');
        compHandsIcon.classList.add('shakeComputerHands');
            setTimeout(()=>{
            userHandsIcon.classList.remove('shakeUserHands');
            compHandsIcon.classList.remove('shakeComputerHands');
            userHandsIcon.innerText=emojis[emoji];
            let random=Math.floor(Math.random()*3);
            compHandsIcon.innerText=emojis[random];
        let finalResult=gameResult(userHandsIcon.innerText,compHandsIcon.innerText);
        result.innerText=finalResult;
        },2000);
}
const emojis=[rock,paper,scissor];
rockBtn.addEventListener('click',()=>{
        startGame(0);

})
paperBtn.addEventListener('click',()=>{
startGame(1);

})
scissorBtn.addEventListener('click',()=>{
startGame(2);
})