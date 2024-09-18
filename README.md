
# In.Orbit - Aplicativo de gerenciamento de metas semanais
Projeto desenvolvido através da RocketSeat - Foco em desenvolvimento Full Stack

Projeto desenvolvido com Node | Fastify | Docker | PostgreSQL - React | TypeScript | Vite | Tailwind CSS

<img src="./src//assets//imgs/desktopView.png">

## Funcionalidade

<img src="./src/assets/gifs/funcionality.gif">

# Sumário

- [Bibliotecas Utilizadas](#bibliotecas-utilizadas);
  - [Bibliotecas Backend](#bibliotecas-backend);
  - [Bibliotecas Frontend](#bibliotecas-frontend);
- [Objetivos do Projeto](#objetivos-do-projeto);
- [Desenvolvimento do Projeto](#desenvolvimento-do-projeto);
  - [Server](#server);
    1. [Criar nova meta](#1-criar-uma-nova-meta---método-post);
    2. [Visualizar metas pendentes](#2-visualizar-as-metas-pendentes---método-get);
    3. [Criar conclusão da meta](#3-criar-a-conclusão-da-meta---método-post);
    2. [Visualizar resumo da semana](#4-visualizar-o-resumo-da-semana);
  - [Web](#web);
    - [Criar meta](#creategoal);
    - [Metas pendentes](#pending-goals);
    - [Resumo semanal](#summary);
- [Como executar o projeto](#como-executar-o-projeto);
- [Contatos do autor](#contatos-do-autor)



## Bibliotecas Utilizadas

### Bibliotecas Backend

- [Fastify](https://fastify.dev): Framework web para Node.js usado para criar APIs e servidores HTTP (similar ao Express.js) e possio suporte à tipagem TypeScript.

- [Docker](https://www.docker.com/): Cria um ambiente isolado para rodar o banco de dados escolhido. Facilita a configuração e o gerenciamento do banco, garantindo consistência no ambiente.

- [Drizzle](https://orm.drizzle.team/):
    - Drizzle-orm: Fornece uma camada de ORM para facilitar a interação com o banco de dados em TypeScript, abstraindo a sintaxe SQL.
    - Drizzle-kit: Ferramenta de migração do drizzle-orm usada para gerenciar alterações no esquema do banco de dados.

- [Zod](https://zod.dev/): Valida esquemas que garante a segurança dos dados. Valida dados de formulário, variáveis de ambiente e muito mais.

- [@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2): Algoritmo gerador de IDs únicos para os dados no banco de dados.

- [ESLint](https://eslint.org/): Ferramenta para análise de código, responsável por identificar erros e inconsistências, como variáveis não utilizadas ou não declaradas.

- [Prettier](https://prettier.io/): Ferramenta de formatação de código como indentação, espaçamento, uso de aspas simples ou duplas, etc, garantindo consistência no estilo do código.

- [DayJS](https://day.js.org/en/): Analisa, valida, manipula e mostra datas e horários. Ideal para realizar operações com datas, como formatação, comparação ou adição de dias/semanas/meses, etc.

- [Fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod): Integra o **Zod** com o **Fastify**, permitindo validar e tipar dados das requisições HTTP para evitar erros. Usa validações do Zod para definir e validar o `body`, `params`, `query` e `headers` das requisições.

- [@fastify/cors](https://github.com/fastify/fastify-cors): Plugin do Fastify que configura o CORS (Cross-Origin Resource Sharing), uma medida de segurança que limita o acesso ao backend, permitindo apenas frontends específicos.

- [Thunder Client](https://www.thunderclient.com): Extensão do VS Code, usada para testar APIs REST diretamente no editor, similar ao Postman. Usado para testar endpoints da aplicação.

### Bibliotecas Frontend

- [TailwindCSS](https://tailwindcss.com): Framework CSS com classes utilitárias que facilita e acelera o processo de estilização de elementos HTML/JSX.

- [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths): Permite que o Vite reconheça e use os aliases de importação, simplificando importações como `@components` em vez de caminhos longos como `../../components`.

- [Lucide-React](https://lucide.dev): Biblioteca  que fornece ícones e símbolos para React.

- [Tailwind-Merge](https://www.npmjs.com/package/tailwind-merge): Combina classes do Tailwind CSS, especialmente quando há conflitos de estilos. Ele mescla as classes, garantindo que as mais específicas prevaleçam, evitando a sobreposição incorreta de estilos.

- [Tailwind Variants](https://www.tailwind-variants.org): Biblioteca que ajuda a gerenciar e aplicar variantes de estilos no Tailwind CSS, permitindo criar estilos condicionais.

- [Radix UI](https://www.radix-ui.com):

    - [Radix UI - Radio Group](https://www.radix-ui.com/docs/primitives/components/radio-group): Componente acessível de botões de opção (radio buttons) para React. Suporta navegação por teclado, leitores de tela, personalizável e facilita integração com Tailwind.

    - [Radix UI - Progress](https://www.radix-ui.com/primitives/docs/components/progress):  Componente de barra de progresso, para mostrar o andamento de tarefas. Fácil de personalizar com o Tailwind.

    - [Radix UI - Dialog](https://www.radix-ui.com/primitives/docs/components/dialog): Componente de diálogo, ideal para criar modais e janelas de diálogo. Oferece suporte a navegação por teclado e leitores de tela e personalizável.

- [TanStack Query](https://tanstack.com/query/latest): Gerenci e sincroniza dados remotos em aplicações React. Facilita a busca, cache e atualização de dados. Ideal para otimizar requisições assíncronas.

- [React Hook Form](https://react-hook-form.com): Biblioteca para gerenciamento de formulários em React, focada em validação e envio de dados.

- [@hookform/resolvers](): Pacote de resolvers para integrar bibliotecas de validação, como Zod, com o React Hook Form. Um resolver é uma função que traduz regras de validação para o formato usado pelo React Hook Form, simplificando a validação de formulários e o gerenciamento de erros.

## Objetivos do projeto

- Criar o servidor com Fastify e Node.js para criação de Rotas
  - Cadastrar metas
  - Marcar metas como concluidas
  - Retorna os dados da minha semana (resumo semanal) 
  - Metas que foram e ainda não foram completadas 
- Criar o banco de dados utilizando Docker e PostgreSQL
- Criar funções que utilizem das rotas para atualizar o banco de dados
- Utilizar a lib ZOD para verificação dos dados nas variáveis de ambiente e dados nas requisições HTTP

- Interface do usuário
  - Apresentar uma tela de início quando não houver dados cadastrados
  - Criar uma caixa de diálogo para preenchimento amigável do formulário para adicionar novas metas
  - Apresentar as metas pendentes
  - Apresentar metas concluidas organizadas por data e hora
  - Apresentar uma barra de progresso a medida que os dados são concluídos
  - Desabilitar os dados de serem adicionados como concluídos quando alcançarem a frequência semanal desejada.


## Desenvolvimento do Projeto

Vamos dividir a funcionalidade do projeto entre a funcionalidade do servidor e a funcionalidade web/interface.

### Server

**Configurações iniciais**

Instalação do Typescript e as configurações do `tsconfig.json` foram selecionadas a partir do repositório [tsconfig/bases](https://github.com/tsconfig/bases) onde selecionamos a configuração ideal de acordo com a versão atual do Node utilizada no projeto. Neste projeto foi utilizada a versão 20.10.0.

O servidor foi criado com NodeJS associado ao Fastify e todo processo de validação vinculado ao Zod. Todas as rotas de criação de novas metas, conclusão de metas e visualização das metas pendentes e concluidas foram criadas depois em arquivos separados para maior organização e todas retornadas ao arquivo `src/http/server.ts` e no final devem estar configuradas dessa forma:

```ts
const app = fastify().withTypeProvider<ZodTypeProvider>();
const port: number = 3333;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${port}`);
  });
```

**Banco de dados**
O banco de dados selecionado foi o PostgreSQL, o ORM utilizado foi o Drizzle-ORM e Docker para criar um ambiente isolado onde o PostgreSQL possa rodar.

A imagem utilizada foi a [bitnami/postgreqsql](https://hub.docker.com/r/bitnami/postgresql) na versão 13.16.0. Para configurar o Docker no arquivo `docker-compose.yml` é necessário informar o nome do usuário postgres, a senha e o nome do banco de dados:

```yml
name: pocket-js-server

services:
  pg:
    image: bitnami/postgresql:13.16.0
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=docker
      - POSTGRES_PASSWORD=docker
      - POSTGRES_DB=inorbit
```

Para rodar o banco de dados após instalação do Docker na máquina, utilizar o código `docker compose up -d` no terminal e utilizar o código `docker ps` para verificar se o seu banco de dados já está rodando. Caso não esteja, digite `docker ps -a`, que irá listar todos os seus containers, copie o ID dele, digite `docker logs <id_do_container>` e verifique se ele apresentou alguma mensagem de erro.

A este ponto, é necessário baixar e configurar o Drizzle, que será nosso ORM. Drizzle-ORM foi utilizado em produção e o Drizzle-kit em produção.

Foi criado e configurado o `drizzle.config.ts`, onde informamos para onde nossas migrations irão. Migrations, no contexto de banco de dados, são versões controladas de alterações na estrutura do banco de dados (como criar, alterar ou remover tabelas e colunas). Elas permitem que possamos aplicar ou reverter essas modificações de forma organizada e rastreável, garantindo que o esquema do banco de dados esteja sincronizado com o código do projeto. Além disso, neste arquivo informamos o banco de dados utilizado e a url do nosso banco de dados.

Utilizando Docker o padrão da url segue:
`bd-utilizado://nome-de-usuario:senha@localhost:numero-da-porta/nome-do-bd`
Exemplo:
`postgresql://felipe:1234@localhost:5200/meubanco`

Mas, neste caso, foi utilizado o arquivo `.env` para lidar com as variáveis de ambiente e utilizado a biblioteca ZOD para lidar com os dados sensíveis e garantir que não serão inválidos ou nulos.

```ts
import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
```

**Esquema do banco de dados**

A partir daqui, caso você tenha, por exemplo o PostgreSQL instalado globalmente na sua máquina, pode haver conflito de dados, como senha e nome de usuário, sendo um impediditivo para a migração e criação do esquema do banco. Caso enfrente algum problema de "senha incorreta" ou algum erro similar ao tentar realizar os próximos dados abaixo, acesse o seu **Gerenciador de tarefas** e vá em serviços e procure pelo seu banco de dados instalado e pare o serviço:

<img src="./src//assets//imgs/tasksManager.png" alt="Serviços do Gerenciador de Tarefas">

Em seguida, é possível prosseguir.

No arquivo `drizzle.config.ts` é configurado o local do schema do banco de dados e neste local deve ser criado um arquivo ./src/db/schema.ts com as informações que o banco deve possuir.

```ts
import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const goals = pgTable("goals", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text("title").notNull(),
  desiredWeeklyFrequency: integer("desired_weekly_frequency").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
```

O mesmo foi realizado para a tabela das metas concluidas.

Executar o código `npx drizzle-kit generate`

Assim é gerado a migration do banco de dados na pasta migrations com arquivos em linguagem SQL, com todas as informações necessárias para que o drizzle possa criar e assim manipular o banco.

Instalar o driver do portgreSQL ou do banco de dados desejado para o projeto.

Executar o código `npx drizzle-kit migrate`

Aqui foi criada a tabela configurada posteriormente e ela pode ser checada através do código `npx drizzle-kit studio` onde é possível verificar as tabelas numa interface amigável.

**Funções/Features**

Para brevidade do código, cada feature será explicada brevemente. Basicamente, essas funções possuem o objetivo de executar funções no nosso banco de dados para utilizar das rotas criadas, para:

- Criar uma nova meta (POST)
- Visualizar as metas pendentes (GET)
- Criar a conclusão de uma meta (POST)
- Visualizar as metas concluidas da semana (GET)


### 1. Criar uma nova meta - Método POST

```ts
interface ICreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: ICreateGoalRequest) => {
  const result = await db
    .insert(goals)
    .values({
      title,
      desiredWeeklyFrequency,
    })
    .returning();

  const goal = result[0];

  return {
    goal,
  };
};
```

**Explicação**:

Explicação:

1. Interface `ICreateGoalRequest`:

Define o formato dos dados esperados para criar uma nova meta. A meta deve ter um `title` (título) e um `desiredWeeklyFrequency` (frequência semanal desejada).

2. Função `createGoal`:

    - **Parâmetros:** Recebe um objeto com title e desiredWeeklyFrequency, que são os dados enviados pelo frontend.
    - **Processo:**
        - `db.insert(goals)`: Inicia a inserção de dados na tabela goals.
        - `.values({ title, desiredWeeklyFrequency })`: Especifica os valores a serem inseridos na nova linha da tabela.
        - `.returning()`: Solicita que o banco de dados retorne o registro inserido. Isso é útil para obter o novo registro imediatamente após a inserção, permitindo que o desenvolvedor veja os dados inseridos e facilite o rastreamento e a depuração.

    - **Resultado:**
        - O resultado da inserção é retornado como um array, e o primeiro elemento (result[0]) é o novo registro inserido.
    - **Retorno:**
        - A função retorna o objeto contendo o novo goal criado.


### 2. Visualizar as metas pendentes - Método GET

O objetivo é lidar com metas registradas e concluídas na semana atual. Para isso, utilizamos **Common Table Expressions (CTEs)**, que são consultas temporárias nomeadas que ajudam a dividir e simplificar consultas complexas. Aqui está uma explicação detalhada:

Importações Necessárias:

- dayjs para manipulação de datas.
- weekOfYear do dayjs para calcular a semana do ano.
- Métodos de consulta do drizzle-orm: eq (equal | igual), lte (lower than or equal to | menor ou igual).
- Esquemas do banco de dados (goalCompletions e goals).

```ts
import dayjs from "dayjs";
import { db } from "@db/index";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { between, count, eq, lte, sql } from "drizzle-orm";
import { goalCompletions, goals } from "@db/schema";

dayjs.extend(weekOfYear);
```

### Função getWeekPendingGoals
1. Definição das Datas da semana:
    - Calcula o primeiro e o último dia da semana atual.   

```ts
  const firstDayOfTheWeek = dayjs().startOf("week").toDate();
  const lastDayOfTheWeek = dayjs().endOf("week").toDate();
```

2. CTE `goalsCreatedUpToWeek`:
    - Define uma CTE que seleciona os dados das metas criadas na semana atual (ID, título, frequência semanal e data de criação).
    
```ts
  const goalsCreatedUpToWeek = db.$with("goals_created_up_to_week").as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(between(goals.createdAt, firstDayOfTheWeek, lastDayOfTheWeek))
  );

```

3. CTE `goalCompletionCounts`:
    - Define outra CTE que conta o número de vezes que cada meta foi concluída na semana atual, agrupando por ID da meta.

```ts
  const goalCompletionCounts = db.$with("goal_completion_counts").as(
    db
      .select({
        goalId: goalCompletions.goalId,
        completionCount: count(goalCompletions.id).as("completionCount"),
      })
      .from(goalCompletions)
      .where(
        between(goalCompletions.createdAt, firstDayOfTheWeek, lastDayOfTheWeek)
      )
      .groupBy(goalCompletions.goalId)
  );
  ```

4. Consulta Final com `leftJoin`:
    - Executa a consulta principal que combina as CTEs. Usa `leftJoin` para garantir que todas as metas criadas na semana (da CTE `goalsCreatedUpToWeek`) sejam retornadas, incluindo aquelas sem contagens de conclusão (se não houver correspondência na CTE `goalCompletionCounts`).

```ts
  const pendingGoals = await db
    .with(goalsCreatedUpToWeek, goalCompletionCounts)
    .select({
      id: goalsCreatedUpToWeek.id,
      title: goalsCreatedUpToWeek.title,
      desiredWeeklyFrequency: goalsCreatedUpToWeek.desiredWeeklyFrequency,
      completionCount: sql`
        COALESCE(${goalCompletionCounts.completionCount}, 0)
      `.mapWith(Number),
    })
    .from(goalsCreatedUpToWeek)
    .leftJoin(
      goalCompletionCounts,
      eq(goalCompletionCounts.goalId, goalsCreatedUpToWeek.id)
    );

  return {
    pendingGoals,
  };
```

Nesta consulta final, usamos `COALESCE` para garantir que, se não houver contagens de conclusão, o valor retornado será 0 em vez de null.

### 3. Criar a conclusão da meta - Método POST

A função `createGoalCompletion` é responsável por registrar a conclusão de uma meta e verificar se o número de conclusões dessa meta já atingiu a frequência desejada para a semana.

1. Definição da Interface `ICreateGoalRequest`:

```ts
interface ICreateGoalRequest {
  goalId: string;
}
```

- Define o formato do objeto recebido pela função `createGoalCompletion`, que deve conter o `goalId` (identificador da meta).

2. Função `createGoalCompletion`:

```ts
export const createGoalCompletion = async ({ goalId }: ICreateGoalRequest) => {
    const firstDayOfTheWeek = dayjs().startOf("week").toDate();
    const lastDayOfTheWeek = dayjs().endOf("week").toDate();
```

- Recebe um objeto com o goalId como parâmetro, ou seja, para marcar uma meta como concluida, é necessário o seu id. Além disso, é calculado o primeiro e último dia da semana atual usando `dayjs`.

3. CTE `goalCompletionCounts`:

```ts
const goalCompletionCounts = db.$with("goal_completion_counts").as(
  db
    .select({
      goalId: goalCompletions.goalId,
      completionCount: count(goalCompletions.id).as("completionCount"),
    })
    .from(goalCompletions)
    .where(
      and(
        between(goalCompletions.createdAt, firstDayOfTheWeek, lastDayOfTheWeek),
        eq(goalCompletions.goalId, goalId)
      )
    )
    .groupBy(goalCompletions.goalId)
);
```

- Cria uma CTE chamada `goal_completion_counts` que conta o número de vezes que a meta foi concluída na semana atual.
- Utiliza `between` para filtrar por data e `eq` para garantir que a contagem é específica para o `goalId` fornecido.
- Agrupa o resultado pelo `goalId` e usa `count` para contar as ocorrências.

4. Consulta final com `leftJoin`

```ts
const result = await db
  .with(goalCompletionCounts)
  .select({
    desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
    completionCount: sql`
      COALESCE(${goalCompletionCounts.completionCount}, 0)
    `.mapWith(Number),
  })
  .from(goals)
  .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalId, goals.id))
  .where(eq(goals.id, goalId))
  .limit(1);
```

- Executa a consulta principal que junta a CTE `goal_completion_counts` com a tabela `goals` usando um `leftJoin`.
- Seleciona a frequência semanal desejada e a contagem de conclusões da meta. Usa `COALESCE` para garantir que, se não houver contagens, o valor padrão será 0.
- Filtra o resultado para a meta com o `goalId` fornecido e limita a um resultado `(limit(1))`.

5. Verificação e inserção

```ts
const { completionCount, desiredWeeklyFrequency } = result[0];

if (completionCount >= desiredWeeklyFrequency) {
  throw new Error("Goal already completed this week!");
}

const insertResult = await db
  .insert(goalCompletions)
  .values({ goalId })
  .returning();
const goalCompletion = insertResult[0];
```

- Verifica se a contagem de conclusões (`completionCount`) é maior ou igual à frequência desejada (`desiredWeeklyFrequency`). Se for, lança um erro indicando que a meta já foi completada.
- Se a meta não tiver sido completada, insere um novo registro na tabela `goalCompletions` e retorna o registro inserido usando `returning()`.

### 4. Visualizar o resumo da semana

Da mesma forma que as demais, o primeiro e último dia da semana foi calculado.

1. CTE `goals_created_up_to_week`

```ts
const goalsCreatedUpToWeek = db.$with("goals_created_up_to_week").as(
  db
    .select({
      id: goals.id,
      title: goals.title,
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      createdAt: goals.createdAt,
    })
    .from(goals)
    .where(between(goals.createdAt, firstDayOfTheWeek, lastDayOfTheWeek))
);
```
- Seleciona as metas criadas na semana atual

2. CTE `goal_completion_counts`

```ts
const goalsCompletedInWeek = db.$with("goal_completion_counts").as(
  db
    .select({
      id: goalCompletions.id,
      title: goals.title,
      completedAt: goalCompletions.createdAt,
      completedAtDate: sql`DATE(${goalCompletions.createdAt})`.as("completedAtDate"),
    })
    .from(goalCompletions)
    .innerJoin(goals, eq(goals.id, goalCompletions.goalId))
    .where(between(goalCompletions.createdAt, firstDayOfTheWeek, lastDayOfTheWeek))
    .orderBy(desc(goalCompletions.createdAt))
);
```
- Seleciona as conclusões de metas e suas datas na semana atual, com ordenação por data de conclusão.
- Coleta somente as metas que tiveram alguma conclusão na semana.
- Ordenadas por horário de criação de forma descendente.

3. CTE `goals_completed_by_week_day`

```ts
const goalsCompletedByWeekDay = db.$with("goals_completed_by_week_day").as(
  db
    .select({
      completedAtDate: goalsCompletedInWeek.completedAtDate,
      completions: sql`
        JSON_AGG(
          JSON_BUILD_OBJECT(
            'id', ${goalsCompletedInWeek.id},
            'title', ${goalsCompletedInWeek.title},
            'completedAt', ${goalsCompletedInWeek.completedAt}
          )
        )
      `.as("completions"),
    })
    .from(goalsCompletedInWeek)
    .groupBy(goalsCompletedInWeek.completedAtDate)
    .orderBy(desc(goalsCompletedInWeek.completedAtDate))
);
```

- Agrega os dados de conclusão por dia, criando um JSON com as informações.
    - JSON_BUILD_OBJECT: Cria um objeto JSON com pares de chave-valor. No exemplo dado, é usado para construir um objeto JSON para cada meta concluída, incluindo `id`, `title`, e `completedAt`
    - JSON_AGG: Agrega múltiplos objetos JSON em um array JSON. No exemplo, ele coleta todos os objetos JSON criados pela função `JSON_BUILD_OBJECT` e os combina em um único array JSON.
- Ordenadas por data de forma ascendente.

4. Consulta final:

```ts
const result = await db
  .with(goalsCreatedUpToWeek, goalsCompletedInWeek, goalsCompletedByWeekDay)
  .select({
    completed: sql`(SELECT COUNT(*) FROM ${goalsCompletedInWeek})`.mapWith(Number),
    total: sql`(SELECT SUM(${goalsCreatedUpToWeek.desiredWeeklyFrequency}) FROM ${goalsCreatedUpToWeek})`.mapWith(Number),
    goalsPerDay: sql<GoalsPerDay>`JSON_OBJECT_AGG(${goalsCompletedByWeekDay.completedAtDate}, ${goalsCompletedByWeekDay.completions})`,
  })
  .from(goalsCompletedByWeekDay);
```

- Conta o total de conclusões e a soma das frequências desejadas. Agrega os dados de conclusões por dia em um JSON.

### Rotas HTTP

Para criação de rotas com método POST, onde criamos nossos novos dados, a validação dos dados ficou responsável pelo ZOD:

```ts
import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createGoal } from "@functions/create-goal";

export const createGoalRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/goals",
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
      },
    },
    async (request) => {
      const { desiredWeeklyFrequency, title } = request.body;

      await createGoal({
        title,
        desiredWeeklyFrequency,
      });
    }
  );
};
```

Utilizando o `FastifyPluginAsyncZod` podemos criar um `schema` do que esperamos que venha no corpo da nossa requisição no `request.body`. Esperamos que o body seja um objeto, onde o título precisa ser uma string, a Frequência Semanal Desejada deve ser um `number/integer` de valor de no mínimo 1 e no máximo 7.

A validação de dados também foi realizada nas demais rotas. A partir daqui nós já podemos utilizar nosso servidor no Frontend.

## Web

O projeto foi criado com Vite | React | Typescript | Tailwind. As bilbiotecas Radix, Tailwind Variants e Tailwind-Merge ajudaram na criação de componentes de código limpo, mas o nosso foco aqui será quanto a integração do servidor com o Frontend.

A busca de dados foi realizada através do Tanstack, ao utilizar o hook useQuery primeiramente avaliamos se já havia dados registrados no banco de dados.

```tsx
export function App() {
  const { data } = useQuery<SummaryData>({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60 // 60 seconds
  });

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
```

Caso data não seja nulo e já possua dados, o resumo semanal será mostrado através do componente Summary, caso não, o componente EmptyGoals é renderizado. Abaixo vemos como a interface do usuário é apresentada com o banco vazio ou já com alguns registros:

### Banco vazio
<img src="./src/assets/imgs/emptyGoals.png" alt="Interface do usuário com o banco sem dados" />

### Alguns dados registrados
<img src="./src/assets/imgs/registeredData.png" alt="Interface do usuário com alguns dados registrados" />

O usuário pode começar cadastrando uma nova meta, preenchendo os dados do formulário, onde invocaremos a função `createGoal` do nosso servidor, onde é necessário passar os dados `title` e `desiredWeeklyFrequency`.

### CreateGoal

```tsx
const createGoalForm = z.object({
  title: z.string().min(1, "Informe a meta que deseja realizar"),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
});

type CreateGoalForm = z.infer<typeof createGoalForm>;
```

```tsx
  const queryClient = useQueryClient();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateGoalForm>({
    resolver: zodResolver(createGoalForm),
  });

  const handleCreateGoal = async (data: CreateGoalForm) => {
    const { title, desiredWeeklyFrequency } = data;
    await createGoal({ title, desiredWeeklyFrequency });

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pendingGoal"] });

    reset();
  };
```

- Declaramos o hook `useQueryClient()`
- Realizamos a desestruturação de objetos do `useForm` do React Hook Form para coletarmos:
    - **Register**: Responsável por registrar um novo campo no formulário, como `title` e `desiredWeeklyFrequency`, associando-os ao estado do formulário e garantindo que seus valores sejam capturados ao enviar.
    - **Control**: Utilizado para integrar o `react-hook-form` com componentes personalizados (como o `RadioGroup`), que não podem ser diretamente registrados com `register`.
    - **handleSubmit**: Função que gerencia o envio do formulário, verificando a validação dos campos e passando os dados para a função `handleCreateGoal` caso a validação seja bem-sucedida.
    - **formState**: { errors }: Contém informações sobre erros de validação. Se algum campo falhar na validação, uma mensagem de erro é exibida para o usuário.
    - **Reset**: Limpa os valores do formulário após o envio bem-sucedido, permitindo que o formulário seja preenchido novamente.

1. **Invocação do `createGoal`**: Quando o formulário é enviado e validado com sucesso, a função `handleCreateGoal` é chamada, que por sua vez invoca a função createGoal, enviando os dados (como title e desiredWeeklyFrequency) necessários para criar uma nova meta.

2. **Invalidar as queries com queryClient.invalidateQueries()**: Após a criação da meta, o `queryClient` é utilizado para invalidar as queries relacionadas (como summary e pendingGoal). Isso garante que o React Query faça uma nova requisição para atualizar a interface do usuário com os dados mais recentes, sem a necessidade de um recarregamento manual da página.

3. **Reset do formulário**: O `reset()` é chamado para limpar os valores do formulário, permitindo que o usuário insira uma nova meta sem que os dados anteriores permaneçam nos campos.

### Pending-goals

Neste componente, invocado dentro do sumário, que em breve mostraremos, é responsável por renderizar as metas pendentes, para que o usuário possa marcá-las como concluídas.

```ts
export type PendingGoalsData = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];
```

```ts
  const queryClient = useQueryClient();

  const { data } = useQuery<PendingGoalsData>({
    queryKey: ["pendingGoal"],
    queryFn: getPendingGoals,
  });

  if (!data) return null;

  const handleCompleteGoal = async (goalId: string) => {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pendingGoal"] });
  };
```

Aqui é mais simples

- Primeiramente coletamos os dados do banco através do useQuery proveniente do TansTack para coletar os dados da tabela que estão pendentes. Dados estes que são coletados do nosso servidor através da função `getPendingGoals` invocada pelo `useQuery`.
- O data recebe um laço de repetição `.map` para renderizar todas as metas pendentes em tela através de um botão.
- Vinculamos a função `handleCompleteGoal` a cada botão que, ao ser clicado, envia o id do dado à função que invoca `createGoalCompletion` com o id como parâmetro que envia essa meta para a tabela `goal_completions` do nosso banco de dados.

```tsx
  return (
    <div className="flex flex-wrap gap-3">
      {data?.map((goal) => {
        const completedGoal =
          goal.completionCount >= goal.desiredWeeklyFrequency;
        return (
          <OutlineButton
            key={goal.id}
            disabled={completedGoal}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
```

### Summary

Por fim, invocamos novamente o useQuery com os dados da função `getSummary` que possui o resumo de todas as metas concluidas na semana atual para interface do usuário.

```ts
export type SummaryData = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};
```

```tsx
  const { data } = useQuery<SummaryData>({
    queryKey: ["summary"],
    queryFn: getSummary,
  });
```

No final, dados como nome da meta, data de conclusão, número de metas concluidas, metas ainda pendentes, todas foram preenchidas neste componente. Assim finalizamos nossa aplicação.

## Como executar o projeto

**1. Requisitos:**

    - Ter [Node.JS](https://nodejs.org/pt) instalado em sua máquina 
    - Ter [Docker](https://www.docker.com/products/docker-desktop/) instalado em sua máquina.

**2. Instalar as dependências:**

    - Instalar as dependências executar o comando "npm install" dentro da pasta "./server" e dentro da pasta "./web", uma vez em cada um.

**3. Variáveis de ambiente** 
  - Criar um arquivo .env na raiz da pasta "./server" e adicionar a url do banco de dados. Ela segue este padrão:

```md
DATABASE_URL=<DATABASE>://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>
```
  - DATABASE: Nome do banco de dados - postgresql
  - Os próximos dados definimos no nosso docker-compose.yml
```yml
name: pocket-js-server

services:
  pg:
    image: bitnami/postgresql:13.16.0
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=docker
      - POSTGRES_PASSWORD=docker
      - POSTGRES_DB=inorbit
```
  - USER: docker
  - PASSWORD: docker
  - HOST: Em ambiente desenvolvimento normalmente utilizado o localhost, um host local na nossa máquina
  - PORT: 5432 (é a nossa porta/port)
  - DATABASE: inorbit

O resultado seria:

```env
DATABASE_URL=postgresql://docker:docker@localhost:5432/inorbit
```

  - No nosso caso, o banco de dados será criado dentro da nossa máquina, somente para estudos e aprendizado, mas este tipo de informação não deve ser compartilhada.

**4. Inicializar o banco de dados**

  - Dentro da pasta "./server" executar o comando `docker compose up -d` para rodar o bando de dados no Docker

  - A partir daqui, como informado anteriormente, caso você tenha por exemplo o PostgreSQL instalado globalmente na sua máquina, pode haver conflito de dados, como senha e nome de usuário, sendo um impediditivo para a migração e criação do esquema do banco. Caso enfrente algum problema de "senha incorreta" ou algum erro similar ao tentar realizar os próximos dados abaixo, acesse o seu **Gerenciador de tarefas** e vá em serviços e procure pelo seu banco de dados instalado e pare o serviço do banco:

    <img src="./src//assets//imgs/tasksManager.png" alt="Serviços do Gerenciador de Tarefas">

**5. Migração do esquema para o banco de dados**

  - Dentro da pasta "./server" criar uma nova migração do banco de dados utilizando o comando `npx drizzle-kit migrate`. A migração só ocorrerá com sucesso se o banco de dados já estiver em andamento.

**6. Inicializar o servidor**

  - Dentro da pasta "./server" executar o comando `npm run dev` para iniciar o servidor. Se o servidor não estiver rodando, as requisições de dados não serão feitas.

**7. Inicializar o projeto web**

  - Retornar para a pasta web e executar o comando `npm run dev` para executar o projeto e visualizar em seu navegador. Provavelmente abrirá na porta http://localhost:5173.


## Contatos do Autor

-  GitHub - [Felipe Santiago Morais](https://github.com/SantiagoMorais)
-  Linkedin - [Felipe Santiago](https://www.linkedin.com/in/felipe-santiago-873025288/)
-  Instagram - [@felipe.santiago.morais](https://www.instagram.com/felipe.santiago.morais)
-  Email - <a href="mailto:contatofelipesantiago@gmail.com" target="blank">contatofelipesantiago@gmail.com</a>


