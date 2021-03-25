import { nanoid } from 'nanoid';

// function below to be removed
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export const imageExtensions = /\.(jpeg|jpg|gif|png)$/;

/**
 * Check if a given URL is valid.
 */
export function validURL(str: string): boolean {
  let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

/**
 * Generates unique ID property from nanoid library.
 */
export function setUniqueID(): string {
  return nanoid();
}

/**
 * Verify if argument passed is Object.
 */
export function isObject(objectItem: any): boolean {
  return objectItem.constructor === Object;
}

/**
 * Verify if argument passed is Array.
 */
export function isArray(arrayItem: any): boolean {
  return arrayItem instanceof Array;
}

/**
 * Verify if argument passed is String and contains value.
 */
export function isStringAndNotEmpty(stringValue: any): boolean {
  return (typeof stringValue === 'string' && stringValue !== '');
}