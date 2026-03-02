
let numbers = document.querySelectorAll(".rating-btn");
let submit = document.querySelector(".submit-btn");

let ratingCard = document.getElementById("rating-card");
let thankCard = document.getElementById("thank-card");

let result = document.querySelector(".result");


let chosenNumber = "";


numbers.forEach(function(btn) {
  btn.addEventListener("click", function() {
    chosenNumber = this.innerText;

    numbers.forEach(function(b) {
      b.classList.remove("active");
    });

    this.classList.add("active");
  });
});



submit.addEventListener("click", function() {

  if (chosenNumber !== "") {

    ratingCard.style.display = "none";

    thankCard.style.display = "block";

    result.innerText = "You selected " + chosenNumber + " out of 5";
  }

});
