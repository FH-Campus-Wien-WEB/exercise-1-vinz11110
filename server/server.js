const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.json(
    [{"Title":"Man on Fire","Released":"2004-04-23","Runtime":146,"Genres":["Action", "Crime", "Drama"],"Directors":["Tony Scott"],"Writers":["A.J. Quinnell", "Brian Helgeland"],"Actors":["Denzel Washington", "Christopher Walken", "Dakota Fanning"],"Plot":"In Mexico City, a former CIA operative swears vengeance on those who committed an unspeakable act against the family he was hired to protect.","Poster":"https://m.media-amazon.com/images/M/MV5BMGMzNjg3ZDgtOGNlNy00NTdjLWI2NDEtMjI1MmEwMTBmMjMxXkEyXkFqcGc@._V1_SX300.jpg","Metascore":47,"imdbRating":7.7},
    {"Title":"Requiem for a Dream","Released":"2000-12-15","Runtime":102,"Genres":["Drama"],"Directors":["Darren Aronofsky"],"Writers":["Hubert Selby Jr.", "Darren Aronofsky"],"Actors":["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"],"Plot":"The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.","Poster":"https://m.media-amazon.com/images/M/MV5BN2ZlMjIzZjctYzA2My00ZWYyLWI4ZjctMGI2NWYyNzFiZjAwXkEyXkFqcGc@._V1_SX300.jpg","Metascore": 71,"imdbRating": 8.3},
    {"Title":"Memento","Released":"2001-05-25","Runtime":113,"Genres":["Drama", "Mystery", "Thriller"],"Directors":["Christopher Nolan"],"Writers":["Christopher Nolan", "Jonathan Nolan"],"Actors":["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],"Plot":"A former insurance investigator who now suffers from anterograde amnesia uses notes and tattoos to hunt down his wife's murderer.","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_SX300.jpg","Metascore":83,"imdbRating":8.4}
  ])
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

