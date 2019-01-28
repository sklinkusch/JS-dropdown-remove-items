function removecolor() {
  let color = document.getElementById("colorSelect").value;
  document.getElementById(`${color}`).style.display = "none";
}
