const express = require('express')
const graphql = require('express-graphql')

// schema ---
const schema = require('./Schema/schema')


const app = express()

app.use('/graphql',graphql({
  schema,
  graphiql:true
}))
app.listen(4000,()=>{
    console.log('server running')
})