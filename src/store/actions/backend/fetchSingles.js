export const FETCH_SINGLES_FROM_BACKEND = 'FETCH_SINGLES_FROM_BACKEND';

export function fetchSingles() {
  return {
    type: FETCH_SINGLES_FROM_BACKEND,
    payload: {
      request:{
        url:'/api/singles'
      }
    }
  }
}