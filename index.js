function counter (){
   let typedText = document.getElementById("textInput").value
   typedText = typedText.toLowerCase(); 
   // Isto muda todas as letras para minúsculas
   typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
   // typedText = typedText.replace(/'/n'/i, ""); 

   // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
   // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
   const letterCounts = {};
   for (let i = 0; i < typedText.length; i++) {
      currentLetter = typedText[i];
      // faça algo com cada letra 
      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } 
      else { 
         letterCounts[currentLetter]++; 
      }
   }
   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }


   let typedTextwords = document.getElementById("textInput").value
   typedTextwords = typedTextwords.toLowerCase(); 
   typedTextwords = typedTextwords.replace(/[^a-z'\s]+/g, ""); 
   words = typedTextwords.split(/\s/);
   //quebra nos espaços
   const wordcounts = {};
   for (let i = 0; i < words.length; i++) {
      currentWord = words[i];
      // faça algo com cada letra 
      if (wordcounts[currentWord] === undefined) {
         wordcounts[currentWord] = 1; 
      } 
      else { 
         wordcounts[currentWord]++; 
      }
   }
   for (let word in wordcounts) { 
      const spanWord = document.createElement("span"); 
      const wordContent = `"${word}": ${wordcounts[word]}, `;
      spanWord.innerText = wordContent; 
      const wordsplace = document.getElementById("wordsDiv");
      wordsplace.appendChild(spanWord); 
   }
}

const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   // teu código vai aqui ... 
   counter()

});






   // for (var prop in letterCounts) {
   //    const lettersDiv = document.getElementById("lettersDiv")
   //    let letterCount = document.createElement('p')
   //    letterCount.innerText = '"'+prop+'"' + ": "+ letterCounts[prop]
   //    lettersDiv.appendChild(letterCount)
   // }



