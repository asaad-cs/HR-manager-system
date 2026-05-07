<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logout</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="sidebar">
        <div class="logo">HR Management System</div>
        <ul class="menu">
            <li class="menu-item"><a href="index.html">Home</a></li>
            <li class="menu-item"><a href="manage_employees.html">Manage Employees</a></li>
            <li class="menu-item"><a href="manage_leaves.html">Manage Leaves</a></li>
            <li class="menu-item"><a href="view_attendance.html">View Attendance</a></li>
            <li class="menu-item"><a href="update_profile.html">Update Profile</a></li>
            <li class="menu-item"><a href="change_password.html">Change Password</a></li>
            <li class="menu-item"><a href="about.html">About</a></li>
            <li class="menu-item"><a href="Logout.html">Logout</a></li>
        </ul>
    </nav>

    <main class="main-content">
        <section class="logout-container">
            <h1 class="section-title">You have successfully logged out.</h1>
            <p>Thank you for using the HR Management System. You will be redirected to the login page shortly.</p>
            <button id="loginRedirectBtn">Go to Login</button>
        </section>
    </main>

    <!-- JavaScript -->
    <script>
        // Redirect user to login page after clicking the button
        document.getElementById("loginRedirectBtn").addEventListener("click", function() {
            window.location.href = "login.html";  // Replace "login.html" with your login page
        });

        // Automatically redirect after 5 seconds
        setTimeout(function() {
            window.location.href = "login.html"; // Adjust the redirect page
        }, 5000);
    </script>
</body>
</html>
