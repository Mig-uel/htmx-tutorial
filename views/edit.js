const createEditFormTemplate = (book) => /*html*/ `
<form>
  <input type="text" name="title" placeholder="title" value="${book.title}" required>

  <input type="text" name="author" placeholder="author" value="${book.author}" required>

  <button type="submit">Add Book</button>
</form>
`

export default createEditFormTemplate
