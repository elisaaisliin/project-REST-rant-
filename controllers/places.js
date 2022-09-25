const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.post('/', (req, res) => {
  console.log(req.body)
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/modern.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/resturant.jpg'
      }]      
  res.render('places/index', { places })
})

module.exports = router
