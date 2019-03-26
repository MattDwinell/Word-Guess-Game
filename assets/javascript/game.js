var wordBank = ["ossified","etiolated","exudations","shambolic","psoriatic","syncresis","syzygy","ineluctable","eructations","sciolist","imbroglio","agglutination","bathetic","pusillanimous","nacreous","morbific"]

var winCount = 0;
var lossCount = 0;
var numGuesses = 0;
var wordToGuess="";
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
        guessesPlaceholder.textContent = ("Number of guesses remaining: " + numGuesses );
        lettersGuessedPlaceholder.textContent = ("Letters Used: none");
        winCountPlaceholder.textContent = (winCount);
        lossCountPlaceholder.textContent=(lossCount);
console.log(numGuesses);
console.log(wordToGuess);
}
function game(){
    console.log(wordToGuess);
}
document.onkeyup = function(event){
    game();
}