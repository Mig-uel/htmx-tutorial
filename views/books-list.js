import BOOKS from '../data/data.js'
import createBookTemplate from './book.js'

const createBooksListTemplate = () => /*html*/ `
<ul>
  ${BOOKS.map(createBookTemplate).join('')}
</ul>`

export default createBooksListTemplate
