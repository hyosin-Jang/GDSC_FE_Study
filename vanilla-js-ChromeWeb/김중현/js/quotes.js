const quotes = [
   {
      quote: 'The way to get started is to quit talking and begin doning',
      author: 'Walt Disney',
   },
   {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: 'James Cameron',
   },
   {
      quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
      author: 'Steve Jobs',
   },
   {
      quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      author: 'Benjamin Franklin',
   },
   {
      quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      author: 'Thomas A. Edison',
   },
   {
      quote: 'Success usually comes to those who are too busy to be looking for it.',
      author: 'Henry David',
   },
   {
      quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
      author: 'Jim Rohn',
   },
   {
      quote: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
      author: 'Jim Rohn',
   },
   {
      quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
      author: 'Mark Twain',
   },
   {
      quote: 'I attribute my success to this: I never gave or took any excuse.',
      author: 'Florence Nightingale',
   },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
