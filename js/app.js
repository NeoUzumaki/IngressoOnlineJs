function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return; 
    }

    let quantidadeDisponivel = document.getElementById(`qtd-${tipoIngresso}`).innerText;
    let novaQuantidade = quantidadeDisponivel - quantidade;

    if (novaQuantidade < 0) {
        alert('Quantidade de ingressos insuficiente.');
        return;
    }

    document.getElementById(`qtd-${tipoIngresso}`).innerText = novaQuantidade;
    alert('Compra realizada com sucesso!');
}
