// Irá juntar todas as rotas de tickets em um único arquivo
import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

export const routes = [...tickets].map((route) => ({
  // Mapeia cada rota para um novo objeto
  ...route, // Mantém as propriedades originais da rota
  path: parseRoutePath(route.path), // Aplica a função parseRoutePath para cada rota
}));
