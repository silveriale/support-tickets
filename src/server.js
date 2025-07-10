import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

// Cria um servidor HTTP que escuta na porta 3333 e usa o middleware jsonHandler para processar requisições JSON
async function listener(request, response) {
  await jsonHandler(request, response);
  console.log(request.body);
}

http.createServer(listener).listen(3333);
