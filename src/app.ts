import express, { Application } from "express"; // Usando import no lugar de require
import cors from "cors"
import routes from "./routes"; // Corrigido a importação do router

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

export default app;
