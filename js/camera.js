const btnCamera = document.querySelector('[data-video-botao]');
const camera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

btnCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false})

    btnCamera.style.display = "none";
    camera.style.display = "block";

    video.srcObject = iniciarVideo;
})