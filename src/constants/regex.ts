export const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const USERNAME_VALIDATION_REGEX = /^[a-zA-Z0-9._-]{3,}$/;
export const NAME_VALIDATION_REGEX = /^[a-zA-Z0-9._-]{3,}$/;
export const PHONE_VALIDATION_REGEX =
  /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;
export const URL_VALIDATION_REGEX =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
export const ZIP_CODE_VALIDATION_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;
export const DATE_VALIDATION_REGEX = /^\d{4}-\d{2}-\d{2}$/;
export const TIME_VALIDATION_REGEX = /^(0[0-9]|1[0-2]):[0-5][0-9] ?([AP]M)?$/;
export const CURRENCY_VALIDATION_REGEX =
  /^\$?(\d{1,3}(,\d{3})*|\d+)(\.\d{2})?$/;
export const IP_ADDRESS_VALIDATION_REGEX =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
export const UUID_VALIDATION_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
