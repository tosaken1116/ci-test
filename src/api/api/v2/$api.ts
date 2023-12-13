import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_7zdwk } from './works';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v2/works';
  const GET = 'GET';

  return {
    works: {
      /**
       * @returns Successful Response
       */
      get: (option?: { query?: Methods_7zdwk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_7zdwk['get']['resBody'], BasicHeaders, Methods_7zdwk['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option?: { query?: Methods_7zdwk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_7zdwk['get']['resBody'], BasicHeaders, Methods_7zdwk['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7zdwk['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
