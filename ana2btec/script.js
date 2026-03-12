document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    document.getElementById("mensagem-sucesso").textContent =
      "Mensagem enviada com sucesso! Obrigado pelo contato, " + nome + " 😊";
    this.reset();
  } else {
    document.getElementById("mensagem-sucesso").textContent =
      "Por favor, preencha todos os campos.";
  }
});
