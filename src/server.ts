import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';

dotenv.config();
import mainRoutes from './routes/index';
const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use( async (req, res)=> {
    res.render('pages/404')
})


//rotas
server.listen(process.env.PORT  || 8080, ()=> {
    console.log("Server Running - PORT: " + process.env.PORT);

    
})
