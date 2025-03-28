const atualizarDados = () => {
  //Criando uma variável para o tbody
  let dados = document.getElementById("itens");

  //Zerando o tbody se houver dados
  dados.innerHTML = "";

  //Gerando novos conteúdos aleatorio
  for (let i = 0; i < 5; i++) {
    //Criando variável para valor aleatorio
    let preco = Math.random() * 100;

    //Criando variável para um elemento tr (dados da tabela)
    let elemento = "";

    //Criando listra de cor diferente para as linhas ímpares
    if (i % 2 != 0) elemento = "<tr class='listra'>";
    else elemento = "<tr>";

    //Inserindo os itens na linha (tr)
    elemento += `<td>Produto${i} </td>
    <td>R$ ${preco.toFixed(2)} </td>`;

    dados.innerHTML += elemento;
  }
};
