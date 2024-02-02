const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    pic: '/images/jerome-jome-unsplash.jpg',
    cuisines: 'Thai, Pan-Asian',
    city: 'Seattle',
    state: 'WA',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    pic: '/images/reba-spike-unsplash.jpg',
    cuisines: 'Coffee, Bakery',
    city: 'Phoenix',
    state: 'AZ',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
