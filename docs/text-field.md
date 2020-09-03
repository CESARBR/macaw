---
layout: default
title: Text Field
nav_order: 16
description: ""
permalink: text-field/
---
# Text Field
{: .no_toc }

O `m-text-field` é campo de texto do Macaw. Ele já vem com padrão de tratamento de campo.

## Exemplo

<m-text-field value="Valor do campo"></m-text-field>
<m-text-field placeholder="Desabilitado" disabled></m-text-field>
<m-text-field value="Invalido" valid="false"></m-text-field>

<div style="background-color: #ffe5e5; padding: 20px; font-size: 14px; border-radius: 5px; margin: 20px 0;">
  Devido a problemas de compatibilidade com o GitHub Pages, o componente abaixo não pode ser gerado via código para documentação. 
  <br/>
  <br/>
  Mas você pode usá-lo no seu ambiente normalmente enquanto investigamos isso. :) 
</div>

<img src="../assets/images/mcw-text-field-v2.png" width="380">

#### HTML
```html
<m-text-field value="Valor do campo"></m-text-field>
<m-text-field placeholder="Desabilitado" disabled></m-text-field>
<m-text-field value="Invalido" valid="false"></m-text-field>
<m-text-field placeholder="Buscar" type="search"></m-text-field>
```

## Propriedades

| Property      | Attribute     | Description                  | Type      | Default     |
| ------------- | ------------- | ---------------------------- | --------- | ----------- |
| `disabled`    | `disabled`    | Campo desabilitado           | `boolean` | `false`     |
| `placeholder` | `placeholder` | Placeholder do campo         | `string`  | `undefined` |
| `type`        | `type`        | Tipo do campo                | `string`  | `'text'`    |
| `valid`       | `valid`       | Status de validação do campo | `boolean` | `true`      |
| `value`       | `value`       | Valor do campo               | `string`  | `undefined` |


## Dependências

### Depende de

- [m-icon](/icons)