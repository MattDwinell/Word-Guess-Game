var wordBank = ["ossified","etiolated","exudations","shambolic","psoriatic","syncresis","syzygy","ineluctable","eructations","sciolist","imbroglio","agglutination","bathetic","pusillanimous","nacreous","morbific"] ;
var letterPlaceHolder =[document.getElementById("letter0"), document.getElementById("letter1"),document.getElementById("letter2"),document.getElementById("letter3"),document.getElementById("letter4"),document.getElementById("letter5"),document.getElementById("letter6"),document.getElementById("letter7"),document.getElementById("letter8"),document.getElementById("letter9"),document.getElementById("letter10"),document.getElementById("letter11"),document.getElementById("letter12"),document.getElementById("letter13"),document.getElementById("letter14")];
var userGuess = "";
var winCount = 0;
var lossCount = 0;
var numGuesses = 0;
var wordToGuess="";
var lettersToGuess="";
var lettersLeftToGuess = "";
var userGuesses = [];
var correctGuesses = 0;
var winCountPlaceholder =document.getElementById("wincount");
var lossCountPlaceholder = document.getElementById("losscount");
var lettersGuessedPlaceholder = document.getElementById("lettersguessed");
var guessesPlaceholder = document.getElementById("guessesleft");
var wordPlaceHolder = document.getElementById("wordtoguess");
document.getElementById("startbutton").addEventListener("click", gameStart);
function gameStart(){
    document.getElementById("startdisplay").style.display= "none";
    document.getElementById("gamescaffold").style.display= "block";
         wordToGuess = wordBank[Math.floor(Math.random()*wordBank.length)];
        numGuesses = (wordToGuess.length + 5);
        wordPlaceHolder.textContent =(wordToGuess);
        lettersToGuess = wordToGuess;
       lettersToGuess.split(" ");
       lettersLeftToGuess = lettersToGuess;
        guessesPlaceholder.textContent = ( numGuesses );
        lettersGuessedPlaceholder.textContent = ("Letters Used: none");
        winCountPlaceholder.textContent = (winCount);
        lossCountPlaceholder.textContent=(lossCount);
        for (i=0 ; i<wordToGuess.length; i++){
letterPlaceHolder[i].textContent = lettersToGuess[i];
        }
    }
function game(){
    userGuess = event.key;
    userGuesses.push (userGuess);
    lettersGuessedPlaceholder.textContent = userGuesses.join(" ");
    for (i=0; i<wordToGuess.length; i++){
        if (userGuess == lettersToGuess[i]){
            letterPlaceHolder[i].style.color="green";
correctGuesses ++
        }
    }
        numGuesses -=1;
        guessesPlaceholder.textContent = (numGuesses);
    

    console.log(userGuesses);
    console.log(lettersLeftToGuess);
    if ((correctGuesses >=wordToGuess.length) || (numGuesses <= 0)){
        if (correctGuesses >=wordToGuess.length){
        document.getElementById("gamescaffold").style.display ="none";
        document.getElementById("winlossscreen").style.display="block";
        }
    }
    
}
document.onkeyup = function(event){
    game();
}
