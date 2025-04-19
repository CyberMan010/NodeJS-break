const express = require('express');
const app = express(); 
const PORT = 8282 

let data = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

app.get('/', (req, res) => {
   console.log("we hit an endpoint" ,req.method)
   res.send('<h1>this is home page</h1>')
})
app.get('/dashboard', (req, res) => {
   console.log("we hit an endpoint dashboard", req.method)
    res.send('<h1>this is dashboard page</h1>')
})

// api endpoint to get data
app.get('/api/data', (req, res) => {
    console.log("this one was for data", req.method)
    res.json(data);
})
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));