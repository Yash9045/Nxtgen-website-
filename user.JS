document.addEventListener('DOMContentLoaded', () => {
    
    // --- Responsive Mobile Navbar Controller ---
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.querySelector('.navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.navLink').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // --- Interactive Overlay Modals Framework ---
    const modal = document.getElementById('enrollModal');
    const openModalButtons = document.querySelectorAll('.openModalBtn');
    const closeModalButton = document.getElementById('closeModalBtn');

    openModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Form Handling System ---
    const admissionForm = document.getElementById('admissionForm');
    
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('studentName').value;
        const course = document.getElementById('courseSelect').value;

        alert(`Thank you, ${name}! Your registration interest for our ${course} path has been captured. Director Arun Kumar's office will review your details soon.`);
        
        admissionForm.reset();
        modal.classList.remove('active');
    });

    // --- Highlighting active navigation states on structural scrolls ---
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.navLink');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });
});