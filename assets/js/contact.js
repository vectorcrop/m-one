const contactbtn = document.querySelector("#contact-btn")
const contactmodal = document.querySelector("#contact-modal")
const contactmodalclose = document.querySelector("#contact-modal-close")

contactbtn.addEventListener("click", (e) => {
    e.preventDefault();
    contactmodal.style.display = "block"
    document.querySelector("body").classList.add("remove-scrolling")
    showNextField("name-group")
    document.querySelectorAll('.contact-modal__form-input-line').forEach(line => {
        line.style.width = 0 + '%';
    });
})
contactmodalclose.addEventListener("click", (e) => {
    e.preventDefault();
    contactmodal.style.display = "none"
    document.querySelector("body").classList.remove("remove-scrolling")
})
document.querySelectorAll('.contact-modal__form-input input, .contact-modal__form-input textarea').forEach(element => {
    // Find the associated label
    const label = element.closest('.contact-modal__form-group').querySelector('label');

    element.addEventListener('focus', () => {
        label.style.transform = 'translateY(0px)';
    });

    element.addEventListener('blur', () => {
        if (element.value.trim() === "") {
            label.style.transform = 'translateY(50px)';
        }
    });
});

function showNextField(nextFieldId) {
    // Hide all form groups
    const currentGroup = document.querySelector('.contact-modal__form-group:not([style*="display: none"])');
    const input = currentGroup.querySelector('input, textarea');
    const errorMessage = currentGroup.querySelector('.error-message');


    // Add your validation logic
    if (nextFieldId === 'phone-group') {
        const email = input.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return; // Stop the function if there's an error
        }
    } else if (nextFieldId === 'message-group') {
        const phone = input.value.trim();
        const phonePattern = /^[0-9]{10}$/; // Adjust regex according to your phone number format
        if (!phonePattern.test(phone)) {
            errorMessage.textContent = 'Please enter a valid phone number.';
            errorMessage.style.display = 'block';
            return; // Stop the function if there's an error
        }
    } else if (nextFieldId != "name-group" && input.value.trim() === "") {
        // Show the error message
        errorMessage.textContent = 'This field is required.';
        errorMessage.style.display = 'block';
        return; // Stop the function if there's an error
    } else {
        // Hide the error message if there's input
        errorMessage.style.display = 'none';
    }
    currentGroup.style.display = 'none';
    // Show the next field
    var nextField = document.getElementById(nextFieldId);
    if (nextField) {
        nextField.style.display = 'block';
        updateProgress(); // Update progress bar when the field loses focus
    }

    // Show submit button after the message field
    if (nextFieldId === 'message-group') {
        document.querySelectorAll(".contact-modal__form-input svg").forEach((el) => {
            el.style.display = "none"
        })
        document.getElementById('submit-btn').style.display = 'block';
    }
}
function updateProgress(fieldId) {
    const formGroups = document.querySelectorAll('.contact-modal__form-group');
    let completedFields = 0;
    const totalFields = formGroups.length;

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (input && input.value.trim() !== '') {
            completedFields++;
        }
    });

    const percentage = (completedFields / totalFields) * 100;
    document.querySelectorAll('.contact-modal__form-input-line').forEach(line => {
        line.style.width = percentage + '%';
    });
}

// document.querySelectorAll('.contact-modal__form-input input, .contact-modal__form-input textarea').forEach(input => {
//     input.addEventListener('blur', () => {
//         updateProgress(); // Update progress bar when the field loses focus
//     });
// });
