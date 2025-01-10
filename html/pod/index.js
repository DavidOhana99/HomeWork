document.addEventListener('DOMContentLoaded', function() {
    const routes = {
        '/': homePage,
        '/podcasts': podcastPage,
        '/blog': blogPage,
        '/about': aboutPage,
        '/contact': contactPage,
        '/admin': adminLoginPage
    };

    function homePage() {
        document.getElementById('content').innerHTML = `
            <h2>Welcome to Sailing Relationships</h2>
            <p>We will be sure to have a smooth and sailing relationship.</p>
        `;
    }

    function podcastPage() {
        document.getElementById('content').innerHTML = `
            <h2>Podcasts</h2>
            <div class="podcast-item">
                <img src="https://placehold.co/600x400" alt="Podcast cover image with a microphone and sound waves">
                <h3>Podcast Episode 1</h3>
                <p>Description of Podcast Episode 1.</p>
            </div>
            <div class="podcast-item">
                <img src="https://placehold.co/600x400" alt="Podcast cover image with a microphone and sound waves">
                <h3>Podcast Episode 2</h3>
                <p>Description of Podcast Episode 2.</p>
            </div>
            <div class="podcast-item">
                <img src="https://placehold.co/600x400" alt="Podcast cover image with a microphone and sound waves">
                <h3>Podcast Episode 3</h3>
                <p>Description of Podcast Episode 3.</p>
            </div>
        `;
    }

    function blogPage() {
        document.getElementById('content').innerHTML = `
            <h2>Blog</h2>
            <div class="blog-item">
                <img src="https://placehold.co/600x400" alt="Blog post cover image with a typewriter and paper">
                <h3>Blog Post 1</h3>
                <p>Description of Blog Post 1.</p>
            </div>
            <div class="blog-item">
                <img src="https://placehold.co/600x400" alt="Blog post cover image with a typewriter and paper">
                <h3>Blog Post 2</h3>
                <p>Description of Blog Post 2.</p>
            </div>
            <div class="blog-item">
                <img src="https://placehold.co/600x400" alt="Blog post cover image with a typewriter and paper">
                <h3>Blog Post 3</h3>
                <p>Description of Blog Post 3.</p>
            </div>
        `;
    }

    function aboutPage() {
        document.getElementById('content').innerHTML = `
            <h2>About Us</h2>
            <p>Information about the podcast website and its creators.</p>
        `;
    }

    function contactPage() {
        document.getElementById('content').innerHTML = `
            <h2>Contact Us</h2>
            <p>Contact form and information.</p>
        `;
    }

    function adminLoginPage() {
        document.getElementById('content').innerHTML = `
            <h2>Admin Login</h2>
            <div class="admin-login">
                <input type="text" placeholder="Username" id="admin-username">
                <input type="password" placeholder="Password" id="admin-password">
                <button onclick="adminLogin()">Login</button>
            </div>
        `;
    }

    function adminLogin() {
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        if (username === 'admin' && password === 'password') {
            alert('Login successful');
        } else {
            alert('Invalid credentials');
        }
    }

    function navigate() {
        const path = window.location.pathname;
        if (routes[path]) {
            routes[path]();
        } else {
            homePage();
        }
    }

    window.onpopstate = navigate;
    navigate();
});