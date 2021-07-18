const valid = (name, lastname, email, password, cf_password) => {
  if (!name || !email || !password || !lastname)
    return "Remplissez tout les champs requis.";

  if (!validateEmail(email)) return "E-mail invalide.";

  if (password.length < 6)
    return "Le mot de passe doit contenir au moins 6 caractères.";

  if (password !== cf_password) return "Mot de passe incorrect.";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
