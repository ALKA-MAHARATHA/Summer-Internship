document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Create user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Save user in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Display a message or redirect the user
    document.getElementById('message').textContent = 'Signup successful!';

    // Optionally, redirect to login page
    // window.location.href = 'login.html';
});
