// Serves a Swagger UI with API definitions either created on the fly
// or loaded from file system.
//
// Needs @sap/cds-dk >= 3.3.0 installed
const cds = require ('@sap/cds')
const cors = require('cors')


let app

// var logger = winston.createLogger({
//     // Bind transport to winston
//     transports: [log.createWinstonTransport()]
// });



cds
  .on ('bootstrap', _app => {
    app = _app
    app.use(cors())  // allow to be called from e.g. editor.swagger.io
    app.get('/health', (_, res) => {
      res.status(200).send('OK');
    });
  })
  .on ('bootstrap', _app => {
    app = _app
    const cdsSwagger = require('cds-swagger-ui-express');
    app.use(cdsSwagger());
  })



// logger.log("info", "Server is listening on port %d", 4004);

module.exports = cds.server