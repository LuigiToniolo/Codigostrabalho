import { Conta } from "./Conta.js";

export class contaCorrente extends Conta{
    static numeroDeContas = 0;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-field;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        contaCorrente.numerosDeContas += 1;
    }

    teste(){
        super.teste();
        console.log("Teste na classe conta corrente");
    }

    //sobrescrevendo o comportamento de sacar (classe mãe)
    sacar(valor){
        let taxa = 1.1; //10% de taxa para o saque da conta corrente
        return super._sacar(valor, taxa);
           }
   }