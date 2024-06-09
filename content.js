// content.js

function translateText(text, targetLanguage) {
    const apiKey = 'AIzaSyChv5BMBZvygaPMtLsoL9YvUtoZYCYfHFQ';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => data.data.translations[0].translatedText)
    .catch(error => console.error('Error:', error));
  }
  
  function translatePage() {
    const elements = document.body.querySelectorAll('*');
    elements.forEach(element => {
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        translateText(element.innerText, 'en').then(translatedText => {
          element.innerText = translatedText;
        });
      }
    });
  }
  
  translatePage();
  