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



app.get('/', (req, res) => {
    res.send('Welcome To the backend data of my meta4 courses')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})