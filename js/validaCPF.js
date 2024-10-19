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
    validaNumerosRepetidos(cpf);
    console.log(validaNumerosRepetidos(cpf));
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
        '99999999999',
    ];

    return numerosRepetidos.includes(cpf)
}
