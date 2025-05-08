document.addEventListener("DOMContentLoaded", function () {
    // Efecto de desplazamiento suave en los enlaces del menú
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = item.getAttribute("href"); // Redirige a la página correspondiente
        });
    });
});