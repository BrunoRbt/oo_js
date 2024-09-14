class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numPortas) {
        super(marca, modelo, ano);
        this.numPortas = numPortas;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()} com ${this.numPortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()} com ${this.cilindradas} cilindradas`;
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 2020, 4);
const carro2 = new Carro('Honda', 'Civic', 2019, 4);
const moto1 = new Moto('Yamaha', 'MT-07', 2021, 689);

console.log(carro1.exibirDetalhes());
console.log(carro2.exibirDetalhes()); 
console.log(moto1.exibirDetalhes());  