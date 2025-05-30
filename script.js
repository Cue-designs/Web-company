document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('section.five');
    const openBtn = document.querySelector('.btn1');
    const priceLink = document.querySelector('.price-link');
    const footPrice = document.querySelector('.foot-price');
    const closeBtn = document.querySelector('.five .close-popup');

    // Open popup from "Learn more"
    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
    });

    // Open popup from nav "Pricing"
    priceLink.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
    });

    // Open popup from footer "Pricing"
    footPrice.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
    });

    // Close popup
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.remove('active');
    });
});
