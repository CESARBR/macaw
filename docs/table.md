---
layout: default
title: Table
nav_order: 9
description: ""
permalink: table/
---
# Table
{: .no_toc }

A `m-table` trata de uma tabela Macaw onde é possível passar valores em formato de string para suas células. Ela usa , automaticamente, os componentes `m-thead` e `m-tbody` para alimentar seu conteúdo.

## Exemplo

<m-table strip='true' class="mcw-preview"></m-table>
<script>
    const myTable = document.querySelector('m-table');
    myTable.data = [{id: '01', name: 'Pedro', job: 'Coelho' }, {id: '02', name: 'Patrick', job: 'Estrela' }];
    myTable.dataHeaders = [{title: 'ID', key: 'id'}, {title: 'Name', key: 'name'}, {title: 'Job', key: 'job'},];
</script>

#### HTML
```html
<m-table strip='true'></m-table>
```

#### JS
```js
const myTable = document.querySelector('m-table');
myTable.data = [{id: '01', name: 'Pedro', job: 'Coelho' }, {id: '02', name: 'Patrick', job: 'Estrela' }];
myTable.dataHeaders = [{title: 'ID', key: 'id'}, {title: 'Name', key: 'name'}, {title: 'Job', key: 'job'},];
```

## Propriedades

| Propriedade  | Descrição                     | Tipo      | Default     |
| ------------ | ----------------------------- | --------- | ----------- |
| `data`       | Dados para o body da tabela   | `object`  | `undefined` |
| `dataHeaders`| Dados para o header da tabela | `object`  | `undefined` |
| `strip`      | Estilo da tabela              | `boolean` | `false`     |