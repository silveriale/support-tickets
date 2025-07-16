/** termos geralmente usados p nomear arquivos
 * CREATE - criar
 * INDEX - listar
 * SHOW - exibir
 * UPDATE - atualizar
 * REMOVE - remover
 */

export function index({ request, response, database }) {
  // Função para listar todos os tickets
  const tickets = database.select("tickets"); // Seleciona todos os tickets do banco de dados

  return response.end(JSON.stringify(tickets)); // Retorna os tickets como resposta
}
