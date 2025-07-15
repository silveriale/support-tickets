import { routes } from "../routes/index.js";

export function routeHandler(request, response) {
  // Define a rota para obter todos os tickets
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url;
  });

  // Se a rota for encontrada, chama o controlador
  if (route) {
    return route.controller({ request, response });
  }
  // Se a rota não for encontrada, retorna um erro 404
  return response.writeHead(404).end();
}
