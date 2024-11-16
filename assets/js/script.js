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
