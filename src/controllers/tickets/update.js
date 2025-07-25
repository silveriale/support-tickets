export function update({ request, response, database }) {
  // Controlador para atualizar um ticket
  const { id } = request.params; // Extrai o ID do ticket dos parâmetros da solicitação
  const { equipment, description } = request.body; // Extrai os dados do equipamento e descrição do corpo da solicitação

  database.update("tickets", id, {
    // Atualiza o ticket com os novos dados
    equipment,
    description,
    updated_at: new Date(),
  });

  return response.end(); // Retorna uma resposta vazia após a atualização bem-sucedida
}
