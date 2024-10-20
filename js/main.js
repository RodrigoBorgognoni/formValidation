import validaCpf from './validaCPF.js';
import maiorIdade from './validaIdade.js';
import { tiposErro, mensagens } from './mensagemErro.js';

const camposForm = document.querySelectorAll('[required]');
const form = document.querySelector('[data-formulario]')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const list = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    localStorage.setItem('cadastro', JSON.stringify(list));
    window.location.href = './abrir-conta-form-2.html';
})

camposForm.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    //evita o disparo da mensagem padrão de erro do campo (preencha este campo);
    campo.addEventListener('invalid', evento => evento.preventDefault());
});

function verificaCampo(campo) {
    campo.setCustomValidity('');
    
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validaCpf(campo);
    }
    if (campo.name == 'aniversario' && campo.value != '') {
        maiorIdade(campo);
    }
    
    let mensagem = '';

    tiposErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    });
    const mensagemDeErro = campo.parentNode.querySelector('.mensagem-erro');
    const validaInput = campo.checkValidity();

    if (!validaInput) {
        mensagemDeErro.textContent = mensagem;
    } else {
        mensagemDeErro.textContent = '';
    }
        
}
