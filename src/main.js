const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", count);

function count() {
  const input = document.getElementById("input").value;
  const numberOfVowelCount = document.getElementById("number-count");
  let errorMessage = document.getElementById("error");

  let vowels = "aeiouAEIOU";
  let counter = 0;

  if (input === "") {
    errorMessage.innerText = "You need to enter some text";
    setTimeout(() => errorMessage.remove(), 1500);
  } else {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (input[i] == vowels[j]) {
          counter++;
        }
      }
    }
  }

  numberOfVowelCount.innerText = counter;
}
