const carroPessoal = {
    modelo: '180sx',
    marca: 'Nissan',
    anoModelo: 2002,
    anoFabricacao: 1988,
    topSpeed: 340,
    motor: ["SR20DE 150HP", "2.0L", "aspirado"]
}

const carroFabrica = {
    modelo: 'Silvia 13',
    marca: 'Nissan',
    anoModelo: 1998, 
    anoFabricacao: 1989,
    topSpeed2: 249,
    motor: ["V8 biturbo", "3.9L", "720cv"]
}

const carroFuncionario = {
    modelo: 'E30',
    marca: 'BMW',
    anoModelo: 1994,
    anoFabricacao: 1981,
    topSpeed: 248,
    motor: ["4 cilindros", "2.3L", "240cv"]
}

function Carro(modelo, marca, anoFabricacao, anoModelo) {
    this.modelo = modelo;
    this.marca = marca;
    this.anoFabricacao = anoFabricacao;
    this.anoModelo = anoModelo;
}

function Speed(topSpeed, motor, topSpeed2) {
    this.topSpeed = topSpeed;
    this.motor = motor;
    this.topSpeed2 = topSpeed2;
}

const carroPessoal2Speed = new Speed(340, ["SR20DE 150HP", "2.0L", "aspirado"]);
const carroFabrica2Speed = new Speed(249, ["V8 biturbo", "3.9L", "720cv"]);
const carroFuncionario2 = new Carro("BMW", "E30", 1994, 1981);
const carroFuncionario2Speed = new Speed(248, ["4 cilindros", "2.3L", "240cv"]);
const vel = new Speed(carroPessoal2Speed, carroFabrica2Speed, carroFuncionario2Speed);

// console.log(Object.keys(carroFuncionario));
// console.log(Object.values(carroFuncionario2));

// console.log(vel);

class Veiculo {
    constructor(modelo, marca, anoFabricacao, anoModelo) {
        this.modelo = modelo;
        this.marca = marca;
        this.anoFabricacao = anoFabricacao;
        this.anoModelo = anoModelo;
    }
}

class CarroPessoal extends Veiculo {
    constructor(modelo, marca, anoFabricacao, anoModelo, topSpeed, motor) {
        super(modelo, marca, anoFabricacao, anoModelo);
        this.topSpeed = topSpeed;
        this.motor = motor;
    }
}

class CarroFabrica extends Veiculo {
    constructor(modelo, marca, anoFabricacao, anoModelo, topSpeed2, motor) {
        super(modelo, marca, anoFabricacao, anoModelo);
        this.topSpeed2 = topSpeed2;
        this.motor = motor;
    }
}

const carroPessoal2 = new CarroPessoal("180sx", "Nissan", 2002, 1988, 340, ["SR20DE 150HP", "2.0L", "aspirado"]);
const carroFabrica2 = new CarroFabrica("Silvia s13", "Nissan", 1998, 1989, 249, ["V8 biturbo", "3.9L", "720cv"]);

console.log(carroPessoal2);
console.log(carroFabrica2);
