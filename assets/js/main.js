function removecolor() {
  const selectlist = document.getElementById("colorSelect");
  const selected = selectlist.selectedIndex;
  selectlist.remove(selected);
  // Alternative Option with display: none
  // const selectedOption = document.getElementById("colorSelect")
  //   .selectedOptions[0];
  // selectedOption.style.display = "none";
}
