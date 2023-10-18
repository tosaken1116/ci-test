import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1tjc6t0 } from './_tag_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/tags';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _tag_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1tjc6t0['get']['resBody'], BasicHeaders, Methods_1tjc6t0['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1tjc6t0['get']['resBody'], BasicHeaders, Methods_1tjc6t0['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        put: (option: { body: Methods_1tjc6t0['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1tjc6t0['put']['resBody'], BasicHeaders, Methods_1tjc6t0['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns Successful Response
         */
        $put: (option: { body: Methods_1tjc6t0['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1tjc6t0['put']['resBody'], BasicHeaders, Methods_1tjc6t0['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1tjc6t0['delete']['resBody'], BasicHeaders, Methods_1tjc6t0['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * @returns Successful Response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1tjc6t0['delete']['resBody'], BasicHeaders, Methods_1tjc6t0['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
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
    /**
     * @returns Successful Response
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns Successful Response
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
