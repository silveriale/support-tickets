/** termos geralmente usados p nomear arquivos
 * CREATE - criar
 * INDEX - listar
 * SHOW - exibir
 * UPDATE - atualizar
 * REMOVE - remover
 */

export function index({ request, response, database }) {
  const { status } = request.query; // Extrai o status da consulta, se existir

  const filters = status ? { status } : null; // Cria um objeto de filtros com o status, se fornecido. se não, retorna nulo

  // Função para listar todos os tickets
  const tickets = database.select("tickets", filters); // Seleciona todos os tickets do banco de dados, aplicando os filtros, se existirem

  return response.end(JSON.stringify(tickets)); // Retorna os tickets como resposta
}
