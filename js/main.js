import validaCpf from './validaCPF.js';

const camposForm = document.querySelectorAll('[required]');

camposForm.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        validaCpf(campo);
    }
}
