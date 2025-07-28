import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url); // endereço da pasta onde vai salvar informações do banco de dados

export class Database {
  #database = {};

  constructor() {
    // inicializa o banco de dados
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        // lê o arquivo db.json
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        // se não existir o arquivo, cria um banco de dados vazio
        this.#persist();
      });
  }

  #persist() {
    // salva o banco de dados no arquivo db.json
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      // verifica se a tabela já existe e é um array
      this.#database[table].push(data); // se existir, adiciona o novo dado ao array
    } else {
      // se não existir, cria a tabela e adiciona o dado
      this.#database[table] = [data];
    }
    this.#persist(); // chama o método para persistir os dados no arquivo
  }

  select(table, filters) {
    // seleciona todos os dados de uma tabela
    let data = this.#database[table] ?? []; // se a tabela não existir, retorna um array vazio

    if (filters) {
      // se filtros forem fornecidos, aplica os filtros
      data = data.filter((row) => {
        // filtra os dados com base nos filtros
        return Object.entries(filters).some(([key, value]) => {
          // verifica se algum dos filtros corresponde a uma chave e valor no objeto
          return row[key].toLowerCase().includes(value.toLowerCase()); // compara os valores, ignorando maiúsculas e minúsculas
        });
      });
    }
    return data; // retorna os dados filtrados
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id); // encontra o índice da linha com o id fornecido

    if (rowIndex > -1) {
      // se a linha for encontrada
      this.#database[table][rowIndex] = {
        // atualiza a linha com os novos dados
        ...this.#database[table][rowIndex], // mantém os dados existentes
        ...data, // atualiza os dados da linha com os novos dados (sobreescreve os campos existentes se necessário)
      };
      this.#persist(); // chama o método para persistir os dados no arquivo
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id); // encontra o índice da linha com o id fornecido

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1); // remove a linha do array
      this.#persist(); // chama o método para persistir/atualizar os dados no arquivo
    }
  }
}
