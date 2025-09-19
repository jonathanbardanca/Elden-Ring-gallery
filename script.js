//------------------------------

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const jon = new Pessoa("Jon", "Snow", 26);

// verificar em um array se tem o nome especifico
// pegar um imput e deixar apenas primeira letra maiscula

let cadastro = ["Jon", "pedra", "Leandro", "Ana", "mel", "herculano"];
cadastro.includes("leandro")
  ? console.log("tem leandro")
  : console.log("nao tem leandro");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

cadastro = cadastro.map(capitalize);

console.log(cadastro);

cadastro.includes("Leandro")
  ? console.log("tem leandro")
  : console.log("nao tem leandro");

// replace preco

let preco = "$ 1200.43";
precoCorreto = preco.replace(".", ",").replace("$ ", "$");
console.log(preco);

// split para puxar frutas do texto

let texto = document.querySelector("p").innerText;

// Lista de frutas que você quer buscar
const frutasDesejadas = ["banana", "melancia", "laranja", "maçã", "uva"];

// Expressão regular para encontrar as frutas no texto
const regex = new RegExp(frutasDesejadas.join("|"), "gi");

// Extrai as frutas encontradas
const frutasEncontradas = texto.match(regex);

console.log(frutasEncontradas); // ["banana", "melancia", "laranja", "maçã", "uva"]

//------------------------------

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

function calcularTaxa(item) {
  if (item.descricao.startsWith("Taxa")) {
    return +item.valor.replace("R$ ", "");
  } else {
    return 0;
  }
}

let taxaTotal = 0;
transacoes.forEach((item) => {
  taxaTotal += calcularTaxa(item);
});
console.log(taxaTotal);

//-----------------------------

function calcularRecebimento(item) {
  if (item.descricao.startsWith("Recebimento")) {
    return +item.valor.replace("R$ ", "");
  } else {
    return 0;
  }
}

let recebimentoTotal = 0;
transacoes.forEach((item) => {
  recebimentoTotal += calcularRecebimento(item);
});
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
              
html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasCobradas = [];
transacoes2.forEach((item) => {
  if (item.toLowerCase().trim().startsWith("taxa")) {
    taxasCobradas.push(item.trim());
  }
});

let totalTaxasCobradas = [];
transacoes2.forEach((item) => {
  if (item.toLowerCase().trim().startsWith("taxa")) {
    totalTaxasCobradas++;
  }
});

console.log(taxasCobradas);
console.log(totalTaxasCobradas);

//------------------------------
