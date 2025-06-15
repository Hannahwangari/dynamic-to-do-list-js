// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select the form and the feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 2: Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop the form from submitting

        // Step 3: Get input values and trim them
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 4: Initialize validation logic
        let isValid = true;
        const messages = [];

        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation: must include '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Step 5: Display feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // green
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // red
        }
    });
});
