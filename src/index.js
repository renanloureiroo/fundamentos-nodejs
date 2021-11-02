const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: "Hello world Ignite!" })
})

app.listen(3033, () => console.log("server running in http://localhost:3033"))