---
layout: default
title: Header
nav_order: 7
description: ""
permalink: header/
---
# Header
{: .no_toc }

O `m-header` permite exibir informações da marca como logo e nome, além de avatar do avatar do usuário logado com seu nome.

Usando um `slot` específico ainda é possível posicionar a logo e o texto adicional que se julgar necessário.

## Exemplo

<m-header brand-name="Minha Marca" avatar-source="https://cms.qz.com/wp-content/uploads/2018/12/earring2.png" avatar-name="Regina Phalange" class="mcw-header mcw-preview">
    <span slot="brand-logo" class="content-header__logo">
        <svg>
            <path fill="#F07E2A" d="M49.691,9.898C49.691,15.469,38.546,20,24.846,20S0,15.469,0,9.898c0-2.35,2.016-4.635,5.676-6.436c3.59-1.765,8.594-2.992,14.09-3.455L19.859,0v0.705l-0.075,0.01c-5.756,0.748-9.623,2.693-9.623,4.842c0,2.845,6.587,5.158,14.685,5.158c8.097,0,14.685-2.313,14.685-5.158c0-2.134-3.833-4.074-9.538-4.829l-0.074-0.01v-0.71l0.094,0.008c5.476,0.47,10.458,1.698,14.03,3.461C47.685,5.274,49.691,7.555,49.691,9.898z M14.357,4.93c0,2.1,4.705,3.809,10.488,3.809S35.334,7.029,35.334,4.93c0-1.822-3.419-3.355-8.314-3.727l-0.093-0.007v0.542l0.076,0.009c2.518,0.295,3.962,0.867,3.962,1.569c0,1.01-2.802,1.863-6.119,1.863s-6.12-0.854-6.12-1.863c0-0.708,1.458-1.281,3.999-1.573l0.076-0.009V1.193L22.708,1.2C17.791,1.567,14.357,3.101,14.357,4.93z"/>
        </svg>
    </span>
    <span slot="header-left"> Lorem ipsum</span>
    <span slot="header-right"> Dolor sit amet</span>
</m-header>

#### HTML
```html
<m-header brand-name="Minha Marca" avatar-source="https://cms.qz.com/wp-content/uploads/2018/12/earring2.png" avatar-name="Regina Phalange">
    <span slot="brand-logo" class="content-header__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289 116.318">
            <path fill="#F07E2A" d="M289,57.568c0,32.395-64.822,58.75-144.5,58.75S0,89.963,0,57.568c0-13.666,11.725-26.957,33.013-37.426
	C53.891,9.875,82.993,2.738,114.958,0.046L115.5,0v4.104l-0.436,0.056c-33.477,4.346-55.97,15.662-55.97,28.158
	c0,16.542,38.312,30,85.405,30s85.405-13.458,85.405-30c0-12.41-22.292-23.698-55.471-28.089L174,4.172V0.043l0.543,0.047
	c31.847,2.73,60.826,9.879,81.602,20.131C277.332,30.676,289,43.939,289,57.568z M83.5,28.672c0,12.212,27.364,22.146,61,22.146
	s61-9.935,61-22.146c0-10.602-19.885-19.514-48.357-21.673l-0.538-0.041v3.153l0.442,0.052c14.645,1.715,23.045,5.041,23.045,9.126
	c0,5.873-16.299,10.834-35.592,10.834s-35.592-4.961-35.592-10.834c0-4.119,8.476-7.455,23.255-9.152l0.442-0.051V6.942l-0.537,0.04
	C103.473,9.113,83.5,18.032,83.5,28.672z"/>
        </svg>
    </span>
    <span slot="header-left"> Lorem ipsum</span>
    <span slot="header-right"> Dolor sit amet</span>
</m-header>
```

### Slots

| Slot           | Descrição                          | 
| -------------- | ---------------------------------- |
| `brand-logo`   | Nome da marca - extremo esquerdo   |
| `header-left`  | Dados complementares à esquerda    |
| `header-right` | Dados complementares à direita     |


## Propriedades

| Propriedade     | Descrição                          | Tipo      | Default     |
| --------------- | ---------------------------------- | --------- | ----------- |
| `brandName`     | Nome da marca                      | `string`  | `undefined` |
| `avatarName`    | Nome do usuário logado             | `string`  | `undefined` |
| `avatarSource`  | Imagem de avatar do usuário logado | `string`  | `undefined` |