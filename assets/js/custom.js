document.addEventListener('DOMContentLoaded', function () {
    const locationsList = document.querySelectorAll('.wptb-item--locations-list');
    const locationAddress = document.querySelectorAll('.location-address');

    locationsList.forEach(el => {
        el.addEventListener('click', function (e) {
            if (e.target.tagName === 'LI') {
                // Remove 'active' class from all list items
                this.querySelectorAll('li').forEach(li => li.classList.remove('active'));

                // Add 'active' class to the clicked item
                e.target.classList.add('active');

                // Update the address
                const newAddress = e.target.getAttribute('data-address');
                locationAddress.forEach((e) => {
                    console.log(e);
                    e.textContent = newAddress;
                    e.href = "#contact"
                })
            }
        });
    })
});