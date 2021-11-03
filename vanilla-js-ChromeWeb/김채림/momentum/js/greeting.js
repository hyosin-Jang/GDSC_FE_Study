const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();// 기본 동작은 실행되지 않도록 막고 
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden을 더해줘서 form을 숨기고 
    const username=loginInput.value;//유저의 이름을 변수로 저장해주고, 그 이름은 h1에 넣는 것 
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = `Hello ${username}`; //비어있는  h1 코드에 hello +username이라는 텍스트를 넣어주는 것. 
    //greeting.classList.remove(HIDDEN_CLASSNAME);// h1에서 hidden을 삭제해서 보이게끔. 결국 숨겨지는건 form뿐
    paintGreetings(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername=localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);// null을 반환하면 hidden클래스 이름을 다 지워줘. 왜냐면 form이랑 h1모두 hidden class이므로 
    loginForm.addEventListener("submit", onLoginSubmit);// local storage에 유저 정보가 없다면 form의 submit을 기다림. 

}else{// show the greeting 이름이 있는 상태라면  
    paintGreetings(savedUsername) //local storage에서 유저 정보를 받아서 인자로 넣어줌. 
    //greeting.innerText=`Hello ${savedUsername}`;--> 원래 코드
    //greeting.classList.remove(HIDDEN_CLASSNAME);// 이부분 잘 이해가 안됨.. form은 왜 안떠..? h1에만 텍스트를 넣어줘서??
   
}