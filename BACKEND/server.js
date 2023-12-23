//Importaciones
import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import postsRouter from './routes/likesRoutes.js';
import { notFound } from "./src/controllers/likeControllers.js";


//Creacion de instacia&puerto
const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(cors());
app.use(logger());
app.use(express.json());
app.use("/", postsRouter);
app.use("*", notFound)


//Levantando Servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


