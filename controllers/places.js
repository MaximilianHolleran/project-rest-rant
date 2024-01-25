const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.render('places/new')
  const placeId = req.params.id})


router.get ('/', function(req, res) {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/jerome-jome-unsplash.jpg',
        credit: "https://unsplash.com/@jomemui?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditName: 'Jerome Jome'
  
        
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/reba-spike-unsplash.jpg',
        credit: "https://unsplash.com/@rebaspike?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        creditName: 'Reba Spike'
      }]

      res.render('places/index', {places})
      
})

module.exports = router