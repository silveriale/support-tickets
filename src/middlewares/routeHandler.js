import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database(); // Instancia o banco de dados

export function routeHandler(request, response) {
  // Define a rota para obter todos os tickets
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url); // Verifica se o método e o caminho da rota correspondem ao pedido
  });

  // Se a rota for encontrada, chama o controlador
  if (route) {
    const routeParams = request.url.match(route.path); // Extrai os parâmetros da rota

    const { query } = routeParams.groups; // Extrai a parte da consulta da URL, se existir
    request.query = query ? extractQueryParams(query) : {}; // Extrai os parâmetros de consulta, se existirem, se não, define como um objeto vazio

    return route.controller({ request, response, database });
  }
  // Se a rota não for encontrada, retorna um erro 404
  return response.writeHead(404).end();
}
