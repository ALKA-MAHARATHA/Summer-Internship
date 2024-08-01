document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get stored user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        // Check if the credentials match
        if (email === storedUser.email && password === storedUser.password) {
            document.getElementById('message').textContent = 'Login successful!';
            // Optionally, redirect to another page
            // window.location.href = 'dashboard.html';
        } else {
            document.getElementById('message').textContent = 'Invalid email or password.';
        }
    } else {
        document.getElementById('message').textContent = 'No user found. Please sign up.';
    }
});
