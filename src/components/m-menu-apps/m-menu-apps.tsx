import { Component, h, Prop, State } from '@stencil/core';
import { isObject, isArray, isStringAndNotEmpty, validURL } from '../../utils/utils';

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
      function menuItemIsComplete(menuItem: any) {
        let AttributeNames = Object.keys(menuItem);

        return (AttributeNames.includes('link') && 
                validURL(menuItem.link) && 
                AttributeNames.includes('imgSrc') && 
                validURL(menuItem.imgSrc) && 
                AttributeNames.includes('imgAlt') && 
                isStringAndNotEmpty(menuItem.imgAlt) && 
                AttributeNames.includes('itemContent') && 
                isStringAndNotEmpty(menuItem.itemContent)
              );
      }

      function checkMenuBlock(menuBlock: any) {
        if(!(isArray(menuBlock))) {
          throw 'Dados do componente Menu Apps com estrutura incorreta: "' + menuBlock + '" deve ser um array.';
        } else {
          for(let menuItem of menuBlock) {
            if(!(isObject(menuItem))) {
              throw 'Dados do componente Menu Apps com estrutura incorreta: cada item do menu deve ser um objeto literal.';;
            } else {
              if(Object.keys(menuItem).length === 0) {
                throw 'Dados do componente Menu Apps com estrutura incorreta: um item do menu não possui dados.';
              } else if(!(menuItemIsComplete(menuItem))) {
                throw 'Dados do componente Menu Apps com estrutura incorreta: o item do menu não possui todos dados necessários.';
              }
            }
          }
        }
      }

      function checkMenu() {
        let menuBlockNames: Array<string>;

        if(!(isObject(menuData))) {
          throw 'Dados do componente Menu Apps com estrutura incorreta: "menuData" deve ser um objeto literal.';
        } else if(Object.keys(menuData).length === 0) {
          throw 'Dados do componente Menu Apps com estrutura incorreta: o objeto "menuData" está vazio.';
        } else {
          menuBlockNames = Object.keys(menuData);
          
          if(menuBlockNames.includes('mostUsed') || menuBlockNames.includes('common') || menuBlockNames.includes('partners')) {
            for(let menuBlockName in menuData) {
              try {
                checkMenuBlock(menuData[menuBlockName])
              } catch (e) {
                throw e;
              }
            }
          }
        }
      }

      try {
        checkMenu();
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
