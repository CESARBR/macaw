---
layout: default
title: Button
nav_order: 4
description: ""
permalink: button/
---
# Button
{: .no_toc }

O `m-button` é o botão do Macaw. É possível desabilitá-lo ou adicionar um tooltip a ele.

## Exemplo

<m-button class="my-button" title="Button default">Button</m-button>
<m-button class="my-button--disabled" title="Button disabled" disabled>Button disabled</m-button>

#### HTML
```html
<m-button class="my-button" title="Button default">Button</m-button>
<m-button class="my-button--disabled" title="Button disabled" disabled>Button disabled</m-button>
```

## Propriedades

| Propriedade | Atributo   | Descrição          | Tipo      | Default     |
| ----------- | ---------- | ------------------ | --------- | ----------- |
| `disabled`  | `disabled` | Botão desabilitado | `boolean` | `false`     |
| `tooltip`   | `title`    | Tooltip do botão   | `string`  | `undefined` |


## Métodos

### `myTip() => Promise<string>`

Method showPrompt

#### Returns

Type: `Promise<string>`