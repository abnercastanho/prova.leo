document.addEventListener('DOMContentLoaded', () => {
    const formGasto = document.getElementById('form-gasto');
    const inputDescricao = document.getElementById('desc');
    const formValor = document.getElementById('form-valor');
    const inputValor = document.getElementById('valor');
    const formCategoria = document.getElementById('form-categoria');
    const inputCategoria = document.getElementById('cat');
    const botaoAdicionar = document.getElementById('adicionar-gasto');
    const tabelaGastos = document.getElementById('tabela-gastos').getElementsByTagName('tbody')[0];
    const totalGastosElement = document.getElementById('total-gastos');

    let listaDeGastos = [];

    // Função para atualizar a tabela de gastos
    function atualizarTabela() {
        tabelaGastos.innerHTML = ''; // Limpa a tabela

        listaDeGastos.forEach((gasto, index) => {
            const novaLinha = tabelaGastos.insertRow();

            const colunaDescricao = novaLinha.insertCell();
            colunaDescricao.textContent = gasto.descricao;

            const colunaValor = novaLinha.insertCell();
            colunaValor.textContent = `R$ ${gasto.valor.toFixed(2)}`;

            const colunaCategoria = novaLinha.insertCell();
            colunaCategoria.textContent = gasto.categoria;

            const colunaAcoes = novaLinha.insertCell();
            const botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir';
            botaoExcluir.classList.add('excluir-gasto');
            botaoExcluir.addEventListener('click', () => {
                removerGasto(index);
            });
            colunaAcoes.appendChild(botaoExcluir);
        });

        atualizarTotal();
    }

    // Função para calcular e atualizar o total de gastos
    function atualizarTotal() {
        const total = listaDeGastos.reduce((soma, gasto) => soma + gasto.valor, 0);
        totalGastosElement.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Função para adicionar um novo gasto
    function adicionarGasto() {
        const descricao = inputDescricao.value.trim();
        const valorTexto = inputValor.value.trim();
        const categoria = inputCategoria.value.trim();

        if (descricao && valorTexto && categoria) {
            const valor = parseFloat(valorTexto);

            if (!isNaN(valor)) {
                listaDeGastos.push({ descricao, valor, categoria });
                atualizarTabela();

                // Limpar os campos da tabela
                inputDescricao.value = '';
                inputValor.value = '';
                inputCategoria.value = '';
            } else {
                alert('Por favor, insira um valor válido para o gasto.');
            }
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    }

    // Função para remover um gasto
    function removerGasto(index) {
        if (confirm('Tem certeza que deseja excluir este gasto?')) {
            listaDeGastos.splice(index, 1);
            atualizarTabela();
        }
    }

    botaoAdicionar.addEventListener('click', adicionarGasto);

    // Impedir o envio dos formulários ao pressionar Enter
    formGasto.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    formValor.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    formCategoria.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    atualizarTabela();
});