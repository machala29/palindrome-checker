const textInput = document.querySelector("input");
const checkBtn = document.querySelector("button");
const info = document.querySelector("#info");
checkBtn.addEventListener("click", function() {
  let filterText = document.getElementById("text").value;
   checkPalindrome(filterText);
 });

 function checkPalindrome(filterText) {
  let text_now = filterText.replace(/[\W_]/g, "") .toLowerCase();
  let text_okay = text_now.toLowerCase()
  .split("")
  .reverse()
  .join("");
  if(filterText != text_okay) {
    info.style.display = "block";
      info.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome!`;
  } else 
    return info.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;

 }

/*let filterText = " "



checkBtn.addEventListener("click", () => {
  let reverseInput = filterText.split("").reverse().join("");
  info.style.display = "block";
  if(filterText != reverseInput) {
      return info.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome!`;
  } else
      return info.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;
});



 function palindrome(str) {
    return str.replace(/[\W_]/g, "") .toLowerCase() ===
    str.replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
  };
  
  
 // palindrome("eye");
 // console.log(eye);

 checkBtn.addEventListener("click", () => 
*/

  