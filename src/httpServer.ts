import app from "./app"; // Usando import no lugar de require

import { createServer } from "node:http"; // Usando import no lugar de require

export const httpServer = createServer(app);
