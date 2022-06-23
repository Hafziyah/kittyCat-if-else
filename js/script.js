let showCat = document.querySelector(".show-cat");
let cat = document.querySelector(".cat");

showCat.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    showCat.innerText = "Wait, come back!";
    showCat.classList.add("disappear");
  } else {
    cat.classList.add("show");
    showCat.innerText = "Shoo, cat!!";
    showCat.classList.remove("disappear");
  }
});
