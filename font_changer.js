let select = document.querySelector("select");
let div = document.querySelector("div");
select.addEventListener("change", function () {
  // div.style.fontFamily = select.value;  // inline style
  // document.styleSheets[0].cssRules[0].style.setProperty("font-family", select.value); // css styleSheets
  document.styleSheets[0].cssRules[0].style.fontFamily = select.value; // css styleSheets
});