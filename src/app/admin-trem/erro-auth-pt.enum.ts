export namespace ErroAuthPt {
    export function convertMessage(code: string): string {
        switch (code) {
            case 'auth/user-disabled': {
                return 'Usuário desativado.';
            }
            case 'auth/user-not-found': {
                return 'Usuário não encontrado';
            }
            case 'auth/wrong-password': {
                return 'Senha incorreta';
            }
            case 'auth/too-many-requests': {
                return 'Muitas tentaivas incorretas tente mais novamente tarde.';
            }
            default: {
                return 'Erro no login tente novamente mais tarde.';
            }
        }
    }
}

