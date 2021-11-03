const title = document.querySelector("div.hello h1");

console.dir(title);
let check = true;
function handleTitleClick() {
    if (check === true){
    title.style.color= "pink";
    check = false;
    }
    else{
        title.style.color = "grey";
        check = true;
    }
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function hadleMouseLeave(){
   title.innerText = "Mouse is gone!";
}

function handleResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOOD!");
}

// title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", hadleMouseLeave);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);