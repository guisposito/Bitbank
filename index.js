class Cliente {
    nome;
    cpf;
    rg;
    agencia;
    saldo;
}

//criando um novo cliente
const cliente1 = new Cliente();
const cliente2 = new Cliente();

//Atribuindo as propriedades
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 999999999;
cliente1.agencia = 44444;
cliente1.saldo = 0;

//Atribuindo as propriedades
cliente2.nome ="Alice";
cliente2.cpf = 11122233309;
cliente2.rg = 999992999;
cliente2.agencia = 42444;
cliente2.saldo = 0;



console.log(cliente1.agencia + cliente2.nome);