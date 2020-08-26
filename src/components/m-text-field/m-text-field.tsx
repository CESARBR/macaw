import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'm-text-field',
    styleUrl: 'm-text-field.scss',
    shadow: false,
  })

  export class MTextField {
  
  /**
   * The input type
   */
  @Prop({ attribute: "type"}) type: string = "text";

  /**
   * The input type
   */
  @Prop({ attribute: "placeholder"}) placeholder: string = "This is a placeholder";

  /**
   * If the input is disabled for interactions
   */
  @Prop({ mutable: true }) disabled: boolean = false;

  /**
   * If the input is required
   */
  @Prop({ mutable: true, reflect: false }) valid: boolean = true;

  render() {

    if (this.type == "search") {
      return (
        <div class="m-text-field__wrapper">
          <input type={this.type} placeholder={this.placeholder} class="m-text-field" disabled={this.disabled}/>
          <m-icon type="bold" name="magnifier" class="m-text-field__icon"></m-icon>
        </div>
      )

    } else {
      return (
        <input class={'m-text-field ' + (!this.valid ? 'm-text-field__not-valid' : "  ")} type={this.type} placeholder={this.placeholder} disabled={this.disabled} />
      );
    }
  }
}
