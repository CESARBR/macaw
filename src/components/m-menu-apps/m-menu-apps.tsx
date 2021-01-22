import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'm-menu-apps',
  styleUrl: 'm-menu-apps.scss',
  shadow: false
})

export class MenuApps {

  /**
   * Menu label
   */
  @Prop() label: string;

  /**
   * Menu type (grid or list)
   */
  @Prop() type: string = 'grid';

  /**
  * State of menu (opened or closed)
  */
  @State() open: boolean;

  /**
   * Menu Item items data.
   */
  @Prop() menuItemsJson: string;

  render() {
    let menuData = this.menuItemsJson ? JSON.parse(this.menuItemsJson) : '',
        mostUsedItems: Array<object>, commonItems: Array<object>, partnersItems: Array<object>;

    if(menuData) {
      function isObject(objectItem: any) {
        return objectItem.constructor === Object;
      }

      function isArray(arrayItem: any) {
        return arrayItem instanceof Array;
      }

      function isStringValid(stringValue: any) {
        return (typeof stringValue === 'string' && stringValue !== '');
      }

      function validateUrl(value: string) {
        return (isStringValid(value) && /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value));
      }

      function menuItemIsCorrect(menuItem: any) {
        return (menuItem.includes('link') && 
                  validateUrl(menuItem.link) && 
                  menuItem.includes('imgSrc') && 
                  validateUrl(menuItem.imgSrc) && 
                  menuItem.includes('imgAlt') && 
                  isStringValid(menuItem.imgAlt) && 
                  menuItem.includes('itemContent') && 
                  isStringValid(menuItem.itemContent)
                );
      }

      function isMenuBlockValid(menuBlock: any) {
        if(!(isArray(menuBlock))) {
          throw 'Dados do componente Menu Apps com estrutura incorreta: "' + menuBlock + '" deve ser um array.';
        } else {
          for(let menuItem of menuData.mostUsed) {
            if(!(isObject(menuItem.constructor))) {
              throw 'Dados do componente Menu Apps com estrutura incorreta: cada item do menu deve ser um objeto literal.';;
            } else {
              if(Object.keys(menuItem).length === 0) {
                throw 'Dados do componente Menu Apps com estrutura incorreta: um item do menu não possui dados.';
              } else if(!(menuItemIsCorrect(menuItem))) {
                throw 'Dados do componente Menu Apps com estrutura incorreta: o item do menu não possui todos dados necessários.';
              }
            }
          }
        }
      }

      function checkMenuItemsJson() {
        if(!(isObject(menuData))) {
          throw 'Dados do componente Menu Apps com estrutura incorreta: "menuData" deve ser um objeto literal.';
        } else if(Object.keys(menuData).length === 0) {
          throw 'Dados do componente Menu Apps com estrutura incorreta: o objeto "menuData" está vazio.';
        } else {
          if(menuData.mostUsed) {
            try {
              isMenuBlockValid(menuData.mostUsed)
            } catch (e) {
              throw e;
            }
          }
          if(menuData.common) {
            try {
              isMenuBlockValid(menuData.common)
            } catch (e) {
              throw e;
            }
          } 
          if(menuData.partners) {
            try {
              isMenuBlockValid(menuData.partners)
            } catch (e) {
              throw e;
            }
          }
        }
      }

      try {
        checkMenuItemsJson();
      }
      catch (e) {
        console.error('Verifique o formato do objeto de dados do menu apps. Para mais informações, consulte a ajuda do Macaw para o componente Menu Apps');
        console.error(e);
      }

      if(menuData.mostUsed) {
        mostUsedItems = menuData.mostUsed.map((item) =>
          <m-menu-apps-item link={item.link} img-src={item.imgSrc} img-alt={item.imgAlt}>{item.itemContent}</m-menu-apps-item>
        )
      }

      if(menuData.common) {
        commonItems = menuData.common.map((item) =>
          <m-menu-apps-item link={item.link} img-src={item.imgSrc} img-alt={item.imgAlt}>{item.itemContent}</m-menu-apps-item>
        )
      }

      if(menuData.partners) {
        partnersItems = menuData.partners.map((item) =>
          <m-menu-apps-item link={item.link} img-src={item.imgSrc} img-alt={item.imgAlt}>{item.itemContent}</m-menu-apps-item>
        )
      }
    }

    return (
      <div class={this.type === 'grid' ? 'm-menu-apps m-menu-apps-grid' : 'm-menu-apps m-menu-apps-list'}>
        <m-dropdown type="text" label={this.label} show-label="false" icon="menu-apps-icon" icon-type="core" show-chevron="false">
          {mostUsedItems ? mostUsedItems : null}
          {mostUsedItems ? <hr /> : null}
          {commonItems ? commonItems : null}
          {partnersItems ? <h3>Sistemas Parceiros</h3> : null}
          {partnersItems ? partnersItems : null}
          {!menuData ? <slot /> : null}
        </m-dropdown>
      </div>
    )
  }
}
