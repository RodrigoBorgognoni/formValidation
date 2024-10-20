export default function validaCpf(campo) {
    /* 
    replace leva dois argumentos: padrão e substituição
    no replace abaixo, irá substituir todo . OU hífen por nada (irá retirar . -)

    "\." => se retirarmos o \, ponto se transforma em wildcard. Ex:
    string = "hot dog"
    string.replace(/h.t/g,"a")
    resultado: string = "a dog"

    "g" => indica o escopo global

    */
    const cpf = campo.value.replace(/\.|-/g, '');
    if (validaNumerosRepetidos(cpf) || primeiroDigito(cpf) || segundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é válido');
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numerosRepetidos.includes(cpf);
}

function primeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
        /* 
        CPF 937777040-83
        cpf[0] = 9, cpf[1] = 3, cpf[2] = 7 etc
        soma = 311
        */
    }

    soma = (soma * 10) % 11; //soma = (311 * 10) % 11; soma = 8
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9]; // return 8 != 8; FALSE
}

function segundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}
