document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionar = document.getElementById('adicionar-gasto');
    const tabelaGastos = document.getElementById('tabela-gastos').getElementsByTagName('tbody')[0];
    const inputDescricao = document.getElementById('desc');
    const inputValor = document.getElementById('valor');
    const inputCategoria = document.getElementById('cat');
    const totalGastosSpan = document.getElementById('total-gastos');
    let totalGastos = 0;

    function atualizarTotalGastos() {
        totalGastosSpan.textContent = `R$ ${totalGastos.toFixed(2)}`;
    }

    botaoAdicionar.addEventListener('click', () => {
        const descricao = inputDescricao.value.trim();
        const valorTexto = inputValor.value.trim();
        const categoria = inputCategoria.value.trim();
        const valor = parseFloat(valorTexto);

        if (descricao && valorTexto && categoria && !isNaN(valor)) {
            const novaLinha = tabelaGastos.insertRow();

            const celulaDescricao = novaLinha.insertCell();
            const celulaValor = novaLinha.insertCell();
            const celulaCategoria = novaLinha.insertCell();

            celulaDescricao.textContent = descricao;
            celulaValor.textContent = `R$ ${valor.toFixed(2)}`;
            celulaCategoria.textContent = categoria;

            totalGastos += valor;
            atualizarTotalGastos();

            // Limpa os campos do formulário após adicionar o gasto
            inputDescricao.value = '';
            inputValor.value = '';
            inputCategoria.value = '';
        } else {
            alert('Por favor, preencha todos os campos com valores válidos.');
        }
    });

    // Inicializa o total de gastos na página
    atualizarTotalGastos();
});
