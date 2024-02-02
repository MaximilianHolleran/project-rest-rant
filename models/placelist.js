// BEFORE MONGOOSE module.exports =  [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/jerome-jome-unsplash.jpg',
//     credit: "https://unsplash.com/@jomemui?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
//     creditName: 'Jerome Jome'
    
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/reba-spike-unsplash.jpg',
//     credit: "https://unsplash.com/@rebaspike?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
//     creditName: 'Reba Spike'
   
//   }]

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely nopt that old?!'],
    max: [new Date() .getFullYear(), 'Hey this year is in the future!']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
