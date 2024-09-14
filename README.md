### Bibliotecas

- [Fastify](https://fastify.dev): Framework web para Node.js usado para criar APIs e servidores HTTP (similar ao Express.js), otimizado para alto desempenho e com suporte nativo a tipagem em TypeScript.

- [Docker](https://www.docker.com/): Cria um ambiente isolado para rodar o PostgreSQL (banco de dados escolhido). Facilita a configuração e o gerenciamento do banco, garantindo consistência no ambiente. Isso evita problemas de compatibilidade e simplifica o setup do banco de dados.

- [Drizzle](https://orm.drizzle.team/):
    - Drizzle-orm: Fornece uma camada de ORM (Mapeamento Objeto-Relacional) para facilitar a interação com o banco de dados em TypeScript, abstraindo a sintaxe SQL.
    - Drizzle-kit: Ferramenta de migração do drizzle-orm usada para gerenciar alterações no esquema do banco de dados.

- [Zod](https://zod.dev/): Biblioteca de validação de esquemas que garante a segurança dos dados. No projeto, valida o objeto `process.env`, garantindo que a nossa variável de ambiente seja uma string válida no formato de URL, antes de ser usada pelo Drizzle.

- [@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2): Algoritmo gerador de IDs únicos para os dados no banco de dados, garantindo que cada registro tenha um identificador exclusivo.

- [ESLint](https://eslint.org/): Ferramenta para análise de código, responsável por identificar erros e inconsistências, como variáveis não utilizadas ou não declaradas.

- [Prettier](https://prettier.io/): Ferramenta de formatação de código que cuida de detalhes como indentação, espaçamento, uso de aspas simples ou duplas, entre outros, garantindo consistência no estilo do código

- [DayJS](https://day.js.org/en/): Analisa, valida, manipula e mostra datas e horários. Possui uma API fácil de usar e próxima da API Date nativa do JS, mas mais intuitiva. Ideal para realizar operações com datas, como formatação, comparação ou adição de dias/semanas/meses, etc.

- [Fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod): Integra o **Zod** com o **Fastify**, permitindo validar e tipar dados das requisições HTTP para evitar erros. O plugin usa esquemas de validação do Zod para definir e validar automaticamente o `body`, `params`, `query` e `headers` das requisições. Isso garante dados consistentes e permite que o TypeScript reconheça a tipagem corretamente. Já que toda rota precisa de validação, ele automatiza e facilita este serviço.

- [@fastify/cors](https://github.com/fastify/fastify-cors): Plugin do Fastify que configura o CORS (Cross-Origin Resource Sharing), uma medida de segurança que limita o acesso ao backend, permitindo apenas frontends específicos. O CORS protege contra ataques como CSRF (Cross-Site Request Forgery), exigindo que o servidor permita explicitamente solicitações de outras origens.

### Rotas

- Cadastrar metas
- Marcar metas como concluidas
- Retorna os dados da minha semana (resumo semanal) 
- Metas que foram e ainda não foram completadas 