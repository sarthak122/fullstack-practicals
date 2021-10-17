var data = 0;
var btn = document.getElementById("neg");

function decrease() {
  data = data - 1;
  document.getElementById("count").innerText = data;
  if (data <= 0) {
    btn.disabled = true;
  }
}

function increase() {
  data = data + 1;
  document.getElementById("count").innerText = data;
  if (data > 0) {
    btn.disabled = false;
  }
}
