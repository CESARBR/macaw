---
layout: default
title: Home
nav_order: 1
description: ""
permalink: 
---

# Macaw (arara)

> _Os termos arara e ará designam várias aves psitaciformes de grande porte da tribo Arini, cauda longa e um bico curvado resistente. Geralmente, os gêneros comumente chamados de araras são os gêneros Ara, Anodorhynchus e Cyanopsitta._

###### [Wikipedia](https://pt.wikipedia.org/wiki/Arara)

---
## O que é?

O **Macaw** se trata de um framework que busca trazer uma identidade visual e consistência para os serviços internos do [CESAR](https://www.cesar.org.br/).
Para que possa ser agregado em diversos sistemas com possibilidades de linguagens e tecnologias diferentes, foi escolhida a "suíte" de [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components) com [Typescript](https://www.typescriptlang.org/index.html). 

Para auxiliar com a construção e compilação desses componentes, também estamos usando o [StencilJS](https://stenciljs.com/) que possui uma gama de opções que facilitam esse processo, além de ter grande suporte na web.

### O que tem de tão especial nos Web Components?
* [Usando elementos customizados](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components/Usando_elementos_customizados)
* [Usando shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
* [Usando templates e slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

---

## Vamos começar

### Via tag de script

<script src='https://unpkg.com/@cesarbr/macaw/dist/macaw.js'></script>

1. Adicione a tag script `<script src='https://unpkg.com/@cesarbr/macaw/dist/macaw.js'></script>` logo antes do fechamento da tag `<head>`;
2. Agor você pode usar qualquer componente em seus templates, JSX, html e etc.

### Via NPM

1. Execute o comando:
```bash
 $ npm install  @cesarbr/macaw --save
```
2. Importe o macaw:
```js
import { defineCustomElements as macaw } from '@cesarbr/macaw/loader';
```
3. Inicie o macaw 
```js
macaw(window);
```
4. Agora você pode usar qualquer componente em seus templates, JSX, html e etc.

---

## Contato
Caso queira entrar em contato conosco, dar feedbacks ou compartilhar sentimentos, pode mandar um [e-mail pra gente](mailto:macaw-l@cesar.org.br)
