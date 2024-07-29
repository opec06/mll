document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize hamburger menu
    function initHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav ul');
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    initHamburgerMenu();

    // Initialize Google Map
    function initMap() {
        var location = { lat: 6.5110415, lng: 3.3527026 }; // Coordinates for Micro Leasing Limited
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Ensure the map is loaded after the script
    if (typeof google !== 'undefined') {
        initMap();
    } else {
        console.error('Google Maps API failed to load');
    }
});
