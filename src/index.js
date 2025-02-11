// 1._Importamos express y lo ejecutamos
const express = require("express");
const app = express();

// IMPORTANTE antes de las rutas
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({extend:true}));

// 4._Creación de rutas
const router= require("./routes/clientes")
app.use("/api",router)

// 2._Definimos el puerto del servidor
const PORT = process.env.PORT || 3000;

// 3._Arrancamos el servidor en el puerto 3000
app.listen(PORT, () => console.log("Conectado al puerto http://localhost:" + PORT + "/api/users")) 