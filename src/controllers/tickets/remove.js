export function remove({ request, response, database }) {
  const { id } = request.params; // Extrai o ID do ticket dos parâmetros da solicitação

  database.delete("tickets", id); // Chama o método delete do banco de dados para remover o ticket com o ID fornecido

  return response.end(); // Retorna nada após a remoção bem-sucedida
}
