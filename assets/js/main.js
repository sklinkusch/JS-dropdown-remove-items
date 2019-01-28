function removecolor() {
  const selectedOption = document.getElementById("colorSelect")
    .selectedOptions[0];
  selectedOption.style.display = "none";
}
