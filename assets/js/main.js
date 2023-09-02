import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".tcsencon",
  `Trabalhei como instrutor conteudista em frontend na
  Digital House, o trabalho consistia em criar conteúdos para as
  aulas de especialização frontend. Alguns temas dos conteúdos
  realizados foram: React, Redux, TypeScript, Testes,
  GraphQL, Next.js, MUI, React Hook Form e styled-components.`,
  "Professor conteudista em Frontend",
  "Digital House",
  "Nov 2021 - Nov 2022 (1 ano)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".bootstrap",
  "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface front-end para sites e aplicações web, usando HTML, CSS e JavaScript."
);
hoverChangeDescription(
  ".kotlin",
  "Kotlin é uma linguagem de programação orientada a objetos, desenvolvida pela JetBrains, e usada principalmente para desenvolvimento de aplicativos Android."
);
hoverChangeDescription(
  ".android",
  "Android é uma plataforma de desenvolvimento de aplicativos desenvolvida pela Google."
);
hoverChangeDescription(
  ".github",
  "GitHub é uma plataforma de hospedagem de código-fonte."
);
