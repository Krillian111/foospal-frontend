export const SET_PASSWORD = 'SET_PASSWORD';

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password,
  };
}
