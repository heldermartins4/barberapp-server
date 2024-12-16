import { httpServer } from "./httpServer";
import dotenv from "dotenv"; // Usando import no lugar de require

dotenv.config(); // Configurando as variáveis de ambiente

export const url = process.env.PROD_URL || process.env.DEV_URL;

httpServer.listen(5000, () => {
  console.log(`Server started on ${url} at ${new Date()}`);
});
