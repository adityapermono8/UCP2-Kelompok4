// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the video element
    const video = document.querySelector('.video-background');

    // Function to play video on load
    function playVideo() {
        if (video && video.paused) {
            video.play().catch(error => {
                console.error('Error attempting to play video:', error);
            });
        }
    }

    // Function to pause video
    function pauseVideo() {
        if (video && !video.paused) {
            video.pause();
        }
    }

    // Play the video when the page is fully loaded
    window.addEventListener('load', playVideo);

    // Example: Pause the video when the user clicks a button
    document.getElementById('pauseVideoButton').addEventListener('click', pauseVideo);
});


document.addEventListener('DOMContentLoaded', function () {
    // Bootstrap Modal Functionality for About Page
    $('#productModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var title = button.data('title'); // Extract info from data-* attributes
        var description = button.data('description');
        var image = button.attr('src'); // Get image source

        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#productModalImage').attr('src', image);
        modal.find('.modal-body p').text(description);
    });

    // Contact Form Submission for Contact Page
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Use SweetAlert for alert
        Swal.fire({
            title: 'Message Sent!',
            text: `Thank you, ${name}. Your message has been sent successfully.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Clear form
        document.getElementById('contactForm').reset();
    });
});
