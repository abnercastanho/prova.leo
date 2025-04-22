document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionar = document.getElementById('adicionar-gasto');
    const tabelaGastos = document.getElementById('tabela-gastos').getElementsByTagName('tbody')[0];
    const inputDescricao = document.getElementById('desc');
    const inputValor = document.getElementById('valor');
    const inputCategoria = document.getElementById('cat');

    botaoAdicionar.addEventListener('click', () => {
        const descricao = inputDescricao.value.trim();
        const valor = inputValor.value.trim();
        const categoria = inputCategoria.value.trim();

        if (descricao && valor && categoria) {
            const novaLinha = tabelaGastos.insertRow();

            const celulaDescricao = novaLinha.insertCell();
            const celulaValor = novaLinha.insertCell();
            const celulaCategoria = novaLinha.insertCell();

            celulaDescricao.textContent = descricao;
            celulaValor.textContent = valor;
            celulaCategoria.textContent = categoria;

            // Limpa os campos do formulário após adicionar o gasto
            inputDescricao.value = '';
            inputValor.value = '';
            inputCategoria.value = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
