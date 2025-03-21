const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  const imagensTrocar = [
    "img/bluescreen.png",
    "img/error404.jpg",
    "img/error505.jpg",
  ];

  let indice = 0;

  let numero = Math.random();

  if (numero > 0.75) {
    indice = 3;
    imagem.src = "img/error505.jpg";
  } else if (numero > 0.5) {
    indice = 2;
    imagem.src = "img/error404.jpg";
  } else if (numero > 0.25) {
    indice = 1;
    imagem.src = "img/bluescreen.png";
  }

  imagem.innerHTML = imagensTrocar[indice];
};

const calc = (operador) => {
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;

    case "-":
      resultado = valor1 - valor2;
      break;

    case "*":
      resultado = valor1 * valor2;
      break;

    case "/":
      resultado = valor1 / valor2;
      break;
  }
  frmCalculadora.inResultado.value = resultado;
};
