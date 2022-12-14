const React = require('react')

function Def (html) {
    return (
      <html>
        <head>
          <title>Title</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/places">Places</a>
              </li>
              <li>
                <a href="/places/new">New Place</a>
              </li>
            </ul>
          </nav>
          {html.children}
          <footer class="footer mt-auto py-3 bg-">
            <div class="container">
              <span class="text-muted">made by elisa de casas</span>
            </div>
          </footer>
        </body>
      </html>
    );
  }
  

module.exports = Def