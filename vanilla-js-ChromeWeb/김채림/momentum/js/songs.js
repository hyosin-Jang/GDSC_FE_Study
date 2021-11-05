const songs = [
    {
        song:"Lover Like me",
        singer: "-CL-",

    },
    {
        song:"Jelly mood",
        singer: "-omyo-",

    },
    {
        song:"E.T.A",
        singer: "-Justin Bieber-",

    },
    {
        song:"S.A.D",
        singer: "-The Volunteers-",

    },
    {
        song:"잠깐만",
        singer: "-Big Naughty-",

    },
    {
        song:"눈",
        singer: "-새소년-",

    },
    {
        song:"안전지대",
        singer: "-이하이-",

    },
    {
        song:"Antifreeze",
        singer: "-백예린-",

    },
    {
        song:"I like that",
        singer: "-Bazzi-",

    },
    {
        song:"Light",
        singer: "-Colde-",

    }
];
const song=document.querySelector("#song span:first-child");
const singer=document.querySelector("#song span:last-child");
const todaysSong=songs[Math.floor(Math.random()*songs.length)];
song.innerText=todaysSong.song;
singer.innerText=todaysSong.singer;