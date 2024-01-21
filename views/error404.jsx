const React = require('react')
const Def = require('./default')

function error404() {
    return(
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND HAHA GOT EM</h1>
            <p>Oops, you went to page we cant find silly goose!</p>
        </main>
    </Def>
    )
}

module.exports = error404