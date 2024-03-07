const imagenes = document.querySelectorAll('.gallery .container-img');
const imagenModal = document.getElementById('modal-image');

imagenes.forEach((imagen) => {
	imagen.addEventListener('click', () => {
		const ruta = imagen.querySelector('img').src;
		imagenModal.src = ruta;
	});
});