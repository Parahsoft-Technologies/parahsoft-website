$(document).ready(function() {
    var environment = "https://dev-api.parahsoft.tech/";

    // Function to enable/disable submit button based on form validity
    function toggleSubmitButton() {
        var form = $('#quote-form')[0];
        var isValid = form.checkValidity();
        $('#quote-modal .modal-footer button[type="submit"]').prop('disabled', !isValid);
    }

    // Event listener for input change to toggle submit button
    $('#quote-form input, #quote-form select, #quote-form textarea').on('input change', toggleSubmitButton);

    // Add event listener for form submission
    $('#quote-form').on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = $(this).serializeArray();

        // Construct payload
        var payload = {};
        formData.forEach(function(item) {
            payload[item.name] = item.value;
        });

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
        fetch(environment + "api/quote/request-quote", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error submitting quote request');
                }
                return response.json();
            })
            .then(data => {
                console.log('Quote request submitted successfully:', data);
                // Show success message using SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Quote request submitted successfully!',
                    timer: 2000, // Auto close after 2 seconds
                    showConfirmButton: false
                }).then(() => {
                    $('#quote-modal').modal('hide');
                });
            })
            .catch(error => {
                console.error('Error submitting quote request:', error.message);
                // Show error message using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error submitting quote request. Please try again later.'
                });
            });
    });

    // Initially disable submit button
    toggleSubmitButton();
});
