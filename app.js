// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:

const express = require('express')

const app = express()

const articles = require('./data/articles.json')    

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Welcome Ironhacker. :) with nodemon</h1>')
})
app.get('/blog', (request, response) => {
  response.send('<h1>Welcome Ironhacker. :) Blog Page</h1>')
})

app.get('/api/books', (_, response) => {
  const books = [
    { title: 'Rick&Morty', pages: 35 },
    { title: 'Solo Leveling', pages: 150 },
    { title: 'Arslan', pages: 150 },
  ]

  response.json(books)
})
app.get('/api/articles', (_, response) => {

  response.json(articles)
})
app.get('/api/projects', (_, response) => {
    const projects = [
        {
            "title": "Blackjack Game",
            "description": "Simple blackjack game, built with vanilla JavaScript, HTML, and CSS.",
            "image": "https://placehold.co/600x400/4265E6/FFFFFF.png?text=Project+Screenshot",
            "github": "https://github.com/exampleuser/examplerepo",
            "deployed": "http://example.com",
            "techStack": ["HTML", "CSS", "JavaScript"]
        },
        {
            "title": "Jira Clone",
            "description": "Bootcamp group project. Full stack application built with React, JSON Server, and React Testing Library",
            "image": "",
            "github": "https://github.com/exampleuser/examplerepo",
            "deployed": "http://example.com",
            "techStack": ["React", "Node", "JSON Server", "React Testing Library"]
        },
        {
            "title": "Cohort Tools",
            "description": "Bootcamp group project. Full stack application built with React, Node, ExpressJS,  MongoDB, and Tailwind.",
            "image": "",
            "github": "https://github.com/exampleuser/examplerepo",
            "deployed": "http://example.com",
            "techStack": ["React", "Node", "Express", "MongoDB", "Tailwind"]
        },    
        {
            "title": "Weather Dashboard",
            "description": "Weather tracking application built with React, Node, ExpressJS, MongoDB, Ant Design, and OpenWeather API.",
            "image": "",
            "github": "https://github.com/exampleuser/examplerepo",
            "deployed": "http://example.com",
            "techStack": ["React", "Node", "Express", "MongoDB", "Ant Design"]
        }
    ]

  response.json(projects)
})



    app.get('/home', (_, response) => {

        response.status (404).sendFile (__dirname + "/home.html")
      })
      
    app.get('/*', (_, response) => {

        response.status (404).sendFile (__dirname + "/not-found.html")
      })

  
app.listen(5005, () => console.log('My first app listening on port 5005!'))

// START THE SERVER
// Make your Express server listen on port 5005:
