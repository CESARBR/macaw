import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'm-avatar',
  styleUrl: 'm-avatar.scss',
  shadow: true,
})
export class Avatar {

  /**
   * Image URL or user name.
   */
  @Prop({ attribute: 'data-source' }) dataSource: string;

  /**
   * Alternative description.
   */
  @Prop({ attribute: 'data-alt' }) dataAlt: string;

  /**
   * Check if a given URL is valid
   * @param {String} str
   * @returns {Boolean}
   */
  validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  /**
   * Get initials of first and last names from a given string
   * @param {String} str
   * @returns {String}
   */
  getInitials (string) {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

  render() {
    if(this.validURL(this.dataSource) && this.dataSource.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        return (
          <img class="m-avatar__image" src={this.dataSource} alt={this.dataAlt} />
        )
    } else {
      /* let initials = this.dataSource.match(/\b\w/g) || [];
      initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase(); */
      return (
        <span class="m-avatar__initials">{this.getInitials(this.dataSource)}</span>
      )
    }
  }
}
