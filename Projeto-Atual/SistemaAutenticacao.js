/*
Ser autenticavel significa ter o método autenticar

duck type
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
            if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
                return autenticavel.autenticar(senha);
            }
            return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}

/*Desse jeito o sistema irá retornar ao usuário um verdadeiro ou 
falso, caso a senha esteja correta ou não
*/