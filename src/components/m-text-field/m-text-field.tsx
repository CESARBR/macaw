import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-text-field',
  styleUrl: 'm-text-field.scss',
  shadow: false
})
export class TextField {

  /**
   * Type field
   */
  @Prop({ reflect: true }) type: string = 'text';

  /**
   * Field placeholder
   */
  @Prop() placeholder: string;

  /**
   * Field value
   */
  @Prop({ mutable: true, reflect: true }) value: string;

  /**
   * Disable field
   */
  @Prop({ mutable: true }) disabled: boolean = false;

  /**
   * Field validation status
   */
  @Prop({ mutable: true }) valid: boolean = true;


  render() {
    return (
      <Host class='m-text-field'>
        <input
          class={
            `m-text-field__field
            ${!this.valid
              ? 'm-text-field__field--not-valid'
              : ''
            }
            ${this.type === 'search'
                ? 'm-text-field__field--search'
                : ''
            }`
          }
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
        />
        {this.type === 'search'
          ? <m-icon name="magnifier" type="bold" class="m-text-field__icon"></m-icon>
          : ''
        }
      </Host>
    );
  }

}
