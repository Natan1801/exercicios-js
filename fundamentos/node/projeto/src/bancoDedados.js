const sequence = {
    _id: 1,
    get id() {
        return this._id++;
    }
};

// Aqui é onde ficam todos os produtos
const produtos = {};

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id; // cria novo ID
    }
    produtos[produto.id] = produto; // salva/atualiza
    return produto;
}

function getProduto(id) {
    return produtos[id] || null;
}

function getProdutos() {
    return Object.values(produtos);
}

function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto || null;
}

export default {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
};