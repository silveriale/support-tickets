import { randomUUID } from "node:crypto";

export function create({ request, response }) {
  // Função para criar um ticket
  const { equipment, description, user_name } = request.body;

  const ticket = {
    id: randomUUID(), // Gera um ID único para o ticket
    equipment,
    description,
    user_name,
    status: "open", // Define o status inicial do ticket como "open"
    created_at: new Date(), // Registra a data de criação do ticket
    updated_at: new Date(), // Registra a data de atualização do ticket
  };
  return response.end(JSON.stringify(ticket)); // Retorna o ticket criado como resposta
}
