import { create } from "../controllers/tickets/create.js";

export const tickets = [
  // Define a rota para obter todos os tickets
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
];
