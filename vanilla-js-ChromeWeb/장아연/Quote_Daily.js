/*Daily report*/


const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.getElementById("greeting")


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username=loginInput.value;
  localStorage.setItem("USERNAME_KEY",username);
  paintGreetings(username);



}


function paintGreetings(username){
  greeting.innerText=`${username}\n Daily \nReport`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername=localStorage.getItem("USERNAME_KEY");
if(savedUsername===null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}
else{
  //show the greetings
  paintGreetings(savedUsername);
  


}


/* Daily Quote*/

const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

quote_block=document.querySelectorAll(".quote__container div")
const quote=quote_block[0]
const author=quote_block[1]

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote
author.innerText=todaysQuote.author