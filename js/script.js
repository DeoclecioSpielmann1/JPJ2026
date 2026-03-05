function adicionarAoCarrinho(nome, preco) {
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

carrinho.push({
    nome: nome,
    preco: preco
});

localStorage.setItem("carrinho", JSON.stringify(carrinho));

alert("Produto adicionado ao carrinho!");

}

function carregarCarrinho() {
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let lista = document.getElementById("lista-carrinho");
let total = 0;

if (!lista) return;

lista.innerHTML = "";

carrinho.forEach((produto, index) => {
    total += produto.preco;

    lista.innerHTML += `
        <div class="item-carrinho">
            <p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="removerItem(${index})">Remover</button>
        </div>
    `;
});

let totalElemento = document.getElementById("total");
if (totalElemento) {
    totalElemento.innerText = "Total: R$ " + total.toFixed(2);
}

}

function removerItem(index) {
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

carrinho.splice(index, 1);

localStorage.setItem("carrinho", JSON.stringify(carrinho));

carregarCarrinho();

}

function finalizarCompra() {
alert("Compra finalizada com sucesso!");

```
localStorage.removeItem("carrinho");

carregarCarrinho();
```

}

window.onload = function() {
carregarCarrinho();
};
