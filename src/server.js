import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

// Cria um servidor HTTP que escuta na porta 3333 e usa o middleware jsonHandler para processar requisições JSON
async function listener(request, response) {
  await jsonHandler(request, response);
  routeHandler(request, response);
}

http.createServer(listener).listen(3333);
