document.body.onload = function () {


    // =============== VIDEO ============
    let play = document.getElementById('play');
    let bg = document.getElementById('bg');
    let video = document.getElementById('video');

    function playPause() {
        if (video.paused) {
            video.play();
            play.style.opacity = "0";
            bg.style.opacity = "0";
            video.setAttribute("controls", "controls");
        } else {
            video.pause();
        }
    }
    // =============== /VIDEO ============

    //=====================SLIDER===============

    $(function () {
        $('.slider-documents').slick({
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.png" alt=""></button>',
        });
    });
    //=====================/SLIDER===============






    ////=====================MENU===============
    const menuBtn = document.querySelector('.header-top__menu'),
        navPanel = document.querySelector('.header-top__nav');


    menuBtn.addEventListener('click', () => {
        navPanel.classList.toggle('header-top__nav--active');
        menuBtn.classList.toggle('active');
    });
    ////=====================/MENU===============



    ////=====================ACTIVE-LINK-MENU===============
    const section = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;


        section.forEach(item => {
            const sectionHeight = item.offsetHeight;
            const sectionTop = item.offsetTop - 50;
            let sectionId = item.getAttribute('id');


            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.header-top__nav-list a[href*=' + sectionId + ']').classList.add('nav-list__link--active');
            } else {
                document.querySelector('.header-top__nav-list a[href*=' + sectionId + ']').classList.remove('nav-list__link--active');
            }
        });
    }


    window.addEventListener('scroll', scrollActive);

    ////=====================/ACTIVE-LINK-MENU===============




    //=====================SMOOTH-SCROLL===============
    new SmoothScroll('.header-top__nav-list a[href*="#"]', {
        speed: 500
    });

    new SmoothScroll('.hero-down-btn a[href*="#"]', {
        speed: 800
    });
    //=====================/SMOOTH-SCROLL===============







    /*=========================MODAL-WINDOW============================= */
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay');


    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        });
    });

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal);
        });
    });

    function openModal(modal) {
        if (modal == null) {
            return
        } else {
            modal.classList.add('active')
            overlay.classList.add('active')
        }
    }
    function closeModal(modal) {
        if (modal == null) {
            return
        } else {
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
    }
    /*=========================MODAL-WINDOW============================= */

}