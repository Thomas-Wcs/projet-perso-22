const displayEro = document.querySelector(".activity-container2");
const buttonOui = document.getElementById("btn-1");
const buttonNon = document.getElementById("btn-2");
buttonOui.addEventListener("click", () => {
  displayEro.style.display = "flex";
});
buttonNon.addEventListener("click", () => {
  window.alert("Accès refusé , reviens dans quelques années :)");
  displayEro.style.display = "flex";
  displayEro.innerHTML = `
  <div class ="alertDivCreat"><h2> ACCES REFUSEE</h2></div>
  `;
});
