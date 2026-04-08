// Location data with coordinates
const locations = {
    Istanbul: {
        lat: 41.0082,
        lng: 28.9784,
        name: 'İstanbul Şubesi',
        address: 'Şişli, İstanbul',
        phone: '+90 (212) 123-4567'
    },
    Ankara: {
        lat: 39.9334,
        lng: 32.8597,
        name: 'Ankara Şubesi',
        address: 'Çankaya, Ankara',
        phone: '+90 (312) 234-5678'
    },
    Izmir: {
        lat: 38.7223,
        lng: 35.1625,
        name: 'İzmir Şubesi',
        address: 'Konak, İzmir',
        phone: '+90 (232) 345-6789'
    },
    Duzce: {
        lat: 40.8438,
        lng: 31.1557,
        name: 'Düzce Şubesi',
        address: 'Merkez, Düzce',
        phone: '+90 (380) 456-7890'
    }
};

let map;
let markers = {};
let infoWindows = {};

// Initialize map
function initMap() {
    // Default center (Turkey)
    const defaultCenter = { lat: 38.9637, lng: 35.2433 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: defaultCenter,
        styles: [
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [{ color: '#f0f0f0' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#d9e8f0' }]
            }
        ]
    });

    // Add markers for all locations
    Object.entries(locations).forEach(([key, location]) => {
        addMarker(key, location);
    });
}

// Add marker to map
function addMarker(key, location) {
    const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        icon: 'http://maps.google.com/mapfiles/ms/icons/1e40af-blue.png'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; font-family: Arial;">
                <h3 style="margin: 0 0 10px 0; color: #1e40af;">${location.name}</h3>
                <p style="margin: 5px 0; font-size: 14px;">${location.address}</p>
                <p style="margin: 5px 0; font-size: 14px; color: #1e40af; font-weight: bold;">${location.phone}</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        // Close all other info windows
        Object.values(infoWindows).forEach(iw => iw.close());
        infoWindow.open(map, marker);
    });

    markers[key] = marker;
    infoWindows[key] = infoWindow;
}

// Handle location item clicks
document.querySelectorAll('.location-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const location = item.getAttribute('data-location');
        const locationData = locations[location];

        if (locationData && markers[location]) {
            // Center map on clicked location
            map.setCenter({ lat: locationData.lat, lng: locationData.lng });
            map.setZoom(12);

            // Close all info windows and open the clicked one
            Object.values(infoWindows).forEach(iw => iw.close());
            infoWindows[location].open(map, markers[location]);

            // Highlight the clicked item
            document.querySelectorAll('.location-item').forEach(li => {
                li.style.backgroundColor = '#ffffff';
            });
            item.style.backgroundColor = '#f0f4f8';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Teşekkürler! Mesajınız alındı. En kısa zamanda sizinle iletişime geçeceğiz.');
        contactForm.reset();
    });
}

// Initialize map when page loads
window.addEventListener('load', initMap);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
