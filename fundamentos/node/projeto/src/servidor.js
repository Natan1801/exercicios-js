import express from 'express';
import bancoDados from './bancoDados.js';

const porta = 3003;
const app = express();

// Substitui body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(bancoDados.getProdutos());
});

// Buscar produto por ID
app.get('/produtos/:id', (req, res) => {
    const produto = bancoDados.getProduto(req.params.id);
    res.json(produto);
});

// Criar novo produto
app.post('/produtos', (req, res) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: Number(req.body.preco)
    });
    res.json(produto);
});

// Atualizar produto
app.put('/produtos/:id', (req, res) => {
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: Number(req.body.preco)
    });
    res.json(produto);
});

// Remover produto
app.delete('/produtos/:id', (req, res) => {
    const removido = bancoDados.excluirProduto(req.params.id);
    res.json(removido);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});
