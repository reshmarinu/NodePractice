const express =  require('express')
const app     =  express()
const port    = 3000

app.get('/api',(req,res)=>{
    res.send('Hello World')
})

//Registering API Endpoint
app.use('/hello', require('../NodePractice/routes/public/hello'))


// Create server .
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }) 