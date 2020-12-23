---
layout: default
title: Dropdown
nav_order: 7
description: ""
permalink: dropdown/
---
# Dropdown
{: .no_toc }

O `m-dropdown` é o menu dropdown acompanhado por um `m-button`.

## Exemplo

<m-dropdown label="Click me">
  <m-dropdown-item>
    First Item
  </m-dropdown-item>
  <m-dropdown-item>
    <a href="http://">Second Item <m-icon name="check" /></a>
  </m-dropdown-item>
</m-dropdown>

#### HTML
```html
<m-dropdown label="Click me">
  <m-dropdown-item>
    First Item
  </m-dropdown-item>
  <m-dropdown-item>
    <a href="">Second Item <m-icon name="check" /></a>
  </m-dropdown-item>
</m-dropdown>
```

## Propriedades

| Propriedade           | Atributo             | Descrição                                                                                                                                       | Tipo      | Padrão                  |
| ------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------ |
| `avatarSource`     | `avatar-source`       | URL da imagem do avatar ou o nome do usuário.                                                                                                     | `string`  | `undefined`              |
| `dropdownButtonID` | `dropdown-button-i-d` | ID Unique.                                                                                                                                        | `string`  | `'mID-' + setUniqueID()` |
| `icon`             | `icon`                | Ícone a ser exibido no botão                                                                                                                      | `string`  | `undefined`              |
| `iconType`         | `icon-type`           | Tipo do Ícone ser exibido no botão                                                                                                                | `string`  | `undefined`              |
| `label`            | `label`               | Etiqueta do dropdown                                                                                                                              | `string`  | `undefined`              |
| `showChevron`      | `show-chevron`        | Se o ïcone de Chevron deve ser exibido                                                                                                            | `boolean` | `true`                   |
| `showLabel`        | `show-label`          | Se a etiqueta do botão deve ser exibida. Caso seja usada uma imagem ou ícone é necessário fornecer o nome do botão, por motivos de acessibilidade | `boolean` | `true`                   |
| `type`             | `type`                | Tipo do botão do Dropdown: `primary` ou `text`                                                                                                    | `string`  | `'primary'`              |


## Dependências

### Depende de

- [m-button](/button)
- [m-icon](/icons)
