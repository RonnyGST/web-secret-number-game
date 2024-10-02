
let num = 0;
let randomNumber;
let playerTry = 0//Esta são as tentativas totais do jogador.
let tempPlayerTry = 0;//Esta são as tentativas do jogador da rodada atual.
let playerScore = 0;
let totalCorrectTry = 0;//Guarda o total de acertos do player
let difficult = 10;


//Gera um número aleatório
function numberRandom(x){
    difficult = x;
    
    randomNumber = Math.floor(Math.random() * x);
    let infoResult = document.getElementById('output');
    infoResult.innerHTML = "";
    let userNumber = document.getElementById('tryInput').value = "";
    
    let difficultInfo = document.getElementById('numMax').innerHTML = x;
}


function restart(){
    numberRandom(difficult);
}


function scoreBoardUpdate(){
    let totalTry = document.getElementById('cellA');
    let correctTry = document.getElementById('cellB');
    let correctPercent = document.getElementById('cellC');
    let score = document.getElementById('cellD');
    
    totalTry.innerHTML = playerTry;
    correctTry.innerHTML = totalCorrectTry;
    score.innerHTML = playerScore;
    
    let result = (totalCorrectTry / playerTry) * 100;
    
    correctPercent.innerHTML = "% " + result.toFixed(2);
}


function tryNumber(){
    playerTry++
    tempPlayerTry++
    
    let infoResult = document.getElementById('output');
    let userNumber = document.getElementById('tryInput');
    num = userNumber.value;
    
    scoreBoardUpdate();//Atualizar o score board
    
    if (num < randomNumber){
        infoResult.innerHTML = "O número secreto é maior";
    } else if (num > randomNumber){
        infoResult.innerHTML = "O número secreto é menor";
    } else {
        let msgSucess = (tempPlayerTry > 1) ? `Parabéns! Você descobriu o número secreto com ${tempPlayerTry} tentativas.` : `Impressionante!!! Você descobriu o número secreto com apenas ${tempPlayerTry} tentativa!!!!`;
        infoResult.innerHTML = msgSucess;
        
        playerScore += difficult;
        totalCorrectTry++;
        scoreBoardUpdate();
        
        tempPlayerTry = 0;
    }
}
