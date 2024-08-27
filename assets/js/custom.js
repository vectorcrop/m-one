document.addEventListener('DOMContentLoaded', function () {
    const locationsList = document.querySelector('.wptb-item--locations-list');
    const locationAddress = document.getElementById('locationAddress');

    locationsList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            // Remove 'active' class from all list items
            this.querySelectorAll('li').forEach(li => li.classList.remove('active'));

            // Add 'active' class to the clicked item
            e.target.classList.add('active');

            // Update the address
            const newAddress = e.target.getAttribute('data-address');
            locationAddress.textContent = newAddress;
            locationAddress.href = '#contact';
        }
    });
});