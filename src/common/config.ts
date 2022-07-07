export const baseUrl: string = 'http://localhost:3000/users';

export const defaultSafeAreaEdges: Array<string> = ['top', 'left', 'right'];

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const PASSWORD_REGEX =
  /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]).{6,40})/;

export const CONFIRMATION_REGEX = /\d/g;

export const VALIDATION_CODE_LENGTH = 6;
