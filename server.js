const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

app.get('/', (request, response) => {
  response.send('Palette Picker 2');
});

app.get('/api/v1/projects', (request, response) => {
  database('projects').select()
  .then((projects) => {
    response.status(200).json(projects);
  })
  .catch((error) => {
    response.status(500).json({error})
  })
});

app.get('/api/v1/palettes', (request, response) => {
  database('palettes').select()
  .then((palettes) => {
    response.status(200).json(palettes)
  })
  .catch((error) => {
    response.status(500).json({error})
    })
})

app.post('/api/v1/projects', (request, response) => {
  const project = request.body;
  console.log(request.body);

  //*set required parameters here
  
  database('projects').insert(project, 'id')
    .then(project => {
      return response.status(201).json({id: project[0]})
    })
    .catch(error => {
      response.status(500).json({error});
    });
})
