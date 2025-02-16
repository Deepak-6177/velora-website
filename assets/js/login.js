// Select the login form and button
const loginForm = document.querySelector('.login .form');
const loginButton = loginForm.querySelector('.btn');

// Add an event listener to handle the login process
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the Username and password input values
    const userName = loginForm.querySelector('input[type="Username"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Ensure the fields are not empty
    if (!userName || !password) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        // Make a POST request to the backend API
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, password }),
        });

        // Parse the response
        const data = await response.json();

        // Handle the response
        if (response.ok) {
            alert('Login successful!');
            console.log('Response:', data);
            // Redirect to a new page or perform other actions
            window.location.href = 'index.html';
        } else {
            // Show error message
            alert(`Error: ${data.message || 'Unable to login. Please try again.'}`);
        }
    } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }
});


// Register functionality
const registerForm = document.querySelector('.register .form');
const registerButton = registerForm.querySelector('.btn');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the username, email, and password input values
    const username = registerForm.querySelector('input[placeholder="Username"]').value;
    const email = registerForm.querySelector('input[placeholder="Your Email"]').value;
    const password = registerForm.querySelector('input[placeholder="Your Password"]').value;

    // Ensure the fields are not empty
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        // Make a POST request to the backend API
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password }),
        });

        // Parse the response
        const data = await response.json();

        // Handle the response
        if (response.ok) {
            alert('Registration successful! Please log in.');
            window.location.href = 'login-register.html';
        } else {
            alert(`Error: ${data.message || 'Unable to register. Please try again.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }
});

// Forgot Password functionality
const forgotPasswordForm = document.querySelector('.forgotPassword .form');

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the email input value
        const email = forgotPasswordForm.querySelector('input[placeholder="Enter your email"]').value;

        // Ensure the field is not empty
        if (!email) {
            alert('Please enter your email.');
            return;
        }

        try {
            // Make a POST request to the backend API
            const response = await fetch('http://localhost:8080/forgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            // Parse the response
            const data = await response.json();

            // Handle the response
            if (response.ok) {
                alert('Reset code sent to your email!');
            } else {
                alert(`Error: ${data.message || 'Unable to send reset code. Please try again.'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
        }
    });
}
