document.getElementById('subscribeButton').onclick = function() {
    alert('You subscribed to my blog website');
};


function displayUploadTimes() {
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        const dateTimeContainer = post.querySelector('.dateTimeContainer');
        const uploadTime = post.getAttribute('data-upload-time');
        const uploadDate = new Date(uploadTime);
        const formattedDate = uploadDate.toLocaleDateString();
        const formattedTime = uploadDate.toLocaleTimeString();
        dateTimeContainer.innerHTML = `Upload Date: ${formattedDate} <br> Upload Time: ${formattedTime}`;
    });
}

// Display the upload times immediately when the page loads
displayUploadTimes();



// Add event listener to read more buttons
document.querySelectorAll('.post button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle read more content
        button.parentNode.querySelector('.read-more-content').classList.toggle('show');
    });
});


document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const commentText = document.getElementById('comment').value;

    if (commentText.trim()) {
        const commentList = document.getElementById('commentsList');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);

        document.getElementById('comment').value = '';
    }
});







document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const readLessButtons = document.querySelectorAll('.read-less');
    const moreTexts = document.querySelectorAll('.more-text');

    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            moreTexts[index].style.display = 'inline'; // Display expanded text
            readMoreButtons[index].style.display = 'none'; // Hide "Read More" button
            readLessButtons[index].style.display = 'inline'; // Show "Read Less" button
        });
    });

    readLessButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            moreTexts[index].style.display = 'none'; // Hide expanded text
            readMoreButtons[index].style.display = 'inline'; // Show "Read More" button
            readLessButtons[index].style.display = 'none'; // Hide "Read Less" button
        });
    });
});




