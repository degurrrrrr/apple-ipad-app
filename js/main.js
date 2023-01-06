const basketStarterEl = document.querySelector(".basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

function showBasket() {
  basketEl.classList.add("show");
}

function hideBasket() {
  basketEl.classList.remove("show");
}
basketStarterEl.addEventListener("click", function (event) {
  event.stopPropagation(); //2.
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});

basketEl.addEventListener("click", function (event) {
  event.stopPropagation(); // 드롭다운 안에 클릭해도 안꺼지게 만들기
});

// basketEl 바깥을 눌러도 창이 꺼지게 만들기
window.addEventListener("click", function () {
  hideBasket(); //1. 다른데 클릭해도 안켜짐
});

// SEARCH
const headerEl = document.querySelector("header");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchEl = document.querySelector(".search-wrap");
const closerEl = searchEl.querySelector(".search-closer");
const inputEl = searchEl.querySelector("input");

function openSearch() {
  headerEl.classList.add("searching");
  searchEl.classList.add("show");
}

function closeSearch() {
  searchEl.classList.remove("show");
  headerEl.classList.remove("searching");
  inputEl.value = "";
}

searchStarterEl.addEventListener("click", function (event) {
  event.stopPropagation();
  openSearch();
});

searchEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

closerEl.addEventListener("click", function () {
  closeSearch();
});

window.addEventListener("click", function () {
  closeSearch();
});
