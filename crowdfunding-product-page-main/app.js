idSuffixArray = [];
let suffix;
let message;
let pledges;
let pledgeInput;
let pledgeBtn;
let img;
let text;
const radios = document.querySelectorAll(".radioCheck");
console.log(radios);

bookmark = document.getElementById("bookmark");
bookmark.addEventListener("click", () => {
  img = document.querySelector(".bookmark-logo");
  text = document.querySelector(".bookmark-description");
  text.innerText = "Bookmarked!";
  text.style.color = "hsl(176, 72%, 28%)";
  text.style.fontWeight = "bold";
});

for (const radio of radios) {
  if (suffix == "d") {
    break;
  }

  radio.addEventListener("click", () => {
    suffix = radio.id.slice(-1);
    console.log(suffix);
    idSuffixArray.push(suffix);
    console.log(idSuffixArray);
    pledges = document.getElementById("pledges" + suffix);
    pledgeInput = document.getElementById("pledgeInput" + suffix);

    for (i = 0; i < idSuffixArray.length; i++) {
      if (radio.checked) {
        if (idSuffixArray[i] == suffix) {
          console.log("from the for loop");

          pledges.style.borderColor = "hsl(176, 50%, 47%)";
          pledges.style.borderWidth = "0.15em";
          pledgeInput.classList.remove("displayNone");
        } else {
          document.getElementById(
            "pledges" + idSuffixArray[i]
          ).style.borderColor = "";
          document.getElementById(
            "pledges" + idSuffixArray[i]
          ).style.borderWidth = "";
          document
            .getElementById("pledgeInput" + idSuffixArray[i])
            .classList.add("displayNone");
        }
      }
    }
  });
}
