document.addEventListener('DOMContentLoaded', function () {
    const clases = document.querySelectorAll('.clase');
    const botonesSiguiente = document.querySelectorAll('.siguiente-leccion');

    clases.forEach((clase, index) => {
        const video = clase.getAttribute('data-video');
        const descarga = clase.getAttribute('data-descarga');
        const verVideoBtn = clase.querySelector('.ver-video');
        const descargarBtn = clase.querySelector('.descargar');
        const progress = clase.querySelector('progress');
        const siguienteLeccionBtn = botonesSiguiente[index];

        verVideoBtn.addEventListener('click', function () {
            // Lógica para reproducir el video
            console.log(`Reproduciendo video: ${video}`);
        });

        descargarBtn.addEventListener('click', function () {
            // Lógica para iniciar la descarga del archivo
            console.log(`Descargando archivos: ${descarga}`);
        });

        // Añade esta parte para actualizar la barra de progreso
        video.addEventListener('timeupdate', function() {
            const value = (video.currentTime / video.duration) * 100;
            progress.value = value;
        });

        siguienteLeccionBtn.addEventListener('click', function () {
            // Lógica para redirigir a la siguiente página
            window.location.href = `leccion${index + 2}.html`; // Asume que tus páginas se llaman leccion1.html, leccion2.html, etc.
        });
    });
});


// Agrega esta función en tu archivo script.js
function marcarComoCompletado() {
    // Obtenemos el número de la lección actual desde la URL
    const url = window.location.href;
    const match = url.match(/leccion(\d+).html/);
    if (match) {
        const numeroLeccion = parseInt(match[1]);
        
        // Actualizamos la barra de progreso
        const barraDeProgreso = document.querySelector('progress');
        if (barraDeProgreso) {
            const porcentajeCompletado = (numeroLeccion / 10) * 100; // Suponiendo 10 lecciones en total
            barraDeProgreso.value = porcentajeCompletado;
        }

        // Redirigimos a la siguiente lección si no hemos alcanzado la última
        if (numeroLeccion < 10) {
            const siguienteLeccion = `leccion${numeroLeccion + 1}.html`;
            window.location.href = siguienteLeccion;
        } else {
            alert("¡Felicidades! Has completado todas las lecciones.");
        }
    }
}


        // Variable global para almacenar el progreso actual
        let progress = 0;

        // Función para actualizar la barra de progreso
        function updateProgressBar() {
         document.getElementById('progress').style.width = progress + '%';
        }
        
        // Función para manejar el evento de clic en el botón "Completado"
        function handleCompletedButtonClick() {
         progress += 10; // Incrementamos el progreso en 10%
         updateProgressBar(); // Actualizamos la barra de progreso
        
         // Aquí puedes agregar la lógica para cambiar el curso
         // Por ejemplo, podrías utilizar el método location.href para navegar a la siguiente página del curso
        }
        
        // Agregamos un evento de clic al botón "Completado"
        document.getElementById('completedButton').addEventListener('click', handleCompletedButtonClick);