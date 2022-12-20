const express = require("express")
const cors = require('cors')
const routes = require('./src/routes/Routes');

class Server {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.cors();
        this.server.listen(3000, (() => console.log(`Servidor rodando na prta ${3000}`)))
    }

    middlewares() {
        this.server.use(express.json());
    }
    cors() {
        this.server.use(cors())
    }

    routes() {
        this.server.use("/api", cors({ origin: '*' }), routes);
    }
}

module.exports = new Server();
