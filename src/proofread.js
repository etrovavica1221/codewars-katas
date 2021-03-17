function proofread (str) {
    let phrase;
    phrase = str.toLowerCase();
    phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1);
    
    for (let i = 0; i < phrase.length; i++) { 
      if (phrase[i] === 'i' && phrase[i + 1] === 'e') {
        phrase = phrase.replace(phrase[i] + phrase[i + 1], 'ei');
      }
    }
    
    if (phrase.includes('.')) {
      phrase = phrase.slice(0, phrase.indexOf('.') + 2) + phrase.charAt(phrase.indexOf('.') + 2).toUpperCase() + phrase.slice(phrase.indexOf('.') + 3);
    }
  
    return phrase;
  } 

  module.exports = proofread;