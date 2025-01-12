
var question = document.createElement('p');
question.innerText = 'Projelerimi beğendiniz mi?';
question.style.fontSize = '20px';
question.style.fontWeight = 'bold';
question.style.marginBottom = '20px';
question.style.textAlign = 'center';
document.body.appendChild(question);

var buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';
buttonsContainer.style.gap = '15px';

var yesButton = document.createElement('button');
yesButton.innerText = 'Evet';
yesButton.style.backgroundColor = '#4CAF50';
yesButton.style.color = 'white';
yesButton.style.padding = '12px 20px';
yesButton.style.border = 'none';
yesButton.style.borderRadius = '5px';
yesButton.style.fontSize = '16px';
yesButton.style.cursor = 'pointer';

var noButton = document.createElement('button');
noButton.innerText = 'Hayır';
noButton.style.backgroundColor = '#F44336';
noButton.style.color = 'white';
noButton.style.padding = '12px 20px';
noButton.style.border = 'none';
noButton.style.borderRadius = '5px';
noButton.style.fontSize = '16px';
noButton.style.cursor = 'pointer';

var maybeButton = document.createElement('button');
maybeButton.innerText = 'Kısmen';
maybeButton.style.backgroundColor = '#FFC107';
maybeButton.style.color = 'white';
maybeButton.style.padding = '12px 20px';
maybeButton.style.border = 'none';
maybeButton.style.borderRadius = '5px';
maybeButton.style.fontSize = '16px';
maybeButton.style.cursor = 'pointer';

buttonsContainer.appendChild(yesButton);
buttonsContainer.appendChild(noButton);
buttonsContainer.appendChild(maybeButton);

document.body.appendChild(buttonsContainer);


var commentSection = document.createElement('div');
commentSection.style.textAlign = 'center';
document.body.appendChild(commentSection);


function showUserFeedback(response) {
  var feedbackMessage = document.createElement('p');
  feedbackMessage.style.fontSize = '18px';
  feedbackMessage.style.fontWeight = 'bold';
  feedbackMessage.style.marginTop = '20px';
  feedbackMessage.innerText = `Son seçiminiz: ${response}`;
  feedbackMessage.style.color = '#333';
  document.body.appendChild(feedbackMessage);
}

function confirmChoice(response) {
  var confirmation = confirm(`Seçiminiz: ${response}. Onaylıyor musunuz?`);
  if (confirmation) {
    localStorage.setItem('surveyResponse', response);
    showUserFeedback(response);
    showCommentSection(response);  
  }
}


function showCommentSection(response) {
  var commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Yorumunuzu buraya yazın...';
  commentInput.style.width = '80%';
  commentInput.style.height = '80px';
  commentInput.style.padding = '10px';
  commentInput.style.marginTop = '20px';
  commentInput.style.border = '1px solid #ccc';
  commentInput.style.borderRadius = '5px';

  var submitCommentButton = document.createElement('button');
  submitCommentButton.innerText = 'Yorumu Gönder';
  submitCommentButton.style.padding = '10px 15px';
  submitCommentButton.style.backgroundColor = '#007BFF';
  submitCommentButton.style.color = 'white';
  submitCommentButton.style.border = 'none';
  submitCommentButton.style.borderRadius = '5px';
  submitCommentButton.style.marginTop = '10px';
  submitCommentButton.style.cursor = 'pointer';

  submitCommentButton.addEventListener('click', function() {
    var comment = commentInput.value.trim();
    if (comment) {
      localStorage.setItem('comment', comment);  
      alert('Yorumunuz başarıyla gönderildi!');
    } else {
      alert('Lütfen yorumunuzu yazın!');
    }
  });

  commentSection.innerHTML = '';
  commentSection.appendChild(commentInput);
  commentSection.appendChild(submitCommentButton);
}

yesButton.addEventListener('click', function() {
  confirmChoice('Evet');
});

noButton.addEventListener('click', function() {
  confirmChoice('Hayır');
});

maybeButton.addEventListener('click', function() {
  confirmChoice('Belki');
});

window.addEventListener('load', function() {
  var previousResponse = localStorage.getItem('surveyResponse');
  var previousComment = localStorage.getItem('comment');
  if (previousResponse) {
    showUserFeedback(previousResponse);
  }
  if (previousComment) {
    alert('Önceki yorumunuz: ' + previousComment);
  }
});


var form = document.createElement('form');
form.style.marginBottom = '20px';  
var input = document.createElement('input');
input.setAttribute('placeholder', 'Yorumunuzu buraya yazın...');
input.style.width = '300px';
input.style.height = '30px';
input.style.marginRight = '10px';
input.style.padding = '5px';
var submitButton = document.createElement('button');
submitButton.innerText = 'Yorum Yap';
submitButton.style.backgroundColor = '#4CAF50';
submitButton.style.color = 'white';
submitButton.style.padding = '10px 15px';
submitButton.style.border = 'none';
submitButton.style.cursor = 'pointer';
form.appendChild(input);
form.appendChild(submitButton);
document.body.appendChild(form);

var commentSection = document.createElement('div');
commentSection.style.marginTop = '20px';
document.body.appendChild(commentSection);

function loadComments() {
  var comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(function(comment) {
    displayComment(comment.text, comment.timestamp);
  });
}

form.addEventListener('submit', function(event) {
  event.preventDefault();  

  var comment = input.value.trim();  
  if (comment) {
    var timestamp = new Date().toLocaleString(); 
    displayComment(comment, timestamp);

  
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ text: comment, timestamp: timestamp });
    localStorage.setItem('comments', JSON.stringify(comments));

    input.value = '';  
  } else {
    alert('Lütfen boş yorum bırakmayın!');
  }
});

function displayComment(commentText, timestamp) {
  var newComment = document.createElement('div');
  newComment.style.backgroundColor = '#f1f1f1';
  newComment.style.border = '1px solid #ddd';
  newComment.style.padding = '10px';
  newComment.style.marginBottom = '10px';
  newComment.style.borderRadius = '5px';
  newComment.style.fontSize = '16px';

  var commentTextElement = document.createElement('p');
  commentTextElement.innerText = commentText;
  newComment.appendChild(commentTextElement);

  var timestampElement = document.createElement('small');
  timestampElement.innerText = 'Yorum zamanı: ' + timestamp;
  timestampElement.style.display = 'block';
  timestampElement.style.marginTop = '5px';
  timestampElement.style.fontStyle = 'italic';
  newComment.appendChild(timestampElement);

  var actionsContainer = document.createElement('div');
  actionsContainer.style.marginTop = '10px';
  newComment.appendChild(actionsContainer);

  var editButton = document.createElement('button');
  editButton.innerText = 'Düzenle';
  editButton.style.backgroundColor = '#FFC107';
  editButton.style.color = 'white';
  editButton.style.padding = '5px 10px';
  editButton.style.border = 'none';
  editButton.style.cursor = 'pointer';
  actionsContainer.appendChild(editButton);

  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Sil';
  deleteButton.style.backgroundColor = '#F44336';
  deleteButton.style.color = 'white';
  deleteButton.style.padding = '5px 10px';
  deleteButton.style.border = 'none';
  deleteButton.style.cursor = 'pointer';
  actionsContainer.appendChild(deleteButton);

  
  editButton.addEventListener('click', function() {
    input.value = commentText;
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(function(c) {
      return c.text !== commentText;  
    });
    localStorage.setItem('comments', JSON.stringify(comments));  
    newComment.remove(); 
  });

  
  deleteButton.addEventListener('click', function() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(function(c) {
      return c.text !== commentText;  
    });
    localStorage.setItem('comments', JSON.stringify(comments));  
    newComment.remove();  
  });

  commentSection.appendChild(newComment);
}

loadComments();

