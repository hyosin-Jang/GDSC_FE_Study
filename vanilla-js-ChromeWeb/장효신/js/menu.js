document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".web-menu").addEventListener("click", function (e) {
    if (document.querySelector(".menuwrap").classList.contains("on")) {
      //메뉴닫힘
      document.querySelector(".menuwrap").classList.remove("on");
    } else {
      //메뉴펼처짐
      document.querySelector(".menuwrap").classList.add("on");
    }
  });
});
