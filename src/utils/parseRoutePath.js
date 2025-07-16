export function parseRoutePath(path) {
  // Função para analisar o caminho da rota
  const routeParametersRegex = /:([a-zA-Z]+)/g; // Regex para capturar parâmetros de rota

  const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)"); // Substitui os parâmetros por regex que capturam valores alfanuméricos e hífens

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`); // Cria uma expressão regular para o caminho, permitindo parâmetros de consulta opcionais

  return pathRegex; // Retorna a expressão regular para ser usada na correspondência de rotas
}
