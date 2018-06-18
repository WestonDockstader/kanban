var mongoose = require('mongoose')
var connectionString = 'mongodb://guest:guest1@ds263460.mlab.com:63460/kanban-dock'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})