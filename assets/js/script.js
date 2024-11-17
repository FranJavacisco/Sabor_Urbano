document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animaciones de AOS
    AOS.init();

    // Mostrar/ocultar menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

<!-- Script para la funcionalidad de la galería -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Elementos del DOM
        const modal = document.getElementById('gallery-modal');
        const modalImg = document.getElementById('modal-image');
        const closeModal = document.getElementById('close-modal');
        const galleryItems = document.querySelectorAll('.gallery-item button');
        const filters = document.querySelectorAll('.gallery-filter');

        // Abrir modal
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.closest('.gallery-item').querySelector('img').src;
                modalImg.src = imgSrc;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        // Cerrar modal
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Cerrar modal con tecla ESC
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Filtros de galería
        filters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Remover clase active de todos los filtros
                filters.forEach(f => {
                    f.classList.remove('bg-amber-600', 'text-white');
                    f.classList.add('bg-gray-200', 'text-gray-700');
                });

                // Agregar clase active al filtro seleccionado
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-amber-600', 'text-white');

                // Aquí iría la lógica para filtrar las imágenes según la categoría
            });
        });

        // Inicializar AOS
        AOS.init({
            duration: 800,
            once: true
        });
    });
</script>

// Barra de progreso
window.onscroll = function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Saludo según la hora
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "¡Buenos días! El desayuno es la comida más importante.";
    } else if (hour >= 12 && hour < 18) {
        greeting = "¡Buenas tardes! No olvides reservar tu mesa para la cena.";
    } else {
        greeting = "¡Buenas noches! Disfruta de nuestra carta de cenas.";
    }

    document.getElementById("timeGreeting").innerHTML = `
        ${greeting}<br>
        <span style="font-size: 0.9em; color: var(--text-gray);">
            ${new Date().toLocaleTimeString('es-ES')}
        </span>
    `;
}

// Actualizar el saludo cada minuto
updateGreeting();
setInterval(updateGreeting, 60000);

// Animación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulario de newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('¡Gracias por suscribirte! Pronto recibirás nuestras ofertas especiales.');
        this.reset();
    }
});

