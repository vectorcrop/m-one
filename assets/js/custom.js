document.addEventListener('DOMContentLoaded', function () {
    const locationsList = document.querySelectorAll('.wptb-item--locations-list');
    const locationAddress = document.querySelectorAll('.location-address');
    const phoneNumbers = document.querySelectorAll('.sidebar_phonenumber');

    locationsList.forEach(el => {
        el.addEventListener('click', function (e) {
            if (e.target.tagName === 'LI') {
                // Remove 'active' class from all list items
                this.querySelectorAll('li').forEach(li => li.classList.remove('active'));

                // Add 'active' class to the clicked item
                e.target.classList.add('active');

                // Update the address
                const newAddress = e.target.getAttribute('data-address');
                const nenphone = e.target.getAttribute('data-phone');

                console.log(locationAddress);
                
                locationAddress.forEach((n) => {
                    console.log(newAddress);
                    n.textContent = newAddress;
                    console.log(n.textContent);
                    
                    n.href = "hello"
                })
                phoneNumbers.forEach((n) => {
                    console.log(nenphone);
                    n.textContent = nenphone;
                    console.log(n.textContent);
                    
                    n.href = `tel:${nenphone.trim()}`
                })
            }
        });
    })
});