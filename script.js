document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner le formulaire d'inscription
  const registerForm = document.querySelector("#register-form");

  // Vérifier si le formulaire d'inscription existe sur la page
  if (registerForm) {
    // Ajouter un écouteur d'événement pour le formulaire d'inscription
    registerForm.addEventListener("submit", handleRegister);
  }

  // Gérer le formulaire d'inscription
  function handleRegister(event) {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire

    // Récupérer les valeurs des champs du formulaire
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;

    // Vérifier si les champs requis sont remplis
    if (!username || !email || !password || !confirmPassword) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    // Vérifier si le mot de passe et la confirmation du mot de passe correspondent
    if (password !== confirmPassword) {
      alert(
        "Le mot de passe et la confirmation du mot de passe ne correspondent pas."
      );
      return;
    }

    // Envoyer les données du formulaire au serveur
    // Vous pouvez utiliser des techniques comme fetch ou axios pour effectuer cette opération
    console.log("Données d'inscription:", { username, email, password });

    // Réinitialiser le formulaire après une soumission réussie
    registerForm.reset();
  }

  // Sélectionner le formulaire de connexion
  const loginForm = document.querySelector("#login-form");

  // Vérifier si le formulaire de connexion existe sur la page
  if (loginForm) {
    // Ajouter un écouteur d'événement pour le formulaire de connexion
    loginForm.addEventListener("submit", handleLogin);
  }

  // Gérer le formulaire de connexion
  function handleLogin(event) {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire

    // Récupérer les valeurs des champs du formulaire
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    // Vérifier si les champs requis sont remplis
    if (!username || !password) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    // Envoyer les données du formulaire au serveur
    // Vous pouvez utiliser des techniques comme fetch ou axios pour effectuer cette opération
    console.log("Données de connexion:", { username, password });

    // Réinitialiser le formulaire après une soumission réussie
    loginForm.reset();
  }
});
