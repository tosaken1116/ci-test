import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_17svy13 } from './assets';
import type { Methods as Methods_iwmdxy } from './assets/_asset_id@string';
import type { Methods as Methods_nxcu13 } from './auth/discord';
import type { Methods as Methods_12zp75v } from './auth/discord/callback';
import type { Methods as Methods_1escmss } from './auth/sign_up';
import type { Methods as Methods_13j3396 } from './auth/token';
import type { Methods as Methods_rxnz0j } from './tags';
import type { Methods as Methods_158x556 } from './tags/_tag_id@string';
import type { Methods as Methods_1xhiioa } from './users';
import type { Methods as Methods_1m2ih5q } from './users/_user_id@string';
import type { Methods as Methods_13iuyh7 } from './users/_user_id@string/favorite';
import type { Methods as Methods_17xsqfr } from './users/_user_id@string/works';
import type { Methods as Methods_7zdwk } from './works';
import type { Methods as Methods_1amyma } from './works/_work_id@string';
import type { Methods as Methods_feurbt } from './works/_work_id@string/comments';
import type { Methods as Methods_1x4lck1 } from './works/_work_id@string/comments/_comment_id@string';
import type { Methods as Methods_qvcfp3 } from './works/_work_id@string/favorite';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/assets';
  const PATH1 = '/api/v1/auth/discord';
  const PATH2 = '/api/v1/auth/discord/callback';
  const PATH3 = '/api/v1/auth/sign_up';
  const PATH4 = '/api/v1/auth/token';
  const PATH5 = '/api/v1/tags';
  const PATH6 = '/api/v1/users';
  const PATH7 = '/favorite';
  const PATH8 = '/works';
  const PATH9 = '/api/v1/works';
  const PATH10 = '/comments';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    assets: {
      _asset_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns Successful Response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_iwmdxy['delete']['resBody'], BasicHeaders, Methods_iwmdxy['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns Successful Response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_iwmdxy['delete']['resBody'], BasicHeaders, Methods_iwmdxy['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Successful Response
       */
      post: (option: { body: Methods_17svy13['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17svy13['post']['resBody'], BasicHeaders, Methods_17svy13['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * @returns Successful Response
       */
      $post: (option: { body: Methods_17svy13['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_17svy13['post']['resBody'], BasicHeaders, Methods_17svy13['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    auth: {
      discord: {
        callback: {
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_12zp75v['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12zp75v['get']['resBody'], BasicHeaders, Methods_12zp75v['get']['status']>(prefix, PATH2, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_12zp75v['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12zp75v['get']['resBody'], BasicHeaders, Methods_12zp75v['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_12zp75v['get']['query'] } | undefined) =>
            `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_nxcu13['get']['status']>(prefix, PATH1, GET, option).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_nxcu13['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      sign_up: {
        /**
         * @returns Successful Response
         */
        post: (option: { body: Methods_1escmss['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1escmss['post']['resBody'], BasicHeaders, Methods_1escmss['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * @returns Successful Response
         */
        $post: (option: { body: Methods_1escmss['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1escmss['post']['resBody'], BasicHeaders, Methods_1escmss['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      token: {
        /**
         * @returns Successful Response
         */
        post: (option: { body: Methods_13j3396['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_13j3396['post']['resBody'], BasicHeaders, Methods_13j3396['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * @returns Successful Response
         */
        $post: (option: { body: Methods_13j3396['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_13j3396['post']['resBody'], BasicHeaders, Methods_13j3396['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
    },
    tags: {
      _tag_id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_158x556['get']['resBody'], BasicHeaders, Methods_158x556['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_158x556['get']['resBody'], BasicHeaders, Methods_158x556['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          put: (option: { body: Methods_158x556['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_158x556['put']['resBody'], BasicHeaders, Methods_158x556['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns Successful Response
           */
          $put: (option: { body: Methods_158x556['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_158x556['put']['resBody'], BasicHeaders, Methods_158x556['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_158x556['delete']['resBody'], BasicHeaders, Methods_158x556['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns Successful Response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_158x556['delete']['resBody'], BasicHeaders, Methods_158x556['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Successful Response
       */
      get: (option?: { query?: Methods_rxnz0j['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rxnz0j['get']['resBody'], BasicHeaders, Methods_rxnz0j['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option?: { query?: Methods_rxnz0j['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rxnz0j['get']['resBody'], BasicHeaders, Methods_rxnz0j['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * @returns Successful Response
       */
      post: (option: { body: Methods_rxnz0j['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rxnz0j['post']['resBody'], BasicHeaders, Methods_rxnz0j['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * @returns Successful Response
       */
      $post: (option: { body: Methods_rxnz0j['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rxnz0j['post']['resBody'], BasicHeaders, Methods_rxnz0j['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rxnz0j['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          favorite: {
            /**
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_13iuyh7['get']['resBody'], BasicHeaders, Methods_13iuyh7['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_13iuyh7['get']['resBody'], BasicHeaders, Methods_13iuyh7['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`,
          },
          works: {
            /**
             * @returns Successful Response
             */
            get: (option?: { query?: Methods_17xsqfr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_17xsqfr['get']['resBody'], BasicHeaders, Methods_17xsqfr['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { query?: Methods_17xsqfr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_17xsqfr['get']['resBody'], BasicHeaders, Methods_17xsqfr['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_17xsqfr['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1m2ih5q['get']['resBody'], BasicHeaders, Methods_1m2ih5q['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1m2ih5q['get']['resBody'], BasicHeaders, Methods_1m2ih5q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Successful Response
       */
      get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option?: { query?: Methods_1xhiioa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa['get']['resBody'], BasicHeaders, Methods_1xhiioa['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xhiioa['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    works: {
      _work_id: (val1: string) => {
        const prefix1 = `${PATH9}/${val1}`;

        return {
          comments: {
            _comment_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH10}/${val3}`;

              return {
                /**
                 * @returns Successful Response
                 */
                get: (option?: { query?: Methods_1x4lck1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1x4lck1['get']['resBody'], BasicHeaders, Methods_1x4lck1['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns Successful Response
                 */
                $get: (option?: { query?: Methods_1x4lck1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1x4lck1['get']['resBody'], BasicHeaders, Methods_1x4lck1['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * @returns Successful Response
                 */
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_1x4lck1['delete']['resBody'], BasicHeaders, Methods_1x4lck1['delete']['status']>(prefix, prefix3, DELETE, option).json(),
                /**
                 * @returns Successful Response
                 */
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_1x4lck1['delete']['resBody'], BasicHeaders, Methods_1x4lck1['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_1x4lck1['get']['query'] } | undefined) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              };
            },
            /**
             * @returns Successful Response
             */
            get: (option?: { query?: Methods_feurbt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_feurbt['get']['resBody'], BasicHeaders, Methods_feurbt['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { query?: Methods_feurbt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_feurbt['get']['resBody'], BasicHeaders, Methods_feurbt['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            post: (option: { body: Methods_feurbt['post']['reqBody'], query?: Methods_feurbt['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<Methods_feurbt['post']['resBody'], BasicHeaders, Methods_feurbt['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json(),
            /**
             * @returns Successful Response
             */
            $post: (option: { body: Methods_feurbt['post']['reqBody'], query?: Methods_feurbt['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<Methods_feurbt['post']['resBody'], BasicHeaders, Methods_feurbt['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_feurbt['get']['query'] } | { method: 'post'; query: Methods_feurbt['post']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          favorite: {
            /**
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qvcfp3['get']['resBody'], BasicHeaders, Methods_qvcfp3['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qvcfp3['get']['resBody'], BasicHeaders, Methods_qvcfp3['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qvcfp3['post']['resBody'], BasicHeaders, Methods_qvcfp3['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).json(),
            /**
             * @returns Successful Response
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qvcfp3['post']['resBody'], BasicHeaders, Methods_qvcfp3['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qvcfp3['delete']['resBody'], BasicHeaders, Methods_qvcfp3['delete']['status']>(prefix, `${prefix1}${PATH7}`, DELETE, option).json(),
            /**
             * @returns Successful Response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qvcfp3['delete']['resBody'], BasicHeaders, Methods_qvcfp3['delete']['status']>(prefix, `${prefix1}${PATH7}`, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`,
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1amyma['get']['resBody'], BasicHeaders, Methods_1amyma['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1amyma['get']['resBody'], BasicHeaders, Methods_1amyma['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          put: (option: { body: Methods_1amyma['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1amyma['put']['resBody'], BasicHeaders, Methods_1amyma['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns Successful Response
           */
          $put: (option: { body: Methods_1amyma['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1amyma['put']['resBody'], BasicHeaders, Methods_1amyma['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1amyma['delete']['resBody'], BasicHeaders, Methods_1amyma['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns Successful Response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1amyma['delete']['resBody'], BasicHeaders, Methods_1amyma['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns Successful Response
       */
      get: (option?: { query?: Methods_7zdwk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_7zdwk['get']['resBody'], BasicHeaders, Methods_7zdwk['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option?: { query?: Methods_7zdwk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_7zdwk['get']['resBody'], BasicHeaders, Methods_7zdwk['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * @returns Successful Response
       */
      post: (option: { body: Methods_7zdwk['post']['reqBody'], query: Methods_7zdwk['post']['query'], config?: T | undefined }) =>
        fetch<Methods_7zdwk['post']['resBody'], BasicHeaders, Methods_7zdwk['post']['status']>(prefix, PATH9, POST, option).json(),
      /**
       * @returns Successful Response
       */
      $post: (option: { body: Methods_7zdwk['post']['reqBody'], query: Methods_7zdwk['post']['query'], config?: T | undefined }) =>
        fetch<Methods_7zdwk['post']['resBody'], BasicHeaders, Methods_7zdwk['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_7zdwk['get']['query'] } | { method: 'post'; query: Methods_7zdwk['post']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
