document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('list');
    let count = 0;
    let intervalId;
    let likes = {};
    let isPaused = false;
  
    function incrementCounter() {
      count++;
      counterDisplay.textContent = count;
    }
  
    function decrementCounter() {
      count--;
      counterDisplay.textContent = count;
    }
  
    function likeCurrentNumber() {
      likes[count] = (likes[count] || 0) + 1;
      renderLikes();
    }
  
    function renderLikes() {
      likesList.innerHTML = '';
      for (let num in likes) {
        const li = document.createElement('li');
        li.textContent = `${num} has been liked ${likes[num]} times`;
        likesList.appendChild(li);
      }
    }
  
    function pauseCounter() {
      clearInterval(intervalId);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.textContent = 'Resume';
      isPaused = true;
    }
  
    function resumeCounter() {
      intervalId = setInterval(incrementCounter, 1000);
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      pauseButton.textContent = 'Pause';
      isPaused = false;
    }
  
    function addComment(event) {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value;
      const comment = document.createElement('p');
      comment.textContent = commentText;
      commentsList.appendChild(comment);
      commentInput.value = '';
    }
  
    plusButton.addEventListener('click', incrementCounter);
    minusButton.addEventListener('click', decrementCounter);
    likeButton.addEventListener('click', likeCurrentNumber);
    pauseButton.addEventListener('click', function() {
      if (isPaused) {
        resumeCounter();
      } else {
        pauseCounter();
      }
    });
    resumeButton.addEventListener('click', resumeCounter);
    commentForm.addEventListener('submit', addComment);
  
    intervalId = setInterval(incrementCounter, 1000);
  });
  