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

## Exemplos
<style>
  m-menu-apps * {
    box-sizing: initial;
  }

  m-menu-apps-item .m-menu-apps-item a,
  m-menu-apps-item .m-menu-apps-item a:hover {
    background: none;
  }
</style>
### Menu de Aplicativos - tipo: Lista - itens carregados via JSON
<m-menu-apps label="Menu de Aplicativos - Lista JSON" type="list" id="menu-items"></m-menu-apps>

### Menu de Aplicativos - tipo: Lista - itens adicionados de forma declarativa
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

### Menu de Aplicativos - tipo: Grid - itens adicionados de forma declarativa
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
Existem duas formas de instanciar o componente `<m-menu-apps>`:
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
  <!-- ... -->
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">HELP</m-menu-apps-item>
  <hr>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Auxílio ao Idioma</m-menu-apps-item>
  <!-- ... -->
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Apps</m-menu-apps-item>
  <h3>Sistemas Parceiros</h3>
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">CRM</m-menu-apps-item>
  <!-- ... -->
  <m-menu-apps-item link="http://" img-src="https://www.cesar.org.br/wp-content/uploads/2017/06/logo-md.png" img-alt="Marca CESAR">Qlik Sense</m-menu-apps-item>
</m-menu-apps>
```

## Propriedades

| Propriedades    | Atributo          | Descrição                                    | Tipo     | Padrão      |
| --------------- | ----------------- | -------------------------------------------- | -------- | ----------- |
| `label`         | `label`           | Etiqueta do Menu                             | `string` | `undefined` |
| `menuItemsJson` | `menu-items-json` | Dados JSON com os dados dos itens do Menu    | `string` | `undefined` |
| `type`          | `type`            | Tipo do Menu (grid ou list)                  | `string` | `'grid'`    |


### Depende de

- [m-menu-apps-item](../m-menu-apps-item)
- [m-dropdown](../m-dropdown)