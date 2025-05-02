const createBookTemplate = (book) => /*html*/ `
<li data-id="${book.id}">
  <div class="details" hx-get="/books/edit/${book.id}" hx-get="/books/edit/${book.id}" hx-target="closest li">
    <h3>${book.title}</h3>
    <p>${book.author}</p>
  </div>

  <button
  hx-target="closest li"
  hx-swap="outerHTML"
  hx-delete="/books/${book.id}" 
  hx-on:click="event.stopPropagation()">Delete</button>
</li>`

export default createBookTemplate
