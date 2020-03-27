const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentContoller');
const ProfileContoller = require('./controller/ProfileContoller');
const SessionController = require('./controller/SessionController');

const routes = express.Router()

routes.post('/session', SessionController.create)

// lista itens do banco de dados
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileContoller.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes