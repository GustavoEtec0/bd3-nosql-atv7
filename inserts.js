const db = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

use(db);
db[collection].insertMany([
  {
    codigo: 1,
    nome: "Camiseta Branca",
    descricao: "Camiseta branca de algodão, tamanho M.",
    preco: 30,
    categoria: "Vestuário",
  },
  {
    codigo: 2,
    nome: "Notebook Dell",
    descricao: "Notebook Dell Inspiron 15, 8GB RAM, 256GB SSD.",
    preco: 3500,
    categoria: "Eletrônicos",
  },
  {
    codigo: 3,
    nome: "Garrafa Térmica",
    descricao: "Garrafa térmica de inox, 1 litro.",
    preco: 75,
    categoria: "Utensílios Domésticos",
  },
  {
    codigo: 4,
    nome: "Fone de Ouvido Bluetooth",
    descricao: "Fone de ouvido sem fio com cancelamento de ruído.",
    preco: 200,
    categoria: "Eletrônicos",
  },
  {
    codigo: 5,
    nome: "Tênis Esportivo",
    descricao: "Tênis esportivo para corrida, tamanho 42.",
    preco: 300,
    categoria: "Calçados",
  },
  {
    codigo: 6,
    nome: "Cadeira de Escritório",
    descricao: "Cadeira ergonômica com ajuste de altura e apoio lombar.",
    preco: 450,
    categoria: "Móveis",
  },
  {
    codigo: 7,
    nome: "Livro de Ficção",
    descricao: "Livro de ficção científica, autor renomado.",
    preco: 49.9,
    categoria: "Livros",
  },
  {
    codigo: 8,
    nome: "Smartphone Android",
    descricao: "Smartphone com 128GB de armazenamento e câmera de 48MP.",
    preco: 1200,
    categoria: "Eletrônicos",
  },
  {
    codigo: 9,
    nome: "Relógio de Pulso",
    descricao: "Relógio de pulso à prova d'água com cronômetro.",
    preco: 400,
    categoria: "Acessórios",
  },
  {
    codigo: 10,
    nome: "Mesa de Jantar",
    descricao: "Mesa de jantar de madeira, 6 lugares.",
    preco: 1200,
    categoria: "Móveis",
  },
]);
