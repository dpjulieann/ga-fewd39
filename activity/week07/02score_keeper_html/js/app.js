var score = 0;

document.querySelector("#increase-5").addEventListener("click", function(){
  score += 5;
  changeScore();
});

// this can be written like this
document
.querySelector("#decrease-5")
.addEventListener("click", function(){
  score -= 5;
  changeScore();
});

document
.querySelector("#submit-custom-score")
.addEventListener("click", function() {
  var newScore = document.querySelector("#custom-score").value;
  score = parseInt(newScore);
  // score = newScore;

  // clear existing value
  document.querySelector("#custom-score").value = "";

  changeScore();
});

function changeScore() {
  if (score < 0) {
    return false;
  }
  else {
    document.querySelector("#score").textContent = score + " Points";
  }
}
