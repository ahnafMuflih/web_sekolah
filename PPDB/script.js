document.addEventListener("DOMContentLoaded", function() {
    // Mengelola dropdown di navbar
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');

        link.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah link default
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            // Toggle dropdown
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Menutup dropdown ketika mengklik di luar
    window.addEventListener('click', function(event) {
        dropdowns.forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            if (!dropdown.contains(event.target) && dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        });
    });

    // Mengelola navigasi job section
    const leftArrow = document.querySelector('.navigation .fa-chevron-left');
    const rightArrow = document.querySelector('.navigation .fa-chevron-right');

    leftArrow.addEventListener('click', function() {
        // Aksi untuk navigasi ke kiri
        alert("Navigasi ke kiri");
    });

    rightArrow.addEventListener('click', function() {
        // Aksi untuk navigasi ke kanan
        alert("Navigasi ke kanan");
    });
});
