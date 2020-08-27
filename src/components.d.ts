/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MAvatar {
        /**
          * Alternative description.
         */
        "altDesc": string;
        /**
          * Image URL or user name.
         */
        "source": string;
    }
    interface MButton {
        /**
          * Disable button
         */
        "disabled": boolean;
        /**
          * Method showPrompt
         */
        "myTip": () => Promise<string>;
        /**
          * Button tooltip
         */
        "tooltip": string;
    }
    interface MFooter {
        /**
          * Footer class
         */
        "footerType": string;
    }
    interface MHeader {
        /**
          * /**  The logged user's name
         */
        "avatarName": string;
        /**
          * /**  The logged user's avatar image URL or user name.
         */
        "avatarSource": string;
        /**
          * Brand name
         */
        "brandName": string;
    }
    interface MIcon {
        /**
          * The icon name
         */
        "name": string;
        /**
          * Icon tooltip
         */
        "tooltip": string;
    }
    interface MTable {
        /**
          * Data Table
         */
        "data": [];
        /**
          * Table Headers
         */
        "dataHeaders": [];
        /**
          * Table Strip
         */
        "strip": boolean;
    }
    interface MTbody {
        /**
          * Table Body
         */
        "body": [];
        /**
          * Table Header
         */
        "header": [];
    }
    interface MTextField {
        /**
          * Disable field
         */
        "disabled": boolean;
        /**
          * Field placeholder
         */
        "placeholder": string;
        /**
          * Type field
         */
        "type": string;
        /**
          * Field validation status
         */
        "valid": boolean;
        /**
          * Field value
         */
        "value": string;
    }
    interface MThead {
        /**
          * Table Header
         */
        "header": [];
    }
}
declare global {
    interface HTMLMAvatarElement extends Components.MAvatar, HTMLStencilElement {
    }
    var HTMLMAvatarElement: {
        prototype: HTMLMAvatarElement;
        new (): HTMLMAvatarElement;
    };
    interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {
    }
    var HTMLMButtonElement: {
        prototype: HTMLMButtonElement;
        new (): HTMLMButtonElement;
    };
    interface HTMLMFooterElement extends Components.MFooter, HTMLStencilElement {
    }
    var HTMLMFooterElement: {
        prototype: HTMLMFooterElement;
        new (): HTMLMFooterElement;
    };
    interface HTMLMHeaderElement extends Components.MHeader, HTMLStencilElement {
    }
    var HTMLMHeaderElement: {
        prototype: HTMLMHeaderElement;
        new (): HTMLMHeaderElement;
    };
    interface HTMLMIconElement extends Components.MIcon, HTMLStencilElement {
    }
    var HTMLMIconElement: {
        prototype: HTMLMIconElement;
        new (): HTMLMIconElement;
    };
    interface HTMLMTableElement extends Components.MTable, HTMLStencilElement {
    }
    var HTMLMTableElement: {
        prototype: HTMLMTableElement;
        new (): HTMLMTableElement;
    };
    interface HTMLMTbodyElement extends Components.MTbody, HTMLStencilElement {
    }
    var HTMLMTbodyElement: {
        prototype: HTMLMTbodyElement;
        new (): HTMLMTbodyElement;
    };
    interface HTMLMTextFieldElement extends Components.MTextField, HTMLStencilElement {
    }
    var HTMLMTextFieldElement: {
        prototype: HTMLMTextFieldElement;
        new (): HTMLMTextFieldElement;
    };
    interface HTMLMTheadElement extends Components.MThead, HTMLStencilElement {
    }
    var HTMLMTheadElement: {
        prototype: HTMLMTheadElement;
        new (): HTMLMTheadElement;
    };
    interface HTMLElementTagNameMap {
        "m-avatar": HTMLMAvatarElement;
        "m-button": HTMLMButtonElement;
        "m-footer": HTMLMFooterElement;
        "m-header": HTMLMHeaderElement;
        "m-icon": HTMLMIconElement;
        "m-table": HTMLMTableElement;
        "m-tbody": HTMLMTbodyElement;
        "m-text-field": HTMLMTextFieldElement;
        "m-thead": HTMLMTheadElement;
    }
}
declare namespace LocalJSX {
    interface MAvatar {
        /**
          * Alternative description.
         */
        "altDesc"?: string;
        /**
          * Image URL or user name.
         */
        "source"?: string;
    }
    interface MButton {
        /**
          * Disable button
         */
        "disabled"?: boolean;
        /**
          * Button tooltip
         */
        "tooltip"?: string;
    }
    interface MFooter {
        /**
          * Footer class
         */
        "footerType"?: string;
    }
    interface MHeader {
        /**
          * /**  The logged user's name
         */
        "avatarName"?: string;
        /**
          * /**  The logged user's avatar image URL or user name.
         */
        "avatarSource"?: string;
        /**
          * Brand name
         */
        "brandName"?: string;
    }
    interface MIcon {
        /**
          * The icon name
         */
        "name"?: string;
        /**
          * Icon tooltip
         */
        "tooltip"?: string;
    }
    interface MTable {
        /**
          * Data Table
         */
        "data"?: [];
        /**
          * Table Headers
         */
        "dataHeaders"?: [];
        /**
          * Table Strip
         */
        "strip"?: boolean;
    }
    interface MTbody {
        /**
          * Table Body
         */
        "body"?: [];
        /**
          * Table Header
         */
        "header"?: [];
    }
    interface MTextField {
        /**
          * Disable field
         */
        "disabled"?: boolean;
        /**
          * Field placeholder
         */
        "placeholder"?: string;
        /**
          * Type field
         */
        "type"?: string;
        /**
          * Field validation status
         */
        "valid"?: boolean;
        /**
          * Field value
         */
        "value"?: string;
    }
    interface MThead {
        /**
          * Table Header
         */
        "header"?: [];
    }
    interface IntrinsicElements {
        "m-avatar": MAvatar;
        "m-button": MButton;
        "m-footer": MFooter;
        "m-header": MHeader;
        "m-icon": MIcon;
        "m-table": MTable;
        "m-tbody": MTbody;
        "m-text-field": MTextField;
        "m-thead": MThead;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "m-avatar": LocalJSX.MAvatar & JSXBase.HTMLAttributes<HTMLMAvatarElement>;
            "m-button": LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
            "m-footer": LocalJSX.MFooter & JSXBase.HTMLAttributes<HTMLMFooterElement>;
            "m-header": LocalJSX.MHeader & JSXBase.HTMLAttributes<HTMLMHeaderElement>;
            "m-icon": LocalJSX.MIcon & JSXBase.HTMLAttributes<HTMLMIconElement>;
            "m-table": LocalJSX.MTable & JSXBase.HTMLAttributes<HTMLMTableElement>;
            "m-tbody": LocalJSX.MTbody & JSXBase.HTMLAttributes<HTMLMTbodyElement>;
            "m-text-field": LocalJSX.MTextField & JSXBase.HTMLAttributes<HTMLMTextFieldElement>;
            "m-thead": LocalJSX.MThead & JSXBase.HTMLAttributes<HTMLMTheadElement>;
        }
    }
}
