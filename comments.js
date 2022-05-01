const commentsContainer = document.querySelector('.comments__container')
const commentForm = document.querySelector('.comments__add')
const comments = []

function postComment(e) {
  e.preventDefault()
  const comment = e.target.comment.value.trim()
  const commentTested = /[\S+]/.test(comment)
  if(e.target.comment.value && commentTested) {
    comments.push(`<p class="comment"><span class="p__span">Comment</span> ${comment}</p>`)
    commentsContainer.innerHTML = comments.join('')
  }
}
commentForm.addEventListener('submit', postComment)