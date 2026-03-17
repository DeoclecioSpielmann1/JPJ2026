const CHAVE_CARRINHO = "carrinho";

function adicionarAoCarrinho(nome, preco) {

    let carrinho = obterCarrinho();

    carrinho.push({
        nome: nome,
        preco: preco
    });

    salvarCarrinho(carrinho);

    alert("Produto adicionado ao carrinho!");
}

function carregarCarrinho() {

    let carrinho = obterCarrinho();
    let lista = document.getElementById("lista-carrinho");
    let total = 0;

    if (!lista) return;

    lista.innerHTML = "";

    carrinho.forEach((produto, index) => {

        total += produto.preco;

        let item = document.createElement("div");
        item.className = "item-carrinho";

        let texto = document.createElement("p");
        texto.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;

        let botao = document.createElement("button");
        botao.innerText = "Remover";
        botao.onclick = () => removerItem(index);

        item.appendChild(texto);
        item.appendChild(botao);

        lista.appendChild(item);

    });

    atualizarTotal(total);
}


function removerItem(index) {

    let carrinho = obterCarrinho();

    carrinho.splice(index, 1);

    salvarCarrinho(carrinho);

    carregarCarrinho();
}


function finalizarCompra() {

    let carrinho = obterCarrinho();

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("🎉 Compra finalizada com sucesso!");

    localStorage.removeItem(CHAVE_CARRINHO);

    carregarCarrinho();
}

function obterCarrinho() {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
}


function salvarCarrinho(carrinho) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}


function atualizarTotal(total) {

    let totalElemento = document.getElementById("total");

    if (totalElemento) {
        totalElemento.innerText = "Total: R$ " + total.toFixed(2);
    }

}

window.onload = function () {
    carregarCarrinho();
};