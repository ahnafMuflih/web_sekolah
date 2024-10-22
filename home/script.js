document.addEventListener("DOMContentLoaded", function() {
        // Smooth Scroll ketika halaman dimuat
        window.addEventListener('scroll', function() {
            const h1 = document.querySelector('h1');
            const img = document.querySelector('.organigram img');
            const sectionH2 = document.querySelector('.section h2');
            const sectionP = document.querySelector('.section p');
            
            // Mendapatkan posisi scroll
            const scrollPosition = window.scrollY;

            // Jika scroll melewati 50px, munculkan h1
            if (scrollPosition > 20) {
                h1.style.opacity = '1';
                h1.style.transform = 'translateY(0)';
            } else {
                h1.style.opacity = '0';
                h1.style.transform = 'translateY(-20px)';
            }

            // Jika scroll melewati 200px, munculkan gambar
            if (scrollPosition > 100) {
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            } else {
                img.style.opacity = '0';
                img.style.transform = 'translateY(-50px)';
            }

            // Jika scroll melewati 400px, munculkan h2 dan p di section
            if (scrollPosition > 100) {
                sectionH2.style.opacity = '1';
                sectionH2.style.transform = 'translateX(0)';
                sectionP.style.opacity = '1';
                sectionP.style.transform = 'translateX(0)';
            } else {
                sectionH2.style.opacity = '0';
                sectionH2.style.transform = 'translateX(-50px)';
                sectionP.style.opacity = '0';
                sectionP.style.transform = 'translateX(-50px)';
            }
        });

        // Menginisialisasi gaya awal untuk efek fade-in
        const h1 = document.querySelector('h1');
        const img = document.querySelector('.organigram img');
        const sectionH2 = document.querySelector('.section h2');
        const sectionP = document.querySelector('.section p');

        h1.style.opacity = '0';
        h1.style.transition = 'all 0.5s ease';
        h1.style.transform = 'translateY(-50px)';

        img.style.opacity = '0';
        img.style.transition = 'all 0.5s ease';
        img.style.transform = 'translateY(-50px)';

        sectionH2.style.opacity = '0';
        sectionH2.style.transition = 'all 0.5s ease';
        sectionH2.style.transform = 'translateX(-50px)';

        sectionP.style.opacity = '0';
        sectionP.style.transition = 'all 0.5s ease';
        sectionP.style.transform = 'translateX(-50px)';
    });


    //kerja sama animasi

    document.addEventListener("DOMContentLoaded", function() {
        // Mengelola dropdown di navbar
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', function() {
                const content = this.querySelector('.dropdown-content');
                content.style.display = 'block';
            });
            dropdown.addEventListener('mouseout', function() {
                const content = this.querySelector('.dropdown-content');
                content.style.display = 'none';
            });
        });

        // Mengatur navigasi panah kiri dan kanan untuk poster
        const posters = document.querySelectorAll('.poster');
        const logoItems = document.querySelectorAll('.logo-item');
        let currentIndex = 0; // Indeks pertama logo

        // Fungsi untuk menampilkan empat logo mulai dari indeks tertentu
        function showLogos(startIndex) {
            logoItems.forEach((item, i) => {
                if (i >= startIndex && i < startIndex + 4) {
                    item.style.display = 'inline-block'; // Tampilkan 4 logo
                } else {
                    item.style.display = 'none'; // Sembunyikan yang lainnya
                }
            });
        }

        posters.forEach(poster => {
            const arrowLeft = poster.querySelector('.arrow-left');
            const arrowRight = poster.querySelector('.arrow-right');

            arrowLeft.addEventListener('click', function() {
                // Kurangi indeks saat klik panah kiri
                currentIndex = (currentIndex === 0) ? logoItems.length - 4 : currentIndex - 4;
                if (currentIndex < 0) currentIndex = 0; // Mencegah angka negatif
                showLogos(currentIndex);
            });

            arrowRight.addEventListener('click', function() {
                // Tambah indeks saat klik panah kanan
                currentIndex = (currentIndex + 4 >= logoItems.length) ? 0 : currentIndex + 4;
                showLogos(currentIndex);
            });

            // Menampilkan 4 logo pertama saat halaman dimuat
            showLogos(currentIndex);
        });

        // Menambahkan efek hover pada logo-item
        const logoImages = document.querySelectorAll('.logo-item img');
        logoImages.forEach(logo => {
            logo.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.2)';
                this.style.transition = 'all 0.3s ease';
            });
            logo.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });
        });
    });


    //index js

    document.addEventListener("DOMContentLoaded", function() {
        // Mengelola dropdown di navbar
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', function() {
                const content = this.querySelector('.dropdown-content');
                content.style.display = 'block';
            });
            dropdown.addEventListener('mouseout', function() {
                const content = this.querySelector('.dropdown-content');
                content.style.display = 'none';
            });
        });

        // Scroll effect untuk hero section
        const hero = document.querySelector('.hero');
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;

            // Mengurangi opacity hero saat di-scroll
            if (scrollPosition > 100) {
                hero.style.opacity = '0.7'; // Mengurangi opacity saat scroll
            } else {
                hero.style.opacity = '1'; // Opacity normal ketika di posisi atas
            }
        });

        // Button interactivity di hero section
        const heroButton = document.querySelector('.hero .btn');
        heroButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        heroButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });

        // Smooth scroll saat tombol di klik
        heroButton.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah perilaku default link
            const targetSection = document.querySelector('#target-section');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


    // sambutan js
    
    document.addEventListener("DOMContentLoaded", function() {
        // Dropdown interaksi di navbar
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', function() {
                const content = this.querySelector('.dropdown-content');
                content.style.display = 'block';
            });
            dropdown.addEventListener('mouseout', function() {
                const content = this.querySelector('.dropdown-content');
                content.style.display = 'none';
            });
        });

        // Scroll efek untuk header berubah warna
        const header = document.querySelector('.header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#ddd'; // Mengubah warna header ketika di-scroll
            } else {
                header.style.backgroundColor = 'white'; // Warna default header
            }
        });

        // Zoom effect saat gambar di hover
        const image = document.querySelector('.image');
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });

        // Tombol interaktif untuk navigasi smooth scroll
        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Menghentikan perilaku default link
                const targetId = this.getAttribute('href'); // Mendapatkan target ID dari href
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll ke section
            });
        });

        // Menampilkan konten secara bertahap saat scroll
        const contentText = document.querySelector('.content .text');
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const contentOffsetTop = contentText.offsetTop;
            
            if (scrollPosition + window.innerHeight > contentOffsetTop) {
                contentText.style.opacity = '1';
                contentText.style.transform = 'translateY(0)';
            } else {
                contentText.style.opacity = '0';
                contentText.style.transform = 'translateY(50px)';
            }
        });

        // Menginisialisasi style awal untuk konten teks
        contentText.style.opacity = '0';
        contentText.style.transition = 'all 0.5s ease';
        contentText.style.transform = 'translateY(50px)';
    });
