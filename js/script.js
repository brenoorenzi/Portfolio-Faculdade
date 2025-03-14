const pesquisarInput = document.getElementById("principal__Input");

const mensagensDeErro = ["ERRO 404"]

pesquisarInput.addEventListener("keydown", (event) => {
  const valorDaPesquisa = pesquisarInput.value;
  pesquisar(event, valorDaPesquisa);
});

function pesquisar(event, valor) {
  if (event.key == "Enter") {
    if (valor.toLowerCase().trim() == "ezequiel" || valor.toLowerCase().trim() == "ezequiel magoga" || valor.toLowerCase().trim() == "mano z") {    
      window.location.href = "../pages/ezequiel-inicio.html";
    } else if (valor.toLowerCase().trim() == "breno" || valor.toLowerCase().trim()== "breno gonçalves" || valor.toLowerCase().trim() == "olha o caminhar do elemento, é um passo bem lento, vai fechando o tempo") {
      window.location.href = "../pages/breno-inicio.html";
    } else {
      mostrarMensagemDeErro()
    }
  }
}

function mostrarMensagemDeErro() {
  var indiceAleatorio = Math.floor(Math.random() * mensagensDeErro.length);
  alert(mensagensDeErro[indiceAleatorio])
}

