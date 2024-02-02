const { topSpeed2, topSpeed } = require('./main');

class Vel {
    constructor(carroPessoal, carroFabrica, carroFuncionario) {
        this.carroPessoal = carroPessoal;
        this.carroFabrica = carroFabrica;
        this.carroFuncionario = carroFuncionario;
    }

    velMax() {
        const mensagem = [];

        if (this.carroPessoal.topSpeed > 150) {
            mensagem.push(`${this.carroPessoal.modelo} tem velocidade máxima de ${this.carroPessoal.topSpeed}`);
        } else {
            mensagem.push(`${this.carroPessoal.modelo} tem velocidade baixa`);
        }

        if (this.carroFabrica.topSpeed2 > 150) {
            mensagem.push(`${this.carroFabrica.modelo} tem velocidade máxima de ${this.carroFabrica.topSpeed2}`);
        } else {
            mensagem.push(`${this.carroFabrica.modelo} tem velocidade baixa`);
        }

        if (this.carroFuncionario.topSpeed > 150) {
            mensagem.push(`${this.carroFuncionario.modelo} tem velocidade máxima de ${this.carroFuncionario.topSpeed}`);
        } else {
            mensagem.push(`${this.carroFuncionario.modelo} tem velocidade baixa`);
        }

        return mensagem.join('\n');
    }
}

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

const velInstance = new Vel(carroPessoal, carroFabrica, carroFuncionario);
console.log(velInstance.velMax());
