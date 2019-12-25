const express = require('express')
const graphql = require('express-graphql')
const db = require('./Config/db')

// schema ---
const schema = require('./Schema/schema')

const app = express()

db.connection.once('open',()=>{
  console.log('db connected..')
})


app.use('/graphql',graphql({
  schema,
  graphiql:true
}))
app.listen(4000,()=>{
    console.log('server running')
})