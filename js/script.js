const pesquisarInput = document.getElementById("principal__Input");

const mensagensDeErro = ["SEU OTARO, ESCREVE CORRETO", "OLHA O CAMINHAR DO ELEMENTO< È UM PASSO BEM LENTO, VAI FECHANDO O TEMPO", "IRMÂO, SE N SABE CLICA NOS BOTÕES LI ANIMAL", "BRENO IS COLEGIAL", "AAAAAAAAAAAAAAAAAAA"]

pesquisarInput.addEventListener("keydown", (event) => {
  const valorDaPesquisa = pesquisarInput.value;
  pesquisar(event, valorDaPesquisa);
});

function pesquisar(event, valor) {
  if (event.key == "Enter") {
    if (valor.toLowerCase() == "ezequiel" || valor.toLowerCase() == "ezequiel magoga" || valor.toLowerCase() == "mano z") {
      window.location.href = "../pages/ezequiel-inicio.html";
    } else if (valor.toLowerCase() == "breno" || valor.toLowerCase() == "breno gonçalves" || valor.toLowerCase() == "olha o caminhar do elemento, é um passo bem lento, vai fechando o tempo") {
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