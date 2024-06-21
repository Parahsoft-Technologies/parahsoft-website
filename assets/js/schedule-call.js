$(document).ready(function() {
    var environment = "https://dev-api.parahsoft.tech/";

    function isValidDateTime() {
        debugger
        var dateValue = $('.pickadate').pickadate('picker').get('select');
        var timeValue = $('.pickatime').pickatime('picker').get('select');
        return dateValue !== null && dateValue !== '' && timeValue !== null && timeValue !== '';
    }

    // Function to enable/disable submit button based on form validity
    function toggleSubmitButton() {
        var form = $('#schedule-call-form')[0];
        var isValid = form.checkValidity() && isValidDateTime();
        $('#schedule-call-btn').prop('disabled', !isValid);
    }

    // Add event listener for form submission
    $('#schedule-call-form').on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data
        var formData = $(this).serializeArray();

        // Extract date and time components
        var dateComponents = $('.pickadate').pickadate('picker').get('select');
        var timeComponents = $('.pickatime').pickatime('picker').get('select');

        // Construct DateTime object for the date and time
        var date = new Date(dateComponents.year, dateComponents.month, dateComponents.date, timeComponents.hour, timeComponents.mins);

        // Construct payload
        var payload = JSON.stringify({
            firstName: formData.find(item => item.name === 'firstName').value,
            lastName: formData.find(item => item.name === 'lastName').value,
            email: formData.find(item => item.name === 'email').value,
            dateTime: date // Convert DateTime object to ISO string
        });

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: payload,
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
        fetch(environment + "api/Calls/schedule-call", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error scheduling call');
                }
                return response.json();
            })
            .then(data => {
                console.log('Call scheduled successfully:', data);
                // Show success message using SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Call scheduled successfully!',
                    timer: 2000, // Auto close after 2 seconds
                    showConfirmButton: false
                }).then(() => {
                    $('#schedule-call-modal').modal('hide');
                });
            })
            .catch(error => {
                console.error('Error scheduling call:', error.message);
                // Show error message using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error scheduling call. Please try again later.'
                });
            });
    });

    // Event listener for input change to toggle submit button
    $('#schedule-call-form input').on('input change', toggleSubmitButton);

    // Initially disable submit button
    toggleSubmitButton();
});
