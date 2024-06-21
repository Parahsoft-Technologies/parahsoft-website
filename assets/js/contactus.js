// import Swal from 'sweetalert2';

$(document).ready(function() {
    var environment = "https://dev-api.parahsoft.tech/";

    // Function to enable/disable submit button based on form validity
    function toggleSubmitButton() {
        var form = $('#contact-form')[0];
        var isValid = form.checkValidity();
        $('#contact-us button[type="submit"]').prop('disabled', !isValid);
    }

    // Event listener for input change to toggle submit button
    $('#contact-form input, #contact-form select, #contact-form textarea').on('input change', toggleSubmitButton);

    // Add event listener for form submission
    $('#contact-form').on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = $(this).serializeArray();

        // Construct payload
        var payload = {};
        formData.forEach(function(item) {
            payload[item.name] = item.value;
        });

        // Disable submit button
        $('#contact-us button[type="submit"]').prop('disabled', true);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(payload),
            redirect: "follow"
        };

        // Show loading spinner using SweetAlert2
        Swal.fire({
            title: 'Sending...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        // Send POST request to API
        fetch(environment + "api/contact-us/create-inquiry", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error sending message');
                }
                return response.json();
            })
            .then(data => {
                console.log('Message sent successfully:', data);
                // Show success message using SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Message sent successfully!',
                });
                // Reset form and enable submit button
                $('#contact-form')[0].reset();
                $('#contact-us button[type="submit"]').prop('disabled', false);
            })
            .catch(error => {
                console.error('Error sending message:', error.message);
                // Show error message using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error sending message. Please try again later.',
                });
                // Enable submit button
                $('#contact-us button[type="submit"]').prop('disabled', false);
            });
    });

    // Initially disable submit button
    toggleSubmitButton();
    
});


function triggerChat(){
    debugger
    var tawk = $(".tawk-button-large");
    $(".tawk-button-large").hide()
}
