export function extractQueryParams(query) {
  // Extrai os parâmetros de consulta de uma string de consulta
  return query
    .slice(1) // Remove o primeiro caractere '?' da string de consulta
    .split("&") // Divide a string em pares de chave-valor usando '&' como delimitador
    .reduce((queryParams, param) => {
      // Reduz a lista de pares de chave-valor em um objeto
      const [key, value] = param.split("="); // Divide cada par em chave e valor usando '=' como delimitador

      queryParams[key] = value; // Adiciona o par chave-valor ao objeto de parâmetros de consulta

      return queryParams; // Retorna o objeto de parâmetros de consulta atualizado
    }, {});
}
