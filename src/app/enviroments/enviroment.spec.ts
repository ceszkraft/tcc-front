import { BASEURL } from './enviroment';

describe('enviroment pool test', () => {

  const url: string = 'http://localhost:';
  const port: number = 8080;
  const endpoint0: string = 'person';
  const endpoint1: string = 'status';

  it('Should validate BASEURL to be truthy', () => {

    expect(BASEURL.baseUrl).toBeTruthy();

  });

  it('Should validate BASEURL toEqual http://localhost:8080', () => {

    expect(BASEURL.baseUrl).toEqual(`${url}${port}`);

  });

  it('Should validate BASEURL.person to contain http://localhost:8080/person', () => {

    expect(BASEURL.person).toEqual(`http://localhost:${port}/${endpoint0}`);

  });

  it('Should validate BASEURL.status to contain http://localhost:8080/status', () => {

    expect(BASEURL.status).toEqual(`http://localhost:${port}/${endpoint1}`);

  });

});
