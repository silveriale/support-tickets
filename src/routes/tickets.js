export const tickets = [
  // Define a rota para obter todos os tickets
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Criado com sucesso!");
    },
  },
];
