### Bibliotecas Backend

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

### Bibliotecas Frontend

- [TailwindCSS](https://tailwindcss.com): Framework CSS com classes utilitárias que facilita e acelera o processo de estilização de elementos HTML/JSX, permitindo personalizações rápidas sem sair do código.

- [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths): Permite que o Vite reconheça e use os aliases de importação definidos no `tsconfig.json`, simplificando a importação de arquivos com aliases como `@components` em vez de caminhos longos como `../../components`.

- [Lucide-React](https://lucide.dev): Biblioteca  que fornece ícones e símbolos para React. Facilita para designers e programadores incorporar ícones aos projetos.

- [Tailwind-Merge](https://www.npmjs.com/package/tailwind-merge): Facilita a combinação de classes do Tailwind CSS, especialmente quando há conflitos de estilos. Ela mescla as classes, garantindo que as mais específicas prevaleçam, evitando a sobreposição incorreta de estilos. Ideal para gerenciar estilos dinâmicos e condicionalmente aplicar classes sem duplicação ou conflito de prioridades no CSS.

- [Tailwind Variants](https://www.tailwind-variants.org): Biblioteca que ajuda a gerenciar e aplicar variantes de estilos no Tailwind CSS, permitindo criar estilos condicionais e dinâmicos de forma simples e organizada.

- [Radix UI](https://www.radix-ui.com):

    - [Radix UI - Radio Group](https://www.radix-ui.com/docs/primitives/components/radio-group): Componente acessível de botões de opção (radio buttons) para React, focado em boas práticas de acessibilidade. Suporta navegação por teclado, leitores de tela e é altamente personalizável, facilitando a integração com bibliotecas como Tailwind CSS.

    - [Radix UI - Progress](https://www.radix-ui.com/primitives/docs/components/progress):  Componente de barra de progresso para React, para mostrar o andamento de tarefas. Suporta boas práticas de acessibilidade e é fácil de personalizar com bibliotecas de estilo como Tailwind CSS.

    - [Radix UI - Dialog](https://www.radix-ui.com/primitives/docs/components/dialog): Componente de diálogo acessível para React (Janela que abre quando clicamos em editar um dado, por exemplo), ideal para criar modais e janelas de diálogo. Oferece suporte a navegação por teclado e leitores de tela, e estilo facilmente personalizável.

- [TanStack Query](https://tanstack.com/query/latest): Biblioteca para gerenciar e sincronizar dados remotos em aplicações React. Facilita a busca, cache e atualização de dados com uma API simples. Ideal para otimizar requisições assíncronas e o desempenho.

- [React Hook Form](https://react-hook-form.com): Biblioteca para gerenciamento de formulários em React, focada em validação e envio de dados.

- [@hookform/resolvers](): Pacote de resolvers para integrar bibliotecas de validação, como Zod, com o React Hook Form. Um resolver é uma função que traduz as regras de validação da biblioteca para o formato usado pelo React Hook Form, simplificando a validação de formulários e o gerenciamento de erros.

### Rotas

- Cadastrar metas
- Marcar metas como concluidas
- Retorna os dados da minha semana (resumo semanal) 
- Metas que foram e ainda não foram completadas 