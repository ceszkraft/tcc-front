export const environment = {
  production: false
};

const url: string = 'http://localhost:';
const port: number = 8080;
const endpoint0: string = 'person';
const endpoint1: string = 'status';

export const BASEURL = {
  baseUrl: `${url}${port}`,
  person: `${url}${port}/${endpoint0}`,
  status: `${url}${port}/${endpoint1}`
};
