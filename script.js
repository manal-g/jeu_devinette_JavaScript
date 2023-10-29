//charger le fichier texte

fetch("liste.txt")
.then(response => response.text())
.then(data =>
    {
        var wordList = data.split("\n")
        var randomIndex = Math.floor(Math.random() * wordList.length)
        const wordToGuess = wordList[randomIndex]

       // alert(wordToGuess)


        // alert(wordToGuess)

        var wordLength = wordToGuess.length;
        var hiddenWord ="";
        for(var i = 0 ; i < wordLength ; i++)
        {
            hiddenWord += "_"

        }
        document.getElementById("word").innerHTML=hiddenWord

        var guessInput = document.getElementById("guess")
        var submitButton = document.getElementById("submit")
        var result = document.getElementById("result")
        var link = document.getElementById("link")

        submitButton.onclick = function(){
            var guess = guessInput.value ;
            if(guess.length > 1 || guess.length ===0){
                result.innerHTML = "Entrer une seule lettre";

            }
            else if(wordToGuess.indexOf(guess) === -1)
            {
                result.innerHTML="Mauvaise lettre"
            }
            else{
                for(var i = 0 ; i<wordLength ; i++)
                {
                    if(wordToGuess[i] === guess){
                        hiddenWord =hiddenWord.substr(0 ,i) + guess + hiddenWord.substr(i + 1)
                    }
                }
                document.getElementById("word").innerHTML = hiddenWord;

                if(hiddenWord === wordToGuess){
                    result.innerHTML="Bravo , tu as touve le mot ";
                    guessInput.style.display="none";
                    line.style.display="block";
                }

                else{
                    result.innerHTML="Bonne Lettre";
                }



            }
            guessInput.value="";


        }
    })