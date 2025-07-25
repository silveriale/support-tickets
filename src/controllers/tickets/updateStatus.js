export function updateStatus({ request, response, database }) {
  const { id } = request.params; // Extrai o ID do ticket dos parâmetros da solicitação

  database.update("tickets", id, {
    status: "closed",
  }); // Define o status do ticket como fechado

  return response.end();
}
