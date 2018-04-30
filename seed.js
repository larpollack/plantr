const db = require('./models').db
const Vegetable = require ('./models').Vegetable
const Sequelize = require('sequelize')


const vegetables = [{
  name: 'carrots',
  color: 'orange',
  planted_on: Date.now()
},
{
  name: 'potatoes',
  color: 'brown',
  planted_on: Date.now()
},
{
  name: 'peas',
  color: 'green',
  planted_on: Date.now()
},
]

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!')
  })
  .then(() => {
    return Promise.all(vegetables.map(elem => Vegetable.create(elem)));
    //return Vegetable.create(vegetables)
  })
  
  .catch(err => {
    console.log("something went wrong!")
    console.log(err)
  })
  .finally(() =>{
  db.close()
})