document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function() {
        var goTopButton = document.getElementById('volverarriba');
        if (window.pageYOffset > 800) {
            goTopButton.classList.add('show');
        } else {
            goTopButton.classList.remove('show');
        }
      });
      
      document.getElementById('volverarriba').addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });


    const carouselIlustracion = document.querySelector('.galeria-ilustracion');
    const ilustracionImagenes = document.querySelectorAll('.imagen-ilustracion');
    let ilustracionCurrent = 0;

    carouselIlustracion.addEventListener('mouseenter', function () {
        ilustracionCurrent++;
        ilustracionImagenes[ilustracionCurrent].classList.add('active');
    });

    carouselIlustracion.addEventListener('mouseleave', function () {
        ilustracionImagenes.forEach(image => image.classList.remove('active'));
        ilustracionCurrent = 0;
        ilustracionImagenes[ilustracionCurrent].classList.add('active');
    });

    carouselIlustracion.addEventListener('click', function () {
        ilustracionImagenes[ilustracionCurrent].classList.remove('active');

        ilustracionCurrent++;
        if (ilustracionCurrent >= ilustracionImagenes.length) {
            ilustracionCurrent = 0;
        }

        ilustracionImagenes[ilustracionCurrent].classList.add('active');
    });

    const carouselCarteleria = document.querySelector('.galeria-carteleria');
    const carteleriaImagenes = document.querySelectorAll('.imagen-carteleria');
    let carteleriaCurrent = 0;

    carouselCarteleria.addEventListener('mouseenter', function () {
        carteleriaCurrent++;
        carteleriaImagenes[carteleriaCurrent].classList.add('active');
    });

    carouselCarteleria.addEventListener('mouseleave', function () {
        carteleriaImagenes.forEach(image => image.classList.remove('active'));
        carteleriaCurrent = 0;
        carteleriaImagenes[carteleriaCurrent].classList.add('active');
    });

    carouselCarteleria.addEventListener('click', function () {
        carteleriaImagenes[ilustracionCurrent].classList.remove('active');

        carteleriaCurrent++;
        if (carteleriaCurrent >= carteleriaImagenes.length) {
            carteleriaCurrent = 0;
        }

        carteleriaImagenes[carteleriaCurrent].classList.add('active');
    });

    const carouselEditorial = document.querySelector('.galeria-editorial');
    const editorialImagenes = document.querySelectorAll('.imagen-editorial');
    let editorialCurrent = 0;

    carouselEditorial.addEventListener('mouseenter', function () {
        editorialCurrent++;
        editorialImagenes[editorialCurrent].classList.add('active');
    });

    carouselEditorial.addEventListener('mouseleave', function () {
        editorialImagenes.forEach(image => image.classList.remove('active'));
        editorialCurrent = 0;
        editorialImagenes[editorialCurrent].classList.add('active');
    });

    carouselEditorial.addEventListener('click', function () {
        editorialImagenes[editorialCurrent].classList.remove('active');

        editorialCurrent++;
        if (editorialCurrent >= editorialImagenes.length) {
            editorialCurrent = 0;
        }

        editorialImagenes[editorialCurrent].classList.add('active');
    });


    const carouselPackaging = document.querySelector('.galeria-packaging');
    const packagingImagenes = document.querySelectorAll('.imagen-packaging');
    let packagingCurrent = 0;

    carouselPackaging.addEventListener('mouseenter', function () {
        packagingCurrent++;
        packagingImagenes[packagingCurrent].classList.add('active');
    });

    carouselPackaging.addEventListener('mouseleave', function () {
        packagingImagenes.forEach(image => image.classList.remove('active'));
        packagingCurrent = 0;
        packagingImagenes[packagingCurrent].classList.add('active');
    });

    carouselPackaging.addEventListener('click', function () {
        packagingImagenes[packagingCurrent].classList.remove('active');

        packagingCurrent++;
        if (packagingCurrent >= packagingImagenes.length) {
            packagingCurrent = 0;
        }

        packagingImagenes[packagingCurrent].classList.add('active');
    });

});