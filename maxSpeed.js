const { carroFabrica2Speed, carroPessoal2Speed } = require('./main');

class Vel {
    constructor() {
        this.Speed1 = carroFabrica2Speed && carroPessoal2Speed;
    }

    velMax() {
        if (this.Speed1 < 250) {
            return `A velocidade máxima é ${this.Speed1}`
        } else {
            return "Velocidade baixa";
        }
    }
}

const velInstance = new Vel();
console.log(velInstance.velMax());