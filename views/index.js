const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="stylesheet"  href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Reading List</title>
    <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
  </head>

  <body>
    <header class="heading"><h1>
      My Reading List
    </h1></header>

    <main>
      <div class="book-list">
        <button hx-get="/books" hx-target="closest div" type="button" hx-trigger="dblclick">Show Books</button>
      </div>

      <div class="add-book-form">
        <h2>What do you want to read?</h2>
        
        <form
          hx-post="/books"
          hx-target=".book-list ul"
          hx-swap="beforeend"
          hx-on::after-request="document.querySelector('form').reset()">

          <input type="text" name="title" placeholder="title" required>

          <input type="text" name="author" placeholder="author" required>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </main>
  </body>
  </html>
`

export default createHomepageTemplate
