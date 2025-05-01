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
    <header>My Reading List</header>

    <main>
      <div class="book-list">
        <!-- book list here later -->
      </div>

      <div class="add-book-form">
        <h2>What do you want to read?</h2>
        <!-- form template here later -->
      </div>
    </main>
  </body>
  </html>
`

export default createHomepageTemplate
