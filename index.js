class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    getTipo(){
        return this.tipo;
    }

    tipoAtaque(){
        let tipoAtaque
        if(this.tipo == "mago"){
            tipoAtaque = "magia"
        }else if(this.tipo == "guerreiro"){
            tipoAtaque = "espanda"
        }else if(this.tipo == "monge"){
            tipoAtaque = "artes marciais"
        }else if(this.tipo == "ninja"){
            tipoAtaque = "shuriken"
        }
        return tipoAtaque;
    }

    atacar(){
        console.log(`O ${this.getTipo()} atacou usando ${this.tipoAtaque()}`)
    }
}

var objHeroi = new heroi("Wu Lei", 40, "ninja")

objHeroi.atacar()