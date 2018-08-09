document.getElementById("findButton").onclick = function() {
    let typedText = document.getElementById("input").value;
    function alphabetize(letters) {
        return letters.toLowerCase().split("").sort().join("").trim();
    }
    
    groupedAnagrams = [];
    for(let word of words) {
        let orderedTypedText = alphabetize(typedText)
        if (orderedTypedText.length == word.length && orderedTypedText == alphabetize(word)) {
            groupedAnagrams.push(word);
        }
    }
    
    let span = document.createElement("span");
    let text = document.createTextNode(groupedAnagrams.join(", "));
    span.appendChild(text);
    let placeHere = document.getElementById("results");
    placeHere.appendChild(span);
 }
 

 // for displaying words with most matches

 document.getElementById("mostMatched").onclick = function() {
     let max = 5;
     let dictionary = {};

     for (let word of words) {
         let alphaWord = alphabetize(word);
         if (dictionary[alphaWord] === undefined) {
             dictionary[alphaWord] = [word];
         } else {
             dictionary[alphaWord].push(word);
         }
     }

     for (let x in dictionary) {
         let wordInput = dictionary[x];
         if (wordInput.length >= max) {
             showResult(wordInput);
         }
     }

     function showResult(wordInput) {
         let divResult = document.getElementById("matchingWords");
         let stringResult = wordInput.join(", ");
         let textNodeResult = document.createTextNode(stringResult);
         let textResult = document.createElement("h5");

         textResult.appendChild(textNodeResult);
         divResult.appendChild(textResult);
     }

     function alphabetize(letters) {
        return letters.toLowerCase().split("").sort().join("").trim();
    }
 }