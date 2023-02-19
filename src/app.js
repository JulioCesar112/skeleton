const express = require('express')
const app = express()
app.use(express.json())
const {port} = require('./config')


app.get('/',(req, res) => {
  res.status(200).json({
    message:'OK',
    users:`localhost: ${port}/api/v1/users`
  })
})


app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})