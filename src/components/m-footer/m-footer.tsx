import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'm-footer',
  styleUrl: 'm-footer.scss',
  shadow: true,
})
export class Footer {

  /**
   * Footer class
   */
  @Prop({ attribute: 'type' }) footerType: string;

  render() {
    const time = new Date().getFullYear();

    return (
    <footer class={'m-footer ' + (this.footerType === 'block' ? 'm-footer--block' : this.footerType === 'line' ? 'm-footer--line' : '')}><small class="footer__copyright">© { time } CESAR. All rights reserved.</small><slot></slot></footer>
    );
  }
}
