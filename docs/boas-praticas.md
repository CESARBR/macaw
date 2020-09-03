---
layout: default
title: Boas Práticas - HTML e CSS
nav_order: 2
description: ""
permalink: boas-praticas/
---

# Boas Práticas - HTML e CSS
{: .no_toc }

## Conteúdo
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Arquivo normalize

- Todos os projetos devem ter um
- Já que cada browser tem a sua própria forma de renderizar certas tags HTML, esse arquivo fica responsável por sobrescrever essas regras e criar sua própria configuração de regras
- Normalmente, sobrescreve regras de tags como `<html>` e `<body>`.

#### normalize.scss
{: .no_toc }
```css
html, body {
    margin: 0;
    min-height: 100vh;
}
```

### BEM
- [B.E.M.](http://getbem.com/introduction/) é uma metodologia que ajuda desenvolvedores a entenderem melhor o código sem precisar checar a interface online.
- A sigla representa **B**lock, **E**lement, **M**odifier (em português: Bloco, Elemento e Modificador), significa que uma classe de componente pode ser dividida em elementos (nesse caso você pode acrescentar dois underlines) e/ou modificadores (nesse caso você pode adicionar 2 hífens), então se você quiser escrever classes específicas de um componente, como um componente de notificação, você pode fazer algo assim:

#### HTML
{: .no_toc }
```html
<div class="notification notification—-success">
    <span class="notification__message">Changes saved</span>
    <button class="button">Dismiss</button>
</div>
```

- **notification** é a classe pai, esse também deve ser o nome do componente que está sendo criado
- **notification—-success** é a classe modificadora (hífens duplos), significa que "success" é um tipo de notificação
- **notification__message** é a classe do elemento (underline duplo), quer dizer que "button" é parte do componente de notificação também é um bloco, e pode ser utilizado dentro de outros blocos, assim aumenta a reutilização de componentes
- Quando começar a nomear as classes, tenha em mente que elas devem ser genéricas para poderem ser usadas em diversos contextos

#### HTML MAU
{: .no_toc }
```html
<button class="application-form__button—-blue">
    <i class="application-form__button—-blue__save-icon"></i>
    <span class="application-form__button—-blue__label">Save</span>
</button>
```
#### HTML BOM
{: .no_toc }
```html
<button class="button button—-blue">
    <i class="button__check-icon"></i>
    <span class="button__label">Save</span>
</button>
```

- Você pode ter ambas as estruturas em uma mesma classe, como notification__button—-danger
- Evite múltiplas estruturas na mesma classe, como notification__button__message__icon
- Dê preferência a criar modificadores na classe pai do componente. Dessa forma você pode centralizar uma configuração de comportamentos específicos nos seus arquivos CSS.

#### SCSS BOM
{: .no_toc }
```css
.notification—-success {
    .notification__button {
        background-color: green;
    }
}
```

### Aninhamento CSS
- Evite ao máximo aninhar classes. Dessa forma, se houverem mudanças de estrutura em um componente específico, essa mudança não afetará muito a UI. 
- Aninhamento pode ocorrer em situações que o desenvolvedor está usando componentes dentro de outros componentes. Nesse caso você pode...

#### SCSS BOM
{: .no_toc }
```css
.notification__button { /* class for notification component */
    …
    .button { /* class for button component */
        …
    }
}
```

- Classes CSS devem ser o mais independente possível, então tenham em mente que classes customizadas devem ser declaradas na  raiz do arquivo quando possível

#### SCSS MAU
{: .no_toc }
```css
.notification {
    …
    .notification__message {
        …
        .notification__message-content {
            …
        }
    }
}
```

#### SCSS BOM
{: .no_toc }
```css
.notification {
    …
}
 
.notification__message {
    …
}
 
.notification__message-content {
    …
}
```

### Sobrescrições
Sobrescrições são delicadas já que alguns browsers possuem diferentes regras de o que estará sobrescrevendo o que, a seguir temos algumas soluções alternativas para isso, você pode: 
- Ao invés de sobrescrever código, você pode usar pseudo classes  CSS para adicionar especificidade a elementos. Veja mais em [pseudo-classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes).

#### HTML
{: .no_toc }
```html
<div class="notification notification—-success">
    <span class="notification__message">Changes saved</span>
    <button class="notification__button">Dismiss</button>
</div>
```

#### SCSS MAU
{: .no_toc }
```css
.notification {
    background-color: blue; /* default background-color */
    padding: 10px 20px;
    text-align: center;
}
```

#### SCSS BOM
{: .no_toc }
```css
.notification:not(.notification—-transparent) {
    background-color: blue; /* Aplica esse background-color em todos as notificações que não recebem a classe notification--transparent */
}
 
.notification {
    padding: 10px 20px;
    text-align: center;
}
 
.notification—-transparent {
    background-color: transparent;
    border-top-left-radius: 5px;
}
```

#### SCSS BOM
{: .no_toc }
```css
.button-group .button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
 
.button-group .button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
 
.button-group .button:not(:first-child):not(:last-child) {
    border-radius: 0;
}
```

### "Stickiness"
- Use `position: sticky` para deixar elementos "colados" ao viewport
- Evite usar javascript para isso, é desnecessário
- Tenha em mente que o `position: sticky` só funciona em recipientes cujo pai imediato NÃO possui um `overflow: scroll/auto/hidden`.
- Se você for usar nos títulos de uma tabela, aplique-o nas `<th>` e use uma estratégia de `z-index` para os headers e as colunas
- Podem haver problemas entre compatibilidade de browsers, nesse caso use os pacotes de prefixos dos browsers quando necessário
- Há casos raros em que dependendo da tela em que um componente está sendo renderizado, as referências de `top/bottom/left/right` podem se alterar

### Mixins VS Placeholders
- `@mixin` devem ser usados quando você estiver lidando com atributos que podem receber valores variados, funcionam como uma função.
- Use `@include` para aplicar os mixins
- Use `@extend` para aplicar os placeholders
- `%placeholder` é um helper do Sass que funciona como um grupo de atributos e valores que você pode adicionar a diferentes classes através de uma âncora (o nome do placeholder)
- Use placeholders quando você quiser replicar atributos CSS (e seus valores fixos) entre classes. Use mixins quando quiser configurar atributos que podem ter diferentes valores.

#### SCSS (ESTRUTURA MIXIN E PLACEHOLDER)
{: .no_toc }
```css
@mixin mixin-name ($variable1, $variable2) {
    attributeA: $variable1;
    attributeB: $variable2;
}
 
%placeholder-name {
    attributeA: value1;
    attributeB: value2;
}
```

#### SCSS (MIXIN)
{: .no_toc }
```css
@mixin button-style ($background, $font-color) {
    background-color: $background;
    color: $font-color;
}
 
.button—-success {
    @include button-style(green, white);
}
 
.button—-danger {
    @include button-style(red, white);
}
```

#### CSS FINAL
{: .no_toc }
```css
.button—-success {
    background-color: green;
    color: white;
}
 
.button—-danger {
    background-color: red;
    color: white;
}
```
---
#### SCSS (PLACEHOLDER)
{: .no_toc }
```css
%align-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
 
.main-container {
    @extend %align-center;
}
 
.img {
    @extend %align-center;
}
```

#### CSS FINAL
{: .no_toc }
```css
.main-container,
.img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

### Variáveis
- Variáveis de novos componentes e templates devem ter seus próprio arquivo. Mas as variáveis devem ser seccionados via comentários para evitar confusão

#### .../styles/variables.scss
{: .no_toc }
```css
/* TEMPLATES VARIABLES */
$section-padding: 20px;
$section-header-height: 40px;
 
/* COMPONENTS VARIABLES */
/* Button variables */
$button-padding: 10px 15px;
 
/* Notification variables */
$notification-padding: 25px;
$notification-max-width: 450px;
```

### Performance
- Use componentes nativos do HTML (`<input>, <button>, <a>, <nav>`) sempre que possível, isso diminui significantemente problemas de compatibilidade de browser
- Use especificações nativas do [WAI-ARIA](https://www.w3.org/TR/using-aria/) no HTML por questões de acessibilidade (`aria-label, aria-hidden, aria-labelledby, aria-discribedby`), isso também resolve alguns problemas de compatibilidade de browser

#### HTML
{: .no_toc }
```html
<button aria-label="Save form">
    <i class="check-icon"></i>
</button>
```

- Considere a necessidade real de pacotes de recursos visuais, imagens e vídeos podem impactar a performance de sua página web significantemente
- Opite por usar SVGs para referências gráficas, como ícones

### SVG
- SVGs são muito recomendados para serem usados em websites já que são vetores e precisam que pouquíssimo suporte
- Você não precisa de CSS para customizar seu SVG quando inserido diretamente no HTML (usando a tag `<svg>`), você pode usar [atributos SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) para isso. Quanto mais se usar atributos HTML para isso, melhor será a compatibilidade entre browsers
- [SVGs são suportados em e-mails](https://css-tricks.com/a-guide-on-svg-support-in-email/) (web e cliente) para os SO mais usados.
- SVGs também podem suportar [animações e gradientes](https://designmodo.com/animate-svg-gradients/) (sem CSS)

### Diversos
- Mantenha o código DRY (**D**on't **R**epeat **Y**ourself), então tenha em mente que o CSS deve ser reusável
- Quanto mais específico for uma declaração de CSS, mais forte será a regra que você estiver aplicando.
- Se houverem arquivos CSS específicos de componentes e outros específicos de templates, evite misturá-los, cada um deve ter seu próprio arquivo
- Evite usar o atributo float o máximo possível, ele faz com que elementos percam sua referência "física" na página.
- O atributo position deve ser reservado para aplicar stickiness ou posicionar elementos que estão bloqueados pelos limites dos seus recipientes pai
- `!important` só deve ser usado para sobrescrever CSS inline, que devem ser resultado de atributos manipulados via javascript, Evite, a todo custo, escrever CSS inline manualmente, isso deve ser reservado para interferências do javascript
- Para escrever CSS destinados a aparelhos mobile, use media queries e variáveis de viewport, mas se puder escrever um código mais reusável para todas as plataformas, melhor ainda.
- Para testar responsividade, é bom contar com simuladores de dispositivos além do browser desktop, isso porque os simuladores conseguem replicar comportamentos de controladores HTML (input datepicker, input number, input radio...) que são diferentes entre desktop e mobile.
- Sass possui o helper "&" que pode ser bastante útil, pode ser usado para "cascatear" classes da seguinte forma:

#### SCSS
{: .no_toc }
```css
.notification {
    &__message {
        font-size: 14px;
        text-align: center;
    }
    &__button {
        padding: 10px 12px;
        color: white;
    }
}
```

#### CSS FINAL
{: .no_toc }
```css
.notification__message {
    font-size: 14px;
    text-align: center;
}
 
 
.notification__button {
    padding: 10px 12px;
    color: white;
}
```

Apesar do SASS disponibilizar isso para otimização de código, é recomendado que se use somente quando todo o CSS de componentes seguir esse padrão, caso contrário pode causar confusão entre desenvolvedores, perda de tempo e até declarações de CSS repetidas entre os arquivos de CSS.

As unidades de medida mais comuns em CSS são pixels (px), porcentagem (%) e REM (rem) 
* **pixel**: medida fixa
* **percentage**: medida relativa as dimensões do container pai
* **REM**: medida relativa ao font-size aplicado no `<body>`