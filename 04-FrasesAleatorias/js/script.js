// criando a função de flecha com frases aleatórias
const falar = () => {
  //Criando o vetor de frases
  const frases = [
    "Hoje está um dia bonito!",
    "Falta muito para sexta-feira?",
    "Qual o cardápio de hoje no almoço?",
    "Vish, tem prova de matemática!!!",
  ];

  //Criando uma variável para armazenar a DIV com id "tagarela"
  let tagarela = document.getElementById("tagarela");

  //Criando variável de controle para a frase exibida
  let indice = 0;

  //Criando variavel para número aleatório entre 0 e 1 (lembrando que o 1 não entra na conta)
  let numero = Math.random();

  //Configurando o número para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  //Escrevendo a fase para o usuario
  tagarela.innerHTML = frases[indice];
};
