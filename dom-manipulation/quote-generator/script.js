const quotes = [
  {
    author: "Maxime Lagace",
    quote: "All that we are is the result of what we have thought"
  },
  {
    author: "Maxime Lagace",
    quote: "All that we are is the result of what we have thought"
  },
  {
    author: "Albert Einstein",
    quote: "I have no special talent. I am only passionately curious."
  },
  {
    author: "Mother Theresa",
    quote: "If you judge people, you have no time to love them."
  },
  {
    author: "Maxime Lagace",
    quote: "All that we are is the result of what we have thought"
  },
  {
    author:"Ssali Jonathan",  
    quote: "Wisely, and slow. They stumble that run fast."
  }
];


const quote_btn=document.querySelector('#quotebtn');
const quoteAuthor=document.querySelector('#quoteAuthor');
const quote=document.querySelector('#quote');

const displayQuote= ()=>{
    let number=Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML=quotes[number].author;
    quote.innerHTML=quotes[number].quote;
    
}
quote_btn.addEventListener('click',displayQuote);