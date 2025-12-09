console.log("Le script est chargé !");

/* ... vos styles existants ... */

body.dark-mode {
  background-color: #2c3e50;
  color: #ecf0f1;
}

body.dark-mode .container {
  background-color: #34495e;
  /* Ajoutez d'autres styles pour le dark mode si nécessaire */
}

body.dark-mode a {
  color: #3498db;
}
// --- LOGIQUE DU DARK MODE ---
// 1. CIBLER
const themeButton = document.querySelector('#theme-toggle');

// On vérifie si le bouton existe sur la page actuelle
if (themeButton) {
  // 2. ÉCOUTER
  themeButton.addEventListener('click', () => {
    // 3. MANIPULER
    // On ajoute/retire la classe 'dark-mode' sur le body
    document.body.classList.toggle('dark-mode');
  });
}
document.body.classList.toggle('dark-mode');