// Função que será chamada ao clicar no botão
function saudar() {
    // Obtendo o valor inserido no campo de texto
    let nome = document.getElementById('name').value;

    // Verificando se o nome foi preenchido
    if (nome.trim() !== "") {
        // Exibindo a saudação personalizada
        document.getElementById('saudacao').textContent = `Olá, ${nome}! Seja bem-vindo ao nosso site!`;
    } else {
        // Caso o campo de nome esteja vazio, mostramos um erro
        document.getElementById('saudacao').textContent = "Por favor, insira seu nome!";
    }
}
