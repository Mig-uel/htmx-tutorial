import BOOKS from '../data/data.js'
import createBookTemplate from './book.js'

const createBooksListTemplate = () => /*html*/ `
<ul>
  ${BOOKS.map(createBookTemplate)}
</ul>`

export default createBooksListTemplate
