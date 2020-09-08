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
<m-text-field placeholder="Buscar" type="search"></m-text-field>

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