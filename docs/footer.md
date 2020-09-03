---
layout: default
title: Footer
nav_order: 6
description: ""
permalink: footer/
---
# Footer
{: .no_toc }

O `m-footer` permite exibir informações de rodapé e é aberto para receber mais notas que se julgar necessário.

## Exemplo

<m-footer type="block">Lorem</m-footer>
<br>
<m-footer type="line">Lorem</m-footer>

#### HTML
```html
<m-footer type="block">Lorem</m-footer>
<m-footer type="line">Lorem</m-footer>
```

## Propriedades

| Propriedade  | Atributo   | Descrição                            | Type     | Default     |
| ------------ | ---------- | ------------------------------------ | -------- | ----------- |
| `footerType` | `type`     | Estilo do footer (`line` ou `block`) | `string` | `undefined` |