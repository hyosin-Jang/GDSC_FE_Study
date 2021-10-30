const title = document.querySelector("div.hello h1");

console.dir(title);

function handleTitleClick() {
    // error 발생 범위 축소: raw string 변수에 저장
    const clickedClass = "active";
    if (title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
    }
    else {
        title.classList.add(clickedClass);
    }
}

// title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);
