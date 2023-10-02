const containerEl = document.getElementById("container");
const btnEl = document.getElementById("btn");
const bodyEl = document.querySelector("body");
const titleEl = document.getElementById("title");
let mode;

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
