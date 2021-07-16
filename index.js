function counter (){
   let typedText = document.getElementById("textInput").value
   typedText = typedText.toLowerCase(); 
   // Isto muda todas as letras para minúsculas
   typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
   typedText = typedText.replace(/" "/i, ""); 
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
   console.log(typedText)

   console.log(letterCounts)
      for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }

   return letterCounts
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





// words = typedText.split(/\s/);
// //quebra nos espaços

