---
layout: default
title: Avatar
nav_order: 4
description: ""
permalink: avatar/
---
# Avatar
{: .no_toc }

O `m-avatar` é responsável pela renderização do avatar do usuário, seja uma imagem ou as iniciais de seu nome.

## Exemplo

<m-avatar source="https://cms.qz.com/wp-content/uploads/2018/12/earring2.png" data-alt="Alternative description"></m-avatar>
<m-avatar source="Mary Smith Montgomery"></m-avatar>

#### HTML
```html
<m-avatar source="https://cms.qz.com/wp-content/uploads/2018/12/earring2.png" data-alt="Alternative description"></m-avatar>
<m-avatar source="Mary Smith Montgomery"></m-avatar>
```

## Propriedades

| Propriedade  | Atributo   | Descrição                         | Type     | Default     |
| ------------ | ---------- | --------------------------------- | -------- | ----------- |
| `dataSource` | `src`      | URL da imagem ou nome do usuário  | `string` | `undefined` |
| `dataAlt`    | `alt`      | Descrição alternativa             | `string` | `undefined` |

## Métodos

### `validURL() => Boolean`

Check if a given URL is valid

#### Returns

Type: `Boolean`

### `validURL() => String`

Get initials of first and last names from a given string

#### Returns

Type: `String`