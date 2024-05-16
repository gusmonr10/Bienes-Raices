document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    darkMode();
});

function eventListeners() {
    const menuMobile = document.querySelector('.mobile-menu');
    menuMobile.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    
    if(!navegacion.classList.contains('mostrar')) {
        navegacion.classList.add('mostrar');
    } else {
        navegacion.classList.remove('mostrar');
    }
}

function darkMode() {
    const darkModeSistema = window.matchMedia('(prefers-color-scheme: dark)');

    if(darkModeSistema.matches) {
        document.body.classList.add('dark-mode-body');
    } else {
        document.body.classList.remove('dark-mode-body');
    }

    darkModeSistema.addEventListener('change', function() {
        if(darkModeSistema.matches) {
            document.body.classList.add('dark-mode-body');
        } else {
            document.body.classList.remove('dark-mode-body');
        }
    });

    const btnDarkMode = document.querySelector('.dark-mode');
    btnDarkMode.addEventListener('click', function() {
        if(!document.body.classList.contains('dark-mode-body')) {
            document.body.classList.add('dark-mode-body');
        } else {
            document.body.classList.remove('dark-mode-body');
        }
    });
}