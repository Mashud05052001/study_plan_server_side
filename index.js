const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors());

const courses = require('./courses.json')
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const dynamicId = req.params.id;
    const selectedCourse = courses.find(item => item._id === dynamicId);
    res.send(selectedCourse);
})
app.get('/category/:id', (req, res) => {
    const dynamicId = req.params.id;
    if (dynamicId === "0") {
        res.send(courses);
    }
    else {
        const selectedCourse = courses.filter(item => item.index === dynamicId);
        res.send(selectedCourse);
    }
})



app.get('/', (req, res) => {
    res.send('Welcome To the backend data of my meta4 courses')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// 6354dbccpb7fedf95e6c982e
// 6356dbccab7fedf95e6c182e
// 6356dbcb57231cdab28ee609
// 6356dbcb8fd0780512c476f1
// 6356dbcbf62fa4c9c55e1168
// 6356f9db674ebf1a781b86ac
// 6356f9db674ebf1a781b86ad
// 6356f9db674ebf1a781b86ae