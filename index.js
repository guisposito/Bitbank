class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    #saldo = 0;
    
    sacar(valorSaque){
        if(this.#saldo < valorSaque){
            console.log("Voce não pode sacar o dinheiro")
        }else {
            this.#saldo -= valorSaque;
            console.log("Seu novo saldo é = " + this.#saldo)
        }
    }

    depositar(valorDeposito){
        if(valorDeposito < 0){
            console.log("Você não pode depositar este valor")
        }else {
            this.#saldo += valorDeposito;
            console.log("Deposito de " + valorDeposito + " depositado com sucesso!");
            console.log("Seu novo saldo é = " + this.#saldo);
        }
    }
}

//criando um novo cliente
const cliente1 = new Cliente();
//Atribuindo as propriedades
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 999999999;

const cliente2 = new Cliente();
//Atribuindo as propriedades
cliente2.nome ="Alice";
cliente2.cpf = 11122233309;
cliente2.rg = 999992999;

//Atribuindo valor a conta corrente/
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;



let valorSacado = 200;
let valorDepositado = 400;


contaCorrenteRicardo.sacar(valorSacado);
contaCorrenteRicardo.depositar(valorDepositado);


console.log(contaCorrenteRicardo);




