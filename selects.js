const db = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

db[collection].find({ preco: { $gt: 700 } });

db[collection].find({ preco: { $lt: 450 } });

db[collection].find({ preco: { $gte: 500, $lte: 950 } });
