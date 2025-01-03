document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const postList = document.getElementById('postList');
    const commentList = document.getElementById('commentList');
    const backLink = document.getElementById('backLink');

    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <strong>${user.name}</strong><br>
                    Website: <a href="${user.website}" target="_blank">${user.website}</a><br>
                    Company: ${user.company.name}<br>
                    <button onclick="loadPosts(${user.id})">View Posts</button>
                `;
                userList.appendChild(userDiv);
            });
        });

    // Load posts for a specific user
    window.loadPosts = function(userId) {
        userList.style.display = 'none';
        postList.style.display = 'block';
        backLink.style.display = 'block';
        postList.innerHTML = '';

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <button onclick="toggleComments(${post.id}, this)">Show Comments</button>
                        <div class="comment-list" id="comments-${post.id}" style="display: none;"></div>
                    `;
                    postList.appendChild(postDiv);
                });
            });
    };

    // Toggle comments for a specific post
    window.toggleComments = function(postId, button) {
        const commentsDiv = document.getElementById(`comments-${postId}`);
        if (commentsDiv.style.display === 'none') {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(response => response.json())
                .then(comments => {
                    commentsDiv.innerHTML = '';
                    comments.forEach(comment => {
                        const commentDiv = document.createElement('div');
                        commentDiv.className = 'comment';
                        commentDiv.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}`;
                        commentsDiv.appendChild(commentDiv);
                    });
                    commentsDiv.style.display = 'block';
                    button.textContent = 'Hide Comments';
                });
        } else {
            commentsDiv.style.display = 'none';
            button.textContent = 'Show Comments';
        }
    };

    // Back to users
    backLink.addEventListener('click', () => {
        userList.style.display = 'inline-block';
        postList.style.display = 'none';
        commentList.style.display = 'none';
        backLink.style.display = 'none';
    });
});