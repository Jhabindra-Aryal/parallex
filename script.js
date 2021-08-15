const parallex = document.getElementById("Parallex");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  console.log(offset);
  console.log("offset", offset * 0.7);
  parallex.style.backgroundPositionY = offset * 0.7 + "px";
});
