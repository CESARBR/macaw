/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MButton {
    /**
    * Disable button
    */
    'disabled': boolean;
    /**
    * Method showPrompt
    */
    'myTip': () => Promise<string>;
    /**
    * Button tooltip
    */
    'tooltip': string;
  }
  interface MFooter {
    /**
    * Footer class
    */
    'footerType': string;
  }
  interface MTable {
    /**
    * Data Table
    */
    'data': [];
    /**
    * Table Headers
    */
    'dataHeaders': [];
    /**
    * Table Strip
    */
    'strip': boolean;
  }
  interface MTbody {
    /**
    * Table Body
    */
    'body': [];
    /**
    * Table Header
    */
    'header': [];
  }
  interface MThead {
    /**
    * Table Header
    */
    'header': [];
  }
}

declare global {


  interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {}
  var HTMLMButtonElement: {
    prototype: HTMLMButtonElement;
    new (): HTMLMButtonElement;
  };

  interface HTMLMFooterElement extends Components.MFooter, HTMLStencilElement {}
  var HTMLMFooterElement: {
    prototype: HTMLMFooterElement;
    new (): HTMLMFooterElement;
  };

  interface HTMLMTableElement extends Components.MTable, HTMLStencilElement {}
  var HTMLMTableElement: {
    prototype: HTMLMTableElement;
    new (): HTMLMTableElement;
  };

  interface HTMLMTbodyElement extends Components.MTbody, HTMLStencilElement {}
  var HTMLMTbodyElement: {
    prototype: HTMLMTbodyElement;
    new (): HTMLMTbodyElement;
  };

  interface HTMLMTheadElement extends Components.MThead, HTMLStencilElement {}
  var HTMLMTheadElement: {
    prototype: HTMLMTheadElement;
    new (): HTMLMTheadElement;
  };
  interface HTMLElementTagNameMap {
    'm-button': HTMLMButtonElement;
    'm-footer': HTMLMFooterElement;
    'm-table': HTMLMTableElement;
    'm-tbody': HTMLMTbodyElement;
    'm-thead': HTMLMTheadElement;
  }
}

declare namespace LocalJSX {
  interface MButton {
    /**
    * Disable button
    */
    'disabled'?: boolean;
    /**
    * Button tooltip
    */
    'tooltip'?: string;
  }
  interface MFooter {
    /**
    * Footer class
    */
    'footerType'?: string;
  }
  interface MTable {
    /**
    * Data Table
    */
    'data'?: [];
    /**
    * Table Headers
    */
    'dataHeaders'?: [];
    /**
    * Table Strip
    */
    'strip'?: boolean;
  }
  interface MTbody {
    /**
    * Table Body
    */
    'body'?: [];
    /**
    * Table Header
    */
    'header'?: [];
  }
  interface MThead {
    /**
    * Table Header
    */
    'header'?: [];
  }

  interface IntrinsicElements {
    'm-button': MButton;
    'm-footer': MFooter;
    'm-table': MTable;
    'm-tbody': MTbody;
    'm-thead': MThead;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'm-button': LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
      'm-footer': LocalJSX.MFooter & JSXBase.HTMLAttributes<HTMLMFooterElement>;
      'm-table': LocalJSX.MTable & JSXBase.HTMLAttributes<HTMLMTableElement>;
      'm-tbody': LocalJSX.MTbody & JSXBase.HTMLAttributes<HTMLMTbodyElement>;
      'm-thead': LocalJSX.MThead & JSXBase.HTMLAttributes<HTMLMTheadElement>;
    }
  }
}


