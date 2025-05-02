import createBookTemplate from './book.js'

const createBooksListTemplate = (books) => /*html*/ `
<ul>
  ${books.map(createBookTemplate).join('')}
</ul>`

export default createBooksListTemplate
