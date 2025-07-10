export async function jsonHandler(request, response) {
  const buffers = [];

  // Percorre cada pedaço (chunk) do corpo da requisição e armazena em uma lista (buffers)
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // adiciona dentro da requisição a propriedade de body
    // Concatena todos os pedaços e converte para string, depois para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }
  //define o formato do conteudo da resposta como JSON
  response.setHeader("Content-Type", "application/json");
}
