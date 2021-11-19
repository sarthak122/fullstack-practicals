setTimeout(loader, 5000);

function loader() {
  document.getElementsByClassName("loader-container")[0].style.display = "none";
  document.getElementsByClassName("main-container")[0].style.overflow = "auto";
}
