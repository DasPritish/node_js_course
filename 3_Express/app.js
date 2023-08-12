const express = require('express')

const morgan = require('morgan')
const app = express()
const myMilldlefunc1 = require('./middle1')
const myMilldlefunc2 = require('./middle2')

var courses = [
    {id:1,name:'java'},
    {id:2,name:'Python'},
    {id:3,name:'JavaScript'}
]

// get : read the data from db or object
//,post,put,delete

app.use(express.json())

app.use(myMilldlefunc1)

app.use(myMilldlefunc2)
app.use(morgan('tiny'))

app.get('/', (req , res)=>{
    res.send('Hello from pritish db')
})


app.get('/about', (req , res)=>{
    res.send('Hello from about api')
})



app.get('/contact', (req , res)=>{
    res.send('Contact us on 09887869809')
})

app.get('/courses', (req , res)=>{
    res.send(courses)
})

//Post

app.post('/courses', (req , res)=>{
    const course= {
        id : courses.length +1,
        name : req.body.name
    } 
    courses.push(course)
    res.send(course)
})



// update Data:Put
app.put('/courses/:coursename',(req , res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('Invalid request')
    course.name = req.body.name
    res.send(course)
})

//Delete

app.delete('/courses/:coursename', (req , res)=>{
    courses = courses.filter(course => course.name !== req.params.coursename)
    console.log(courses)
    res.send(courses)
   
})



// Route parameter

app.get('/courses/:coursename', (req , res)=>{
    console.log(req.params)
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('Invalid request')
    res.send(course)
})
const port = process.env.PORT || 4000


app.listen(port, ()=>console.log(`Port is running in ${port}`))