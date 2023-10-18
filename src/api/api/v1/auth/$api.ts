import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_i5cbq6 } from './discord';
import type { Methods as Methods_1a5j3r0 } from './discord/callback';
import type { Methods as Methods_1uz1w0l } from './sign_up';
import type { Methods as Methods_1pns1yn } from './token';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/auth/discord';
  const PATH1 = '/api/v1/auth/discord/callback';
  const PATH2 = '/api/v1/auth/sign_up';
  const PATH3 = '/api/v1/auth/token';
  const GET = 'GET';
  const POST = 'POST';

  return {
    discord: {
      callback: {
        /**
         * @returns Successful Response
         */
        get: (option?: { query?: Methods_1a5j3r0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1a5j3r0['get']['resBody'], BasicHeaders, Methods_1a5j3r0['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { query?: Methods_1a5j3r0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1a5j3r0['get']['resBody'], BasicHeaders, Methods_1a5j3r0['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1a5j3r0['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_i5cbq6['get']['status']>(prefix, PATH0, GET, option).send(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_i5cbq6['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    sign_up: {
      /**
       * @returns Successful Response
       */
      post: (option: { body: Methods_1uz1w0l['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1uz1w0l['post']['resBody'], BasicHeaders, Methods_1uz1w0l['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @returns Successful Response
       */
      $post: (option: { body: Methods_1uz1w0l['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1uz1w0l['post']['resBody'], BasicHeaders, Methods_1uz1w0l['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    token: {
      /**
       * @returns Successful Response
       */
      post: (option: { body: Methods_1pns1yn['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pns1yn['post']['resBody'], BasicHeaders, Methods_1pns1yn['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * @returns Successful Response
       */
      $post: (option: { body: Methods_1pns1yn['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pns1yn['post']['resBody'], BasicHeaders, Methods_1pns1yn['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
