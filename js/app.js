const input = document.querySelector("input");
const btn = document.querySelector("button");
const notification = document.getElementById("notification");
const details = document.getElementById("details");

// allows users to hit enter to submit
input.onkeydown = (e) => {
  if (e.keyCode === 13 || e.keyCode === "Enter") {
    btn.click();
  }
};

btn.onclick = () => {
  const inputValue = input.value;
  const result = palindrome(inputValue);
  // output
  if (result) {
    notification.innerHTML = result;
    notification.style.color = "hsl(141, 71%, 48%)";
    details.innerHTML = `"${inputValue}" is a Palindrome!!!`;
  } else {
    notification.innerHTML = result;
    notification.style.color = "hsl(348, 100%, 61%)";
    details.innerHTML = `"${inputValue}" is not a Palindrome!!!`;
  }
  // reset input
  input.value = "";
};

function palindrome(str) {
  const regex = /\W+|_/g;
  const cleanedString = str.replace(regex, "").toLowerCase();
  let reverseString = "";

  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reverseString += cleanedString[i];
  }

  return cleanedString === reverseString;
}
