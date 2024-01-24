const React = require('react')
const Def = require('./default')

function Home() {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div className="home-image">
                <img src="/images/chad-montano-burger-unsplash.jpg" alt="Breakfast Burger from Chad Montano" />
              </div>
              <div className="home-image-credit">
                Photo by <a href="https://unsplash.com/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chad Montano</a> on <a href="https://unsplash.com/photos/burgers--GFCYhoRe48?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div>
                <a href="/places">
                  <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
  }

module.exports = Home
