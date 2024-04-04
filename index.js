require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//twitter
app.get('/twitter',(req, res)=>{
    res.send('Log in Succesfully')
})
//login
app.get('/login',(req,res)=>{
    res.send('Login Successfully')
})
// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
 