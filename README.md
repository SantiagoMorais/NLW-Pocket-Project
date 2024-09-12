### Bibliotecas

- [Docker](https://www.docker.com/): Cria um ambiente isolado para rodar o PostgreSQL (banco de dados escolhido). Facilita a configuração e o gerenciamento do banco, garantindo consistência no ambiente. Isso evita problemas de compatibilidade e simplifica o setup do banco de dados.

- [Drizzle](https://orm.drizzle.team/):
    - Drizzle-orm: Fornece uma camada de ORM (Mapeamento Objeto-Relacional) para facilitar a interação com o banco de dados em TypeScript, abstraindo a sintaxe SQL.
    - Drizzle-kit: Ferramenta de migração do drizzle-orm usada para gerenciar alterações no esquema do banco de dados.

- [Zod](https://zod.dev/): Biblioteca de validação de esquemas que garante a segurança dos dados. No projeto, valida o objeto `process.env`, garantindo que a nossa variável de ambiente seja uma string válida no formato de URL, antes de ser usada pelo Drizzle.

- [@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2): Algoritmo gerador de IDs únicos para os dados no banco de dados, garantindo que cada registro tenha um identificador exclusivo.

- [ESLint](https://eslint.org/): Ferramenta para análise de código, responsável por identificar erros e inconsistências, como variáveis não utilizadas ou não declaradas.

- [Prettier](https://prettier.io/): Ferramenta de formatação de código que cuida de detalhes como indentação, espaçamento, uso de aspas simples ou duplas, entre outros, garantindo consistência no estilo do código