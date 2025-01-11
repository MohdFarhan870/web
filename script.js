document.getElementById('article-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const media = document.getElementById('media').files[0];
    
    const articleList = document.getElementById('article-list');
    const article = document.createElement('article');
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    
    article.appendChild(titleElement);
    article.appendChild(contentElement);
    
    if (media) {
        const mediaElement = document.createElement(media.type.startsWith('image/') ? 'img' : 'video');
        mediaElement.src = URL.createObjectURL(media);
        mediaElement.controls = true;
        mediaElement.style.maxWidth = '100%';
        article.appendChild(mediaElement);
    }
    
    articleList.appendChild(article);
    
    // Clear the form
    document.getElementById('article-form').reset();
});
