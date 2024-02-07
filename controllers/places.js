const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=> {
    res.render('places/index', {places})
  })
  .catch( err => {
    console.log(err)
    res.render('error404')
  })

})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/350/350'
  }
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.post('/:id/comment', (req, res) => {
  // Convert "rant" from "on" or undefined to true/false
  if (req.body.rant === "on") {
    req.body.rant = true;
  } else {
    // Assuming unchecked boxes do not send any value, we explicitly set it to false
    req.body.rant = false;
  }
  db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id);
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`);
            })
        })
        .catch(err => {
          console.log(err);
            res.render('error404');
        })
    })
    .catch(err => {
      console.log(err);
        res.render('error404');
    })
});



router.delete('/:id/comment/:rantId', (req, res) => {
    res.send('GET /places/:id//:rantId stub')
})

module.exports = router

// BEFORE MONGOOSE const router = require('express').Router()
// const places = require('../models/placelist.js')

// router.get('/:id', (req, res) => {
//   let id = Number (req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', {place: places[id], id})
//   }
// })

// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id], id})
//   }
// })

// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if  (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         if (!req.body.pic) {
//         req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city='Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state='USA'
//         }
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
// })

// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })

// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// router.get ('/', function(req, res) { 
//   res.render('places/index', {places})     
// })

// router.post('/', (req, res) => {
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// module.exports = router
