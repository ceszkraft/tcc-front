export const environment = {
  production: false,
}

let url: string = 'http://localhost:'
let port: number = 8080
let endpoint0: string = 'person'
let endpoint1: string = 'status'

export const BASEURL = {
  baseUrl: `${url}${port}`,
  person: `${url}${port}/${endpoint0}`,
  status: `${url}${port}/${endpoint1}`
};
