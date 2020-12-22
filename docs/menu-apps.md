---
layout: default
title: Menu Apps
nav_order: 11
description: ""
permalink: menu-apps/
---
# Menu Apps
{: .no_toc }

O `m-menu-apps` é o componente de menu de aplicativos do Macaw.

## Exemplo
<style>
  .m-menu-apps {
    position: relative
  }

  .m-menu-apps__button {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 4px;
    border: none;
    background-color: #F5F5F5;
    outline: none
  }

  .m-menu-apps__icon {
    display: inline-block;
    margin: 10px 0 0 10px;
    width: 12px;
    height: 12px
  }

  .m-menu-apps__icon svg {
    width: auto
  }

  .m-menu-apps .m-dropdown__content {
    right: -30px;
    left: unset;
    max-height: 530px;
    overflow-y: scroll
  }

  .m-menu-apps .m-dropdown__content .list-items {
    padding: 0 8px;
    min-width: unset
  }

  .m-menu-apps .m-dropdown__content .list-items hr {
    width: calc(100% + 48px);
    border-color: #D6D6D6;
    border-style: solid;
    border-bottom-width: 0;
    border-top-width: 1px;
    border-right-width: 0;
    border-left-width: 0
  }

  .m-menu-apps .m-dropdown__content .list-items h3 {
    width: 100%;
    text-align: center;
    font-weight: normal;
    margin-top: 40px
  }

  .m-menu-apps.m-menu-apps-grid .m-dropdown__content .list-items {
    display: flex;
    flex-wrap: wrap;
    max-width: 477px;
    padding: 0 24px
  }

  .m-menu-apps.m-menu-apps-grid .m-dropdown__content .list-items hr {
    width: calc(100% + 48px);
    margin: 0 -24px 8px
  }

  .m-menu-apps.m-menu-apps-list .m-dropdown__content .list-items {
    width: max-content
  }

  .m-menu-apps.m-menu-apps-list .m-dropdown__content .list-items hr {
    width: calc(100% + 16px);
    margin: 8px -8px
  }

  m-menu-apps-item {
    margin-top: 8px;
    display: block
  }

  m-menu-apps-item:last-child .m-menu-apps-item {
    margin-bottom: 8px
  }

  m-menu-apps-item:hover .m-menu-apps-item {
    background: #F5F5F5
  }

  m-menu-apps-item .m-menu-apps-item {
    cursor: pointer;
    border-radius: 5px
  }

  m-menu-apps-item a {
    color: #4B4B4B;
    text-decoration: none;
    margin: 10px;
    display: inline-block
  }

  m-menu-apps-item figure {
    margin: 0;
    padding: 0
  }

  m-menu-apps-item figure span {
    display: flex;
    align-items: center
  }

  m-menu-apps-item figure span img {
    width: 100%;
    height: auto
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item {
    margin-right: 31px;
    margin-bottom: 8px;
    height: 98px
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item .m-menu-apps-item {
    text-align: center;
    width: 96px
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item a {
    display: inline-block
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item figure span {
    margin: 0 auto;
    width: 56px;
    height: 56px
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item figure figcaption {
    font-size: 0.625rem;
    max-width: 76px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item:nth-of-type(4n) {
    margin-right: 0
  }

  .m-menu-apps-grid .m-dropdown__content .list-items m-menu-apps-item:hover figure figcaption {
    white-space: normal;
    overflow: visible;
    text-overflow: unset
  }

  .m-menu-apps-list .m-dropdown__content .list-items m-menu-apps-item figure {
    display: flex;
    align-items: center
  }

  .m-menu-apps-list .m-dropdown__content .list-items m-menu-apps-item figure span {
    margin-right: 8px;
    width: 32px;
    height: 32px
  }

  .m-menu-apps-list .m-dropdown__content .list-items m-menu-apps-item figure figcaption {
    font-size: 0.875rem
  }
</style>

<m-menu-apps label="Menu de Aplicativos - Lista JSON" type="list" id="menu-items"></m-menu-apps>

<m-menu-apps label="Menu de Aplicativos - Lista" type="list">
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Intranet</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Portal do Colaborador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">SAI</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <hr>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Auxílio ao Idioma</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Baias</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Bens</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Biblioteca CESAR School</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CODI</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">GIN</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Indique um Amigo</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Mapeamento de Competências</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Metas</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Papeleta de Viagem</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Punch Monitor</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">PrestContas</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Rateio</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Recrutador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Solicitação de Evento</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Apps</m-menu-apps-item>
  <h3>Sistemas Parceiros</h3>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CRM</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Desko</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Portal do Colaborador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qulture Rocks</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qlik Sense</m-menu-apps-item>
</m-menu-apps>

<m-menu-apps label="Menu de Aplicativos - Grid" type="grid">
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Intranet</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Portal do Colaborador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">SAI</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <hr>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Auxílio ao Idioma</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Baias</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Bens</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Biblioteca CESAR School</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CODI</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">GIN</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Indique um Amigo</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Mapeamento de Competências</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Metas</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Papeleta de Viagem</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Punch Monitor</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">PrestContas</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Rateio</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Recrutador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Solicitação de Evento</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Apps</m-menu-apps-item>
  <h3>Sistemas Parceiros</h3>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CRM</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Desko</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Portal do Colaborador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qulture Rocks</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qlik Sense</m-menu-apps-item>
</m-menu-apps>

<script>
    const myMenuApps = document.getElementById('menu-items');
    myMenuApps.menuItemsJson = '{"mostUsed":[{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Intranet"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Portal do Colaborador"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"SAI"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"HELP"}],"common":[{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Auxílio ao Idioma"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Baias"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Bens"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Biblioteca CESAR School"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"CODI"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"GIN"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Indique um Amigo"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Mapeamento de Competências"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Metas"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Papeleta de Viagem"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Punch Monitor"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"PrestContas"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Rateio"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Recrutador"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Solicitação de Evento"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Apps"}],"partners":[{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"CRM"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Desko"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"HELP"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Portal do Colaborador"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Qulture Rocks"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Qlik Sense"}]}'
</script>

## Uso
Existem três formas de instanciar o componente `<m-menu-apps>`:
### 1. Tag simples e obtendo os itens via JSON
HTML
```html
<m-menu-apps label="Menu de Aplicativos - Lista JSON" type="list" id="menu-items"></m-menu-apps>
```
JavaScript
```javascript
// Atribua o elemento DOM do componente m-manu-apps a uma constante, usando o atributo id
const myMenuApps = document.getElementById('menu-items');
// Passe uma string no formato JSON com os itens do Menu Apps para a propriedade pública menuItemsJson.
myMenuApps.menuItemsJson = '{"mostUsed":[{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Intranet"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"Portal do Colaborador"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"SAI"},{"link":"http://","imgSrc":"https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png","imgAlt":"Marca CESAR","itemContent":"HELP"}],...
```
A string JSON fornecida deve gerar a seguinte estrutura de objeto literal JavaScript (é possível testar a string JSON em <a href="http://json.parser.online.fr/">Json Parser Online</a>) ao ser convertido pelo método nativo <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse">JSON.parse()</a>:

```javascript
{
  "mostUsed": [
    {
      "link": "http://",
      "imgSrc": "https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png",
      "imgAlt": "Marca CESAR",
      "itemContent": "Intranet"
    },
    /* ... */
    {
      "link": "http://",
      "imgSrc": "https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png",
      "imgAlt": "Marca CESAR",
      "itemContent": "HELP"
    }
  ],
  "common": [
    {
      "link": "http://",
      "imgSrc": "https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png",
      "imgAlt": "Marca CESAR",
      "itemContent": "Auxílio ao Idioma"
    },
    /* ... */
    {
      "link": "http://",
      "imgSrc": "https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png",
      "imgAlt": "Marca CESAR",
      "itemContent": "Apps"
    }
  ],
  "partners": [
    {
      "link": "http://",
      "imgSrc": "https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png",
      "imgAlt": "Marca CESAR",
      "itemContent": "CRM"
    },
    /* ... */
    {
      "link": "http://",
      "imgSrc": "https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png",
      "imgAlt": "Marca CESAR",
      "itemContent": "Qlik Sense"
    }
  ]
}
```
### 2. Declarativa
HTML
```html
<m-menu-apps label="Menu de Aplicativos - Lista" type="list">
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Intranet</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Portal do Colaborador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">SAI</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <hr>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Auxílio ao Idioma</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Baias</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Bens</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Biblioteca CESAR School</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CODI</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">GIN</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Indique um Amigo</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Mapeamento de Competências</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Metas</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Papeleta de Viagem</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Punch Monitor</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">PrestContas</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Rateio</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Recrutador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Solicitação de Evento</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Apps</m-menu-apps-item>
  <h3>Sistemas Parceiros</h3>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CRM</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Desko</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Portal do Colaborador</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qulture Rocks</m-menu-apps-item>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qlik Sense</m-menu-apps-item>
</m-menu-apps>
```

## Propriedades

| Property        | Attribute         | Description              | Type     | Default     |
| --------------- | ----------------- | ------------------------ | -------- | ----------- |
| `label`         | `label`           | Menu label               | `string` | `undefined` |
| `menuItemsJson` | `menu-items-json` | Menu Item items data.    | `string` | `undefined` |
| `type`          | `type`            | Menu type (grid or list) | `string` | `'grid'`    |


### Depende de

- [m-menu-apps-item](../m-menu-apps-item)
- [m-dropdown](../m-dropdown)