var containerEl = document.getElementById("container");
var btnEl = document.getElementById("btn");
var bodyEl = document.querySelector("body");
var titleEl = document.getElementById("title");
var mode;

if (localStorage.getItem("Mode") == "dark") {
  updatePage();
}

function updatePage() {
  containerEl.classList.toggle("active-container");
  btnEl.classList.toggle("active-btn");
  bodyEl.classList.toggle("active-body");
  titleEl.classList.toggle("active-title");
  if (containerEl.classList.contains("active-container")) {
    mode = "dark";
  } else {
    mode = "white";
  }
}

containerEl.addEventListener("click", () => {
  updatePage();
  localStorageStatus();
});

function localStorageStatus() {
  localStorage.setItem("Mode", mode);
}
