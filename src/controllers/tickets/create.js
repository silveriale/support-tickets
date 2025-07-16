import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
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

  database.insert("tickets", ticket); // Insere o ticket no banco de dados

  return response.writeHead(201).end(JSON.stringify(ticket)); // Retorna o ticket criado como resposta
}
