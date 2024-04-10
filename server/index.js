const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.listen(3002, ()=>{
console.log('Server is running on port 3002')
})


const db = mysql. createConnection({
user: 'root',
host: 'localhost',
password: '', 
database: 'customerinfo',
})



app.post('/register', (req, res)=>{
  
  const sentEmail = req.body.Email
  const sentUserName = req.body.UserName
  const sentPassword = req.body.Password
  
  
  const SQL = 'INSERT INTO customerinfo (email, username,password) VALUES (?,?, ?)' //We are going to enterthese values through a variable
  const Values = [sentEmail, sentUserName, sentPassword]
  
  db.query(SQL, Values, (err, results)=>{
    if(err){
    res. send(err)
    }
    else{
    console.log('Customer inserted succcessfully!')
    res. send({message: 'Customer added!'})
    }
  
  })

})