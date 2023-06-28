import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from 'path'; // esta instalado cdo instalo nodejs. es una libreria que muestra la ruta completa

dotenv.config(); //habilita poder usar variables de entorno. (ES UN MIDDLEWARE PERO VA ANTRES DE DECLARA VARIABLES ENTORNO)
// Configurar un puerto
//crear una instancia de express la llamo app pero puede llamarse como sea
const app = express();

app.set("PORT", process.env.PORT || 4000);

app.listen(app.get("PORT"), () => {
  console.log("Estoy en el puerto " + app.get('PORT'));
});

//Invocar a los Middlewares : Funciones pequeñas que se ejecutan antes de las rutas.
app.use(express.json()); // permite interpretar el formato JSON en un request.
app.use(express.urlencoded({ extended: true })); // permite interpretar string y arrays del request.
app.use(cors()); // permite conexiones remotas
app.use(morgan("dev"));
//cargar un archivo estatico
console.log(path.join(__dirname,'/public'));
app.use(express.static(path.join(__dirname,'/public')))

//Rutas (solicutudes get/put etc)

//http://localhost:4000/prueba

app.get("/prueba", (req, res) => {
  res.send("Esta es una prueba de mi ruta GET");
})