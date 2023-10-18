import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_acedh3 } from './_work_id@string';
import type { Methods as Methods_dyd3fu } from './_work_id@string/comments';
import type { Methods as Methods_17qbehw } from './_work_id@string/comments/_comment_id@string';
import type { Methods as Methods_1wmcahg } from './_work_id@string/favorite';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/works';
  const PATH1 = '/comments';
  const PATH2 = '/favorite';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _work_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        comments: {
          _comment_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              /**
               * @returns Successful Response
               */
              get: (option?: { query?: Methods_17qbehw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_17qbehw['get']['resBody'], BasicHeaders, Methods_17qbehw['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { query?: Methods_17qbehw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_17qbehw['get']['resBody'], BasicHeaders, Methods_17qbehw['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_17qbehw['delete']['resBody'], BasicHeaders, Methods_17qbehw['delete']['status']>(prefix, prefix2, DELETE, option).json(),
              /**
               * @returns Successful Response
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_17qbehw['delete']['resBody'], BasicHeaders, Methods_17qbehw['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_17qbehw['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            };
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_dyd3fu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_dyd3fu['get']['resBody'], BasicHeaders, Methods_dyd3fu['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_dyd3fu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_dyd3fu['get']['resBody'], BasicHeaders, Methods_dyd3fu['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_dyd3fu['post']['reqBody'], query?: Methods_dyd3fu['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_dyd3fu['post']['resBody'], BasicHeaders, Methods_dyd3fu['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_dyd3fu['post']['reqBody'], query?: Methods_dyd3fu['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_dyd3fu['post']['resBody'], BasicHeaders, Methods_dyd3fu['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_dyd3fu['get']['query'] } | { method: 'post'; query: Methods_dyd3fu['post']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        favorite: {
          /**
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1wmcahg['get']['resBody'], BasicHeaders, Methods_1wmcahg['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1wmcahg['get']['resBody'], BasicHeaders, Methods_1wmcahg['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1wmcahg['post']['resBody'], BasicHeaders, Methods_1wmcahg['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1wmcahg['post']['resBody'], BasicHeaders, Methods_1wmcahg['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1wmcahg['delete']['resBody'], BasicHeaders, Methods_1wmcahg['delete']['status']>(prefix, `${prefix0}${PATH2}`, DELETE, option).json(),
          /**
           * @returns Successful Response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1wmcahg['delete']['resBody'], BasicHeaders, Methods_1wmcahg['delete']['status']>(prefix, `${prefix0}${PATH2}`, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        /**
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_acedh3['get']['resBody'], BasicHeaders, Methods_acedh3['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_acedh3['get']['resBody'], BasicHeaders, Methods_acedh3['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        put: (option: { body: Methods_acedh3['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_acedh3['put']['resBody'], BasicHeaders, Methods_acedh3['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * @returns Successful Response
         */
        $put: (option: { body: Methods_acedh3['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_acedh3['put']['resBody'], BasicHeaders, Methods_acedh3['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_acedh3['delete']['resBody'], BasicHeaders, Methods_acedh3['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * @returns Successful Response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_acedh3['delete']['resBody'], BasicHeaders, Methods_acedh3['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
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
    post: (option: { body: Methods_by08hd['post']['reqBody'], query: Methods_by08hd['post']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @returns Successful Response
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], query: Methods_by08hd['post']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | { method: 'post'; query: Methods_by08hd['post']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
