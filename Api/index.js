const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env || 3001;
// Hora y fecha de Colombia
const moment = require("moment-timezone");

// Configurar la zona horaria de Colombia (Bogotá)
moment.tz.setDefault("America/Bogota");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at", PORT); // eslint-disable-line no-console
  });
});
// TRUE para eliminar BD y FALSE para conservar //
