document.getElementById("filter").onclick = () => {
  let filterSection = document.getElementById("form");
  if (filterSection.style.display == "flex") {
    filterSection.style.display = "none";
  } else {
    filterSection.style.display = "flex";
  }
};
