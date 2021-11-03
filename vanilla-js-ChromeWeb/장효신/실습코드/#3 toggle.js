const title = document.querySelector("div.hello h1");

console.dir(title);

function handleTitleClick() {
    title.classList.toggle("clicked");
}

// title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);
