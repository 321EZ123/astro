<!DOCTYPE html>
<html>
<head>
<title>Typing Animation</title>
<style>
body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
}

#container {
  text-align: center;
}

#subtitle {
  font-size: 2em;
  font-weight: bold;
  color: #333;
}
</style>
</head>
<body>
<div id="container">
  <h2 id="subtitle"></h2>
</div>
<script>
const say = [
  "Unblocking, At your fingertips.",
  "Get to gaming on astro!",
  "Watch your favorite movies, on astro.",
  "Use everyday apps on astro.",
  "Use helpful tools, on astro.",
  "Get cheats on astro.",
  "Complete major assignments on astro.",
  "Be free of filters, on astro.",
  "Search anonymously, on astro."
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let isPaused = false;
const typingSpeed = 100;
const deleteSpeed = 50;
const pauseDuration = 2000;

function typeText() {
  const subtitle = document.getElementById("subtitle");
  const currentText = say[currentPhrase];
  
  if (!isDeleting && currentChar <= currentText.length) {
    subtitle.textContent = currentText.substring(0, currentChar);
    currentChar++;
    setTimeout(typeText, typingSpeed);
  } else if (!isDeleting && !isPaused) {
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      isDeleting = true;
      typeText();
    }, pauseDuration);
  } else if (isDeleting && currentChar >= 0) {
    subtitle.textContent = currentText.substring(0, currentChar);
    currentChar--;
    setTimeout(typeText, deleteSpeed);
  } else if (isDeleting && currentChar < 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % say.length;
    currentChar = 0;
    setTimeout(typeText, typingSpeed);
  }
}

// Start the typing animation when the page loads
window.addEventListener('load', typeText);
</script>
</body>
</html>