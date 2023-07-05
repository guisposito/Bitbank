class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    _saldo = 0;
    
    sacar(valorSaque){
        if(this._saldo < valorSaque){
            console.log("Voce não pode sacar o dinheiro");
        }else {
            this._saldo -= valorSaque;
            console.log("Saque de " + valorSaque + " realizado com sucesso!");
            console.log("Seu novo saldo é = " + this._saldo);
            return valorSaque;
        }
    }

    depositar(valorDeposito){
        if(valorDeposito < 0){
            console.log("Você não pode depositar este valor");
        }else {
            this._saldo += valorDeposito;
            console.log("Deposito de " + valorDeposito + " depositado com sucesso!");
            console.log("Seu novo saldo é = " + this._saldo);
            return valorDeposito;
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
cliente2.rg = 999992998;

//Atribuindo valor a conta corrente/
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;



let valorSacado = 200;
let valorDepositado = 400;



contaCorrenteRicardo.depositar(valorDepositado);
contaCorrenteRicardo.sacar(valorSacado);

console.log(contaCorrenteRicardo);




