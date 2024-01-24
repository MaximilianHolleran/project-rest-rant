const React = require('react')
const Def = require('./default')

function error404() {
    return(
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND HAHA GOT EM</h1>
            <div className="fourofour-image">
                <img src="/images/404-visuals.jpg" alt="404 error with tye dye background" />
                <div>
                    Photo by <a href="https://unsplash.com/@visuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">visuals</a> on <a href="https://unsplash.com/photos/blue-and-white-star-illustration-JpTY4gUviJM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
            <p>Oops, you went to page we cant find silly goose!</p>
        </main>
    </Def>
    )
}

module.exports = error404