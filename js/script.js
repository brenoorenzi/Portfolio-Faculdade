const pesquisarInput = document.getElementById("principal__Input");

pesquisarInput.addEventListener("keydown", (event) => {
  const valorDaPesquisa = pesquisarInput.value;
  pesquisar(event, valorDaPesquisa);
});

function pesquisar(event, valor) {
  if (event.key == "Enter") {
    switch (valor.toLowerCase()) {
      case "ezequiel" || "ezequiel magoga" || "mano z":
        window.location.href = "../pages/ezequiel-inicio.html";
        break;
      case "breno" || "breno Gonçalves" || "colegial":
        window.location.href = "../pages/breno-inicio.html";
        break;
      default:
        window.location.href = "../pages/errodepesquisar.html";
        break;
    }
  }
}
