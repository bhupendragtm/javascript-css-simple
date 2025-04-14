let clickCount = 0; const clickLimit = 10;
document.getElementById("clickBtn").addEventListener("click", function () {
    const message = document.getElementById("message");
    message.textContent = "You clicked the button! 🎉";
  });
  
  // Disable right-click
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     console.log("Trying to copy text");
//   });
  
  // Disable keyboard shortcuts for copy, cut, paste
  document.addEventListener("keydown", function (e) {
    // Check for Ctrl/Command + C, X, V
    if ((e.ctrlKey || e.metaKey) && ["c", "x", "v", "a", "u", "s"].includes(e.key.toLowerCase())) {
      e.preventDefault();console.log("Trying to copy text");
    }
  });
  
  // Optional: Alert user
  document.addEventListener("copy", function (e) {
    e.preventDefault();
    console.log("You are trying to Copy the text! Sorry you cannot copy the text!");
  });
  
  document.getElementById("clickBtn").addEventListener("click", function () {
    if (clickCount >= clickLimit) {
        document.getElementById("message").textContent = "You've reached the click limit times to click button!";
        return;
    } 
    clickCount++;
    console.log(clickCount);
    const message = document.getElementById("message");

    if (clickCount === 1) {
        message.textContent = `You clicked the button! 🎉`;
      } else {
        message.textContent = `You clicked the button ${clickCount} times! 🎉`;
      }

      if (clickCount >= clickLimit) {
        message.textContent = " You've reached the click limit times to click button!";
      }
  });