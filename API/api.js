var Db = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
var expressIp = require('express-ip'); // Import the express-ip middleware

const winston = require('winston'); // this is for logging
// Set up winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: 'logs.log' }),
  ],
});

app.use(expressIp().getIpInfoMiddleware); // Use express-ip middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  logger.info('Request');
  const authHeader = request.headers['authentication'];
  // const authToken = '123'; 
  const authToken = '3856aed2-34ca-405b-9eb5-a7295b1b3291'; 

  if (!authHeader || authHeader !== authToken) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  // Log the API request
  const logData = {
    req_method: request.method || null,
    req_path: request.path || null,
    req_query_parameters: request.query ? JSON.stringify(request.query) : null,
    req_request_body: request.body ? JSON.stringify(request.body) : null,
    req_user_agent: request.get('User-Agent') || null,
    req_remote_ip: request.ipInfo ? request.ipInfo.ip : null, // Use ipInfo to get the remote IP address
  };

  Db.insertAPILog(logData)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.error('Error logging API request:', error);
      next();
    });

  next();
});

router.route('/').get((request, response) => {
  response.json({ Status: 'Up' });
});

router.route('/contacts').get((request, response) => {
  Db.getContacts().then((data) => {
    response.json(data);
  });
});

router.route('/forms').get((request, response) => {
  Db.getForms(request.get('appID')).then((data) => {
    response.json(data);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Clerk of Courts API running on:' + port);
