import validaCpf from './validaCPF.js';
import maiorIdade from './validaIdade.js';
import { mensagemErro } from './mensagemErro.js';

const camposForm = document.querySelectorAll('[required]');

camposForm.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    //evita o disparo da mensagem padrão de erro do campo (preencha este campo);
    campo.addEventListener('invalid', (evento) => evento.preventDefault());
});

function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validaCpf(campo);
    }
    if (campo.name == 'aniversario' && campo.value != '') {
        maiorIdade(campo);
    }
    console.log(campo.validity);
}
