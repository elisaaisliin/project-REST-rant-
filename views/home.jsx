const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="/images/sushi-rolls.jpg" alt="sushi rolls" />
                <div>
                  Photo by <a href="https://unsplash.com/@deram31?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Riccardo Bergamini</a> on <a href="https://unsplash.com/s/photos/sushi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
            </a>
          </main>

      </Def>
    )
  }
  
module.exports = home