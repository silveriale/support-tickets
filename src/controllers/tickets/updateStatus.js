export function updateStatus({ request, response, database }) {
  const { id } = request.params; // Extrai o ID do ticket dos parâmetros da solicitação

  const { solution } = request.body; // Extrai a solução do corpo da solicitação

  database.update("tickets", id, {
    status: "closed",
    solution,
  }); // Define o status do ticket como fechado e adiciona a solução

  return response.end();
}
