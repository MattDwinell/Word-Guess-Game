var wordBank = ["ossified","etiolated","exudations","shambolic","psoriatic","syncretic","syzygy","ineluctable","eructations","sciolist","imbroglio","agglutination","bathetic","pusillanimous","nacreous","morbific","tumuli","sephardic","recrudescence","amanuensis","onanistic","wen","lethean"] ;
var wordDefinitions = ["to have been turned into bone","to lose substance, to become feeble","fluids emitted by an organism through a pore or a wound","chaotic or disorganized","of psoriasis, characterized by itchiness and flaking skin","a union of two different religions","a pair of connected or corresponding things. Also, a connjuction or opposition, especially of the sun","inescapable, unable to be avoided","burps","someone who pretends to be knowledgeable or well-informed","an extremely confused, complicated, or embrassing situation","the clumping of particles","anticlimactic, dissapointing","cowardly, showing a lack of courage","pearlescent, having a color similiar to that of a pearl","disease causing","ancient burial mounds or barrows. the singular form is tumulus","Pertaining to a subset of Jews whose ancestors lived in Spain","the recurrence of an undesirable condition","a literary or artistic assitant, often one who copies manuscripts","pertaining to masturbation. pointless, self-absorbed, self-congratulatory","Nowadays known as a boil or swelling on the skin, it used to mean an extremely large or crowded city","Causing oblivion or forgetfulness of the past"]
var letterPlaceHolder =[document.getElementById("letter0"), document.getElementById("letter1"),document.getElementById("letter2"),document.getElementById("letter3"),document.getElementById("letter4"),document.getElementById("letter5"),document.getElementById("letter6"),document.getElementById("letter7"),document.getElementById("letter8"),document.getElementById("letter9"),document.getElementById("letter10"),document.getElementById("letter11"),document.getElementById("letter12"),document.getElementById("letter13"),document.getElementById("letter14")];
var leftPicture = document.getElementById("left");
var rightPicture = document.getElementById("right");
var userGuess = "";
var winCount = 0;
var lossCount = 0;
var numGuesses = 0;
var wordToGuess="";
var lettersToGuess="";
var lettersLeftToGuess = "";
var userGuesses = [];
var correctGuesses = 0;
var repeat=false;
var definition =""
var winCountPlaceholder =document.getElementById("wincount");
var lossCountPlaceholder = document.getElementById("losscount");
var lettersGuessedPlaceholder = document.getElementById("lettersguessed");
var guessesPlaceholder = document.getElementById("guessesleft");
document.getElementById("startbutton").addEventListener("click", gameStart);

function gameStart(){
    letterPlaceHolder =[document.getElementById("letter0"), document.getElementById("letter1"),document.getElementById("letter2"),document.getElementById("letter3"),document.getElementById("letter4"),document.getElementById("letter5"),document.getElementById("letter6"),document.getElementById("letter7"),document.getElementById("letter8"),document.getElementById("letter9"),document.getElementById("letter10"),document.getElementById("letter11"),document.getElementById("letter12"),document.getElementById("letter13"),document.getElementById("letter14")];
     repeat = false;
    userGuess="";
    correctGuesses =0;
    userGuesses =[];
    numGuesses=0;
    leftPicture.style.paddingLeft = (0) + "%" ;
    rightPicture.style.paddingRight = (0) + "%" ;
    for (i =0 ; i<letterPlaceHolder.length; i++){
        letterPlaceHolder[i].style.display ="inline-block";
        letterPlaceHolder[i].textContent ="";
        letterPlaceHolder[i].style.color="black";
        letterPlaceHolder[i].style.borderBottom ="3px solid red";
        
    }
    document.getElementById("winlossscreen").style.display="none";
    document.getElementById("startdisplay").style.display= "none";
    document.getElementById("gamescaffold").style.display= "block";
    var wordChooser = Math.floor(Math.random()*wordBank.length);
    definition = wordDefinitions[wordChooser];
         wordToGuess = wordBank[wordChooser];
        numGuesses = (wordToGuess.length + 5);
        lettersToGuess = wordToGuess;
       lettersToGuess.split(" ");
       lettersLeftToGuess = lettersToGuess;
        guessesPlaceholder.textContent = ( numGuesses );
        lettersGuessedPlaceholder.textContent = "none";
        winCountPlaceholder.textContent = (winCount);
        lossCountPlaceholder.textContent=(lossCount);
        for (i=0 ; i<wordToGuess.length; i++){
letterPlaceHolder[i].textContent = lettersToGuess[i];
        }
        
       for (i=0; i<letterPlaceHolder.length; i++){
        if (letterPlaceHolder[i].textContent ==""){
            letterPlaceHolder[i].style.border ="0";
             letterPlaceHolder[i].style.display ="none";
    
        }
    }
    }
function game(){
    userGuess = event.key;
    userGuess=userGuess.toLowerCase();
    userGuesses.push (userGuess);
    
    lettersGuessedPlaceholder.textContent = userGuesses.join(" ");
    for (i=0; i<wordToGuess.length; i++){
        if (userGuess == lettersToGuess[i]){
            letterPlaceHolder[i].style.color="white";
correctGuesses ++
        }
    }
        numGuesses -=1;
        guessesPlaceholder.textContent = (numGuesses);
    leftPicture.style.paddingLeft = (25/(numGuesses+1)) + "%" ;
    rightPicture.style.paddingRight = (25/(numGuesses+1)) + "%" ;
    if ((correctGuesses >= wordToGuess.length) || (numGuesses == 0)){
        if (correctGuesses == wordToGuess.length){
        
        document.getElementById("winorlose").textContent = "You win!"
        winCount ++;
        } else {
            
            document.getElementById("winorlose").textContent = "You lose!";
            lossCount++;
        }
        document.getElementById("gamescaffold").style.display ="none";
        document.getElementById("winlossscreen").style.display="block";
        document.getElementById("endword").textContent = wordToGuess;
        document.getElementById("definition").textContent = definition;
        leftPicture.style.paddingLeft = (25) + "%" ;
        rightPicture.style.paddingRight = (25) + "%" ;
    }
    
}
document.onkeyup = function(event){
    userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    repeat =false;
    if ((event.keyCode >= 65 && event.keyCode <= 90) && (wordToGuess.length > 0)){
        for (i=0; i<userGuesses.length;i++){
            if (userGuess==userGuesses[i]){
                repeat=true;
            }
        }
        if (repeat == false){
    game();
        }
    }
}
document.getElementById("restartbutton").addEventListener("click", gameStart);

