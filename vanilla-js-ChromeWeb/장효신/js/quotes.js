const quotes = [
    {
        quote: "인생은 해결해야 할 문제가 아니라 경험해야 할 여정입니다.",
        author: "곰돌이 푸",
    },
    {
        quote: "기억해. 너는 세상을 빛으로 채울 수 있는 존재라는 걸",
        author: "백설공주",
    },
    {
        quote: "너를 찾기 위해 지평선을 넘었어",
        author: "모아나",
    },
    {
        quote: "간절히 바라는 마음이 있어야 마법이 일어날 수 있어",
        author: "신데렐라",
    },
    {
        quote: "오늘의 특별한 순간들은 내일의 추억이야",
        author: "알라딘",
    },
    {
        quote: "누구나 뭐든지 될 수 있으니까. 그 누구도 내 꿈에 대해 이러쿵저러쿵 못해!",
        author: "주토피아",
    },
    {
        quote: "눈을 감지 말고 똑바로 봐. 두려움의 실체는 생각과 다를 수 있어",
        author: "니모를 찾아서",
    },
    {
        quote: "익숙한 곳을 벗어나 봐. 그것에 대한 보상은 분명 가치가 있을 거야",
        author: "라푼젤",
    },
    {
        quote: "사랑이란, 다른 사람이 원하는 걸 내가 원하는 것보다 우선순위에 두는 거야",
        author: "겨울 왕국",
    },
    {
        quote: "역경을 이겨내고 핀 꽃이 제일 아름다운 꽃이니라",
        author: "뮬란",
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
