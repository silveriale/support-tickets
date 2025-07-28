import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { update } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";
import { remove } from "../controllers/tickets/remove.js";

export const tickets = [
  // Define a rota para obter todos os tickets
  {
    method: "POST",
    path: "/tickets",
    controller: create, // Controlador para criar um novo ticket
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index, // Controlador para obter todos os tickets
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update, // Controlador para atualizar um ticket
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus, // Controlador para atualizar o status de um ticket
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove, // Controlador para remover um ticket
  },
];
