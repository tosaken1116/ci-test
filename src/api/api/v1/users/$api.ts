import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1r9dgbp } from './_user_id@string';
import type { Methods as Methods_zm66de } from './_user_id@string/favorite';
import type { Methods as Methods_17xidm8 } from './_user_id@string/works';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/users';
  const PATH1 = '/favorite';
  const PATH2 = '/works';
  const GET = 'GET';

  return {
    _user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        favorite: {
          /**
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_zm66de['get']['resBody'], BasicHeaders, Methods_zm66de['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_zm66de['get']['resBody'], BasicHeaders, Methods_zm66de['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        works: {
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_17xidm8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_17xidm8['get']['resBody'], BasicHeaders, Methods_17xidm8['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_17xidm8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_17xidm8['get']['resBody'], BasicHeaders, Methods_17xidm8['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_17xidm8['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1r9dgbp['get']['resBody'], BasicHeaders, Methods_1r9dgbp['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1r9dgbp['get']['resBody'], BasicHeaders, Methods_1r9dgbp['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @returns Successful Response
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns Successful Response
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
