const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for(let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return(
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 🤩'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <img src={ data.place.pic} alt={data.place.credit}/>
                <h4>Located in {data.place.city}, {data.place.state}</h4>
                <h3>{data.place.showEstablished}</h3>
                <h3> Serving{ data.place.cuisines }</h3> 
                <div>
                <h2>{rating}</h2>
                <h3>{comments}</h3>
                <form method="POST" action={`/places/${data.place.id}/comment`} className="p-3">
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" name="author" placeholder="Enter author name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content" rows="3" placeholder="Enter content"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="number" className="form-control" id="stars" name="stars" step="0.5" placeholder="Rate from 1 to 5"/>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="rant" name="rant"/>
                        <label className="form-check-label" htmlFor="rant">Rant</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div> 
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>  
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete Place
                    </button>
                </form>     

            </main>
        </Def>
    )
}

module.exports = show
