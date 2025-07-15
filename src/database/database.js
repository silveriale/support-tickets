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
}
