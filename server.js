const express = require('express');
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4545;

class Server {
    constructor() {
        this.initMiddlewares();
        this.initStaticFiles();
        this.initRoutes();
        this.start();   
    }

    initMiddlewares(){
        app.use(cors());
    }

    initStaticFiles(){   
        app.use(express.static(path.join(__dirname, "./build")));
    }

    initRoutes(){

        // keep at end
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "./build/index.html"))
        })
    }

    start(){
        app.listen(port, () => console.log(`app listening on port ${port}`));
    }

}

new Server();






