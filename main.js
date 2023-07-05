window.onload = function () {
    var blogPosts = [
        {
            title: 'Why I Design',
            link: 'https://quilt-clave-ee4.notion.site/Why-I-Design-d27d38a81d01413089c624b0554b2e39',
        },
        // Add more blog posts here...
    ];
    var postList = document.getElementById('post-list');
    if (postList) {
        blogPosts.forEach(function (post) {
            var postElement = document.createElement('a');
            postElement.href = post.link;
            postElement.textContent = post.title;
            postList.appendChild(postElement);
        });
    }
};
