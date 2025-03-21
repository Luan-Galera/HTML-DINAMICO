//Atividade 01
const ligar = () => {
  let lampada = document.getElementById("lampada");

  // lampada.src="img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};
//--------------------------------------------

//Atividade 02
const gerarImagem = () => {
  let imagens = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  if (imagens <= 0)
    alert("O campo quantidade não pode estar nulo ou negativo!");
  else {
    for (let index = 1; index <= imagens; index++) {
      canvas.innerHTML += "<img src='img/logo.png' alt=''>";
    }
  }
};
//--------------------------------------------

//Atividade 03
const validaForm = () => {
  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";

  let nome = inCli;
  let data = inData;
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;

  switch (true) {
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value == "" ||
      mail.value == "" ||
      prod.value == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O campo não pode estar vazio!";
      break;

    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";

      break;

    case nome.value.trim().length < 5 || prod.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;

    default:
      break;
  }
};
//--------------------------------------------

//Atividade 04
const calcular = () => {
  let vpedido = inValorPedido.value;
  let pdesconto = inPercDesc;
  let vdesconto = inValDesc;
  let vliquido = inValFinal;

  if (vpedido >= 2000) pdesconto = 1.5;
  else if (vpedido >= 1500) pdesconto = 1.0;
  else if (vpedido >= 1000) pdesconto = 0.8;
  else if (vpedido >= 500) pdesconto = 0.5;
  else pdesconto = 0;

  vdesconto = (vpedido * pdesconto) / 100;
  vliquido = vpedido - vdesconto;

  inPercDesc.value = pdesconto.toFixed(2);
  inValDesc.value = vdesconto.toFixed(2);
  inValFinal.value = vliquido.toFixed(2);
};
