const btnCamera = document.querySelector('[data-video-botao]');
const btnFoto = document.querySelector('[data-tirar-foto]');
const camera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const btnEnviar = document.querySelector('[data-enviar]');

let imagemUrl = '';

btnCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    btnCamera.style.display = 'none';
    camera.style.display = 'block';

    video.srcObject = iniciarVideo;
});

btnFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemUrl = canvas.toDataURL('image/jpeg');

    camera.style.display = 'none';
    mensagem.style.display = 'block';
});

btnEnviar.addEventListener('click', () => {
    const receberDados = localStorage.getItem('cadastro');
    const converteDados = JSON.parse(receberDados);

    converteDados.imagem = imagemUrl;

    localStorage.setItem('cadastro', JSON.stringify(converteDados));

    window.location.href = './abrir-conta-form-3.html';
})