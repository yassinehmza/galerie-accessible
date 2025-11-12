// Fonction appelée au survol ou focus
function upDate(previewPic) {
  console.log("Événement déclenché : survol ou focus sur une image");
  const imageDiv = document.getElementById("image");
  const img = previewPic.querySelector("img");

  // Change le texte et l’image d’arrière-plan
  imageDiv.innerHTML = img.alt;
  imageDiv.style.backgroundImage = "url('" + img.src + "')";
}

// Fonction appelée quand la souris ou le focus quitte l’image
function unDo() {
  console.log("Événement déclenché : sortie de l’image");
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "Survolez ou sélectionnez une image pour l’afficher ici";
  imageDiv.style.backgroundImage = "url('')";
}

// Fonction appelée au chargement de la page
function addTabFocus() {
  console.log("Page chargée — ajout automatique du tabindex");
  const figures = document.querySelectorAll(".preview");

  // Ajout d’un tabindex à chaque image
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}
