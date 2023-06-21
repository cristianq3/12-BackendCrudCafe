import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config(); //habilita poder usar variables de entorno. (ES UN MIDDLEWARE PERO VA ANTRES DE DECLARA VARIABLES ENTORNO)
// Configurar un puerto
//crear una instancia de express la llamo app pero puede llamarse como sea
const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), ()=> {
    console.log("Estoy en el puerto " + app.get('PORT'))
})

//Invocar a los Middlewares : Funciones pequeñas que se ejecutan antes de las rutas.
app.use(express.json())// permite interpretar el formato JSON en un request. 
app.use(express.urlencoded({extend:true})) // permite interpretar string y arrays del request.
app.use(cors()); // permite conexiones remotas
// app.use(morgan('dev'));




//Rutas (solicutudes get/put etc)