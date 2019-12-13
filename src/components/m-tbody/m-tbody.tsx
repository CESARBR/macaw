import { Component, Prop, h, Host} from '@stencil/core';

@Component({
  tag: 'm-tbody',
  styleUrl: 'm-tbody.scss',
  shadow: true,
})
export class MTbody {
  /**
   * Table Body
   */
  @Prop() body: [];

  /**
   * Table Header
   */
  @Prop() header: [];



  render() {
    return (
      <Host>
        {this.body.map((item: {}) =>
          <tr class='m-tbody__row'>
            {this.header.map(({key}) =>
              <td class='m-tbody__cell'>{item[key]}</td>
            )}
          </tr>
        )}
      </Host>
    );
  }
}
