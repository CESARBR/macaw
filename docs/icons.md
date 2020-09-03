---
layout: default
title: Icons
nav_order: 8
description: ""
permalink: icons/
---

# Icons
{: .no_toc }

O `m-icon` conta com um pacote inicial de 37 ícones. Especialmente esse componente terá sua função `shadow` desativada para permitir maior poder de customização. Também é possível selecionar o tipo de ícone: **bold**, **regular** e **filled**

## Exemplo
<svg class="mcw-icon">
    <path id="Path_133" data-name="Path 133" d="M143.693,160.442H139V147.055c0-6.809-3.332-12.38-8.337-14.89a6.513,6.513,0,0,0-6.485-6.121l-.148,0a6.5,6.5,0,0,0-6.373,6.37l.106,0c-4.673,2.546-7.665,7.761-7.665,14.233v13.789h-4.673a1.3,1.3,0,1,0,0,2.595h14.189a4.568,4.568,0,0,0,9.124,0h14.957a1.3,1.3,0,1,0,0-2.595Zm-19.607-31.8a3.988,3.988,0,0,1,3.719,2.478,13.8,13.8,0,0,0-3.257-.394,14.6,14.6,0,0,0-4.077.581A3.9,3.9,0,0,1,124.086,128.641Zm12.318,31.8H112.692V146.653c0-7.85,4.876-13.333,11.856-13.333,6.871,0,11.856,5.774,11.856,13.735Z" transform="translate(-95 -115.069)"/>
</svg>
<svg class="mcw-icon">
    <path id="Path_134" data-name="Path 134" d="M-5415-1050.483v-36.329h7.786v-3.89a1.3,1.3,0,0,1,1.3-1.3,1.3,1.3,0,0,1,1.3,1.3v3.89h20.757v-3.89a1.3,1.3,0,0,1,1.3-1.3,1.3,1.3,0,0,1,1.3,1.3v3.89h7.786v36.329Zm2.595-2.6h36.33v-20.756h-36.33Zm0-23.352h36.33v-7.786h-5.191v3.889a1.3,1.3,0,0,1-1.3,1.294,1.3,1.3,0,0,1-1.3-1.294v-3.889h-20.757v3.889a1.3,1.3,0,0,1-1.3,1.294,1.3,1.3,0,0,1-1.3-1.294v-3.889h-5.191Zm28.077,19.981v-3.893h3.894v3.893Zm-11.21,0v-3.893h3.894v3.893Zm-12.142,0v-3.893h3.891v3.893Zm23.352-10.378v-3.893h3.894v3.893Zm-11.21,0v-3.893h3.894v3.893Zm-12.142,0v-3.893h3.891v3.893Z" transform="translate(5424.48 1101.672)"/>
</svg>

<m-icon name="magnifier" type="bold"></m-icon>

#### HTML

```html
<m-icon name="bell"></m-icon>
<m-icon name="calendar" type="filled"></m-icon>
<m-icon name="calendar" type="bold"></m-icon>

```

### Lista completa de ícones

<img src="../assets/images/pacote-icones.png">

## Propriedades

| Property  | Attribute | Description                              | Type     | Default     |
| --------- | --------- | ---------------------------------------- | -------- | ----------- |
| `name`    | `name`    | O nome do ícone                          | `string` | `undefined` |
| `tooltip` | `title`   | Tooltip do ícone                         | `string` | `undefined` |
| `type`    | `type`    | O tipo do ícone: regular, bold ou filled | `string` | `'regular'` |


## Dependências

### Usado por

 - [m-dropdown](/dropdown)
 - [m-text-field](/text-field)