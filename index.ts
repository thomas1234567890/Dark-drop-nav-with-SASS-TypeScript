// Import stylesheets
import "./styles/style.scss";

console.clear();

////show course cards
const item = document
  .getElementById("courses_nav_item")
  .addEventListener("click", toggle_course_cards);

function toggle_course_cards() {
  console.log("clicked");
  document.getElementById("card_container").classList.toggle("show_cards");
}

////close all menus when users click elsewhere
const app = document.getElementById("app");
app.addEventListener("click", close_all);

function close_all() {
  document.getElementById("card_container").classList.remove("show_cards");
  console.log("cards cleared");
}
