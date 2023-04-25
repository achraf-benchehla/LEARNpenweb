const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

// Sélectionnez l'élément HTML où vous souhaitez appliquer l'effet de machine à écrire
var typewriterElement = document.getElementById('h1');

// Initialisez la bibliothèque typewriter
var typewriter = new Typewriter(typewriterElement, {
  loop: true, // Définissez cette option sur "false" si vous ne souhaitez pas que l'effet se répète
});

// Ajoutez du texte à l'effet de machine à écrire
typewriter
  .typeString("welcome to LEAR4penweb")
  .pauseFor(1000) // Fait une pause de 1 seconde
  .deleteAll()
  .typeString("created by achraf benchehla")
  .pauseFor(1000)
  .deleteAll()
  .typeString(" TIBA MOHAMMED ZAID TAHA")
  .pauseFor(1000)
  .start()