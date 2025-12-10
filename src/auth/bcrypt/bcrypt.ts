import { compare, hash } from "bcrypt";

export class Bcrypt {
    async criptografarSenha(senha: string): Promise<string>{
        const saltos: number = 10;
        return await hash(senha, saltos);
    }

    async compararSenhas(
        senhaDigitada: string,
        senhaBanco: string,
    ): Promise<boolean> {
        return await compare(senhaDigitada, senhaBanco);
    }
}