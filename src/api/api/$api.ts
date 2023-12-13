import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_7fnou1 } from './v1/assets';
import type { Methods as Methods_xuedq0 } from './v1/assets/_asset_id@string';
import type { Methods as Methods_wfwi9d } from './v1/auth/discord';
import type { Methods as Methods_1uwmkvx } from './v1/auth/discord/callback';
import type { Methods as Methods_mmcy86 } from './v1/auth/sign_up';
import type { Methods as Methods_u0fui8 } from './v1/auth/token';
import type { Methods as Methods_1mwhmj1 } from './v1/blogs';
import type { Methods as Methods_1e5aa12 } from './v1/blogs/_blog_id@string';
import type { Methods as Methods_14245v7 } from './v1/blogs/assets';
import type { Methods as Methods_1i9pzbd } from './v1/tags';
import type { Methods as Methods_1k8dev0 } from './v1/tags/_tag_id@string';
import type { Methods as Methods_odq9yo } from './v1/users';
import type { Methods as Methods_11doa8 } from './v1/users/_user_id@string';
import type { Methods as Methods_3tf0gl } from './v1/users/_user_id@string/favorite';
import type { Methods as Methods_e7qyrl } from './v1/users/_user_id@string/works';
import type { Methods as Methods_16ivzcq } from './v1/works';
import type { Methods as Methods_flevgc } from './v1/works/_work_id@string';
import type { Methods as Methods_1g2p9mz } from './v1/works/_work_id@string/comments';
import type { Methods as Methods_1usz2p3 } from './v1/works/_work_id@string/comments/_comment_id@string';
import type { Methods as Methods_99dks9 } from './v1/works/_work_id@string/favorite';
import type { Methods as Methods_10o42ar } from './v2/works';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/assets';
  const PATH1 = '/api/v1/auth/discord';
  const PATH2 = '/api/v1/auth/discord/callback';
  const PATH3 = '/api/v1/auth/sign_up';
  const PATH4 = '/api/v1/auth/token';
  const PATH5 = '/api/v1/blogs';
  const PATH6 = '/api/v1/blogs/assets';
  const PATH7 = '/api/v1/tags';
  const PATH8 = '/api/v1/users';
  const PATH9 = '/favorite';
  const PATH10 = '/works';
  const PATH11 = '/api/v1/works';
  const PATH12 = '/comments';
  const PATH13 = '/api/v2/works';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    v1: {
      assets: {
        _asset_id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            /**
             * @returns Successful Response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_xuedq0['delete']['resBody'], BasicHeaders, Methods_xuedq0['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * @returns Successful Response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_xuedq0['delete']['resBody'], BasicHeaders, Methods_xuedq0['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Successful Response
         */
        post: (option: { body: Methods_7fnou1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_7fnou1['post']['resBody'], BasicHeaders, Methods_7fnou1['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
        /**
         * @returns Successful Response
         */
        $post: (option: { body: Methods_7fnou1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_7fnou1['post']['resBody'], BasicHeaders, Methods_7fnou1['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      auth: {
        discord: {
          callback: {
            /**
             * @returns Successful Response
             */
            get: (option?: { query?: Methods_1uwmkvx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1uwmkvx['get']['resBody'], BasicHeaders, Methods_1uwmkvx['get']['status']>(prefix, PATH2, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { query?: Methods_1uwmkvx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1uwmkvx['get']['resBody'], BasicHeaders, Methods_1uwmkvx['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1uwmkvx['get']['query'] } | undefined) =>
              `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_wfwi9d['get']['status']>(prefix, PATH1, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_wfwi9d['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH1}`,
        },
        sign_up: {
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_mmcy86['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_mmcy86['post']['resBody'], BasicHeaders, Methods_mmcy86['post']['status']>(prefix, PATH3, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_mmcy86['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_mmcy86['post']['resBody'], BasicHeaders, Methods_mmcy86['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH3}`,
        },
        token: {
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_u0fui8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_u0fui8['post']['resBody'], BasicHeaders, Methods_u0fui8['post']['status']>(prefix, PATH4, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_u0fui8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_u0fui8['post']['resBody'], BasicHeaders, Methods_u0fui8['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`,
        },
      },
      blogs: {
        _blog_id: (val2: string) => {
          const prefix2 = `${PATH5}/${val2}`;

          return {
            /**
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1e5aa12['get']['resBody'], BasicHeaders, Methods_1e5aa12['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1e5aa12['get']['resBody'], BasicHeaders, Methods_1e5aa12['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        assets: {
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_14245v7['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_14245v7['post']['resBody'], BasicHeaders, Methods_14245v7['post']['status']>(prefix, PATH6, POST, option, 'FormData').json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_14245v7['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_14245v7['post']['resBody'], BasicHeaders, Methods_14245v7['post']['status']>(prefix, PATH6, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${PATH6}`,
        },
        /**
         * @returns Successful Response
         */
        get: (option?: { query?: Methods_1mwhmj1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1mwhmj1['get']['resBody'], BasicHeaders, Methods_1mwhmj1['get']['status']>(prefix, PATH5, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { query?: Methods_1mwhmj1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1mwhmj1['get']['resBody'], BasicHeaders, Methods_1mwhmj1['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        post: (option: { body: Methods_1mwhmj1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1mwhmj1['post']['resBody'], BasicHeaders, Methods_1mwhmj1['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * @returns Successful Response
         */
        $post: (option: { body: Methods_1mwhmj1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1mwhmj1['post']['resBody'], BasicHeaders, Methods_1mwhmj1['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1mwhmj1['get']['query'] } | undefined) =>
          `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      tags: {
        _tag_id: (val2: string) => {
          const prefix2 = `${PATH7}/${val2}`;

          return {
            /**
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1k8dev0['get']['resBody'], BasicHeaders, Methods_1k8dev0['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1k8dev0['get']['resBody'], BasicHeaders, Methods_1k8dev0['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            put: (option: { body: Methods_1k8dev0['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1k8dev0['put']['resBody'], BasicHeaders, Methods_1k8dev0['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns Successful Response
             */
            $put: (option: { body: Methods_1k8dev0['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1k8dev0['put']['resBody'], BasicHeaders, Methods_1k8dev0['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1k8dev0['delete']['resBody'], BasicHeaders, Methods_1k8dev0['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * @returns Successful Response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1k8dev0['delete']['resBody'], BasicHeaders, Methods_1k8dev0['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Successful Response
         */
        get: (option?: { query?: Methods_1i9pzbd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1i9pzbd['get']['resBody'], BasicHeaders, Methods_1i9pzbd['get']['status']>(prefix, PATH7, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { query?: Methods_1i9pzbd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1i9pzbd['get']['resBody'], BasicHeaders, Methods_1i9pzbd['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        post: (option: { body: Methods_1i9pzbd['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1i9pzbd['post']['resBody'], BasicHeaders, Methods_1i9pzbd['post']['status']>(prefix, PATH7, POST, option).json(),
        /**
         * @returns Successful Response
         */
        $post: (option: { body: Methods_1i9pzbd['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1i9pzbd['post']['resBody'], BasicHeaders, Methods_1i9pzbd['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1i9pzbd['get']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      users: {
        _user_id: (val2: string) => {
          const prefix2 = `${PATH8}/${val2}`;

          return {
            favorite: {
              /**
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_3tf0gl['get']['resBody'], BasicHeaders, Methods_3tf0gl['get']['status']>(prefix, `${prefix2}${PATH9}`, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_3tf0gl['get']['resBody'], BasicHeaders, Methods_3tf0gl['get']['status']>(prefix, `${prefix2}${PATH9}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH9}`,
            },
            works: {
              /**
               * @returns Successful Response
               */
              get: (option?: { query?: Methods_e7qyrl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_e7qyrl['get']['resBody'], BasicHeaders, Methods_e7qyrl['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { query?: Methods_e7qyrl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_e7qyrl['get']['resBody'], BasicHeaders, Methods_e7qyrl['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_e7qyrl['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            /**
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_11doa8['get']['resBody'], BasicHeaders, Methods_11doa8['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_11doa8['get']['resBody'], BasicHeaders, Methods_11doa8['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Successful Response
         */
        get: (option?: { query?: Methods_odq9yo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody'], BasicHeaders, Methods_odq9yo['get']['status']>(prefix, PATH8, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { query?: Methods_odq9yo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody'], BasicHeaders, Methods_odq9yo['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_odq9yo['get']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      works: {
        _work_id: (val2: string) => {
          const prefix2 = `${PATH11}/${val2}`;

          return {
            comments: {
              _comment_id: (val4: string) => {
                const prefix4 = `${prefix2}${PATH12}/${val4}`;

                return {
                  /**
                   * @returns Successful Response
                   */
                  get: (option?: { query?: Methods_1usz2p3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_1usz2p3['get']['resBody'], BasicHeaders, Methods_1usz2p3['get']['status']>(prefix, prefix4, GET, option).json(),
                  /**
                   * @returns Successful Response
                   */
                  $get: (option?: { query?: Methods_1usz2p3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_1usz2p3['get']['resBody'], BasicHeaders, Methods_1usz2p3['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  /**
                   * @returns Successful Response
                   */
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_1usz2p3['delete']['resBody'], BasicHeaders, Methods_1usz2p3['delete']['status']>(prefix, prefix4, DELETE, option).json(),
                  /**
                   * @returns Successful Response
                   */
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_1usz2p3['delete']['resBody'], BasicHeaders, Methods_1usz2p3['delete']['status']>(prefix, prefix4, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods_1usz2p3['get']['query'] } | undefined) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                };
              },
              /**
               * @returns Successful Response
               */
              get: (option?: { query?: Methods_1g2p9mz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1g2p9mz['get']['resBody'], BasicHeaders, Methods_1g2p9mz['get']['status']>(prefix, `${prefix2}${PATH12}`, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { query?: Methods_1g2p9mz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1g2p9mz['get']['resBody'], BasicHeaders, Methods_1g2p9mz['get']['status']>(prefix, `${prefix2}${PATH12}`, GET, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              post: (option: { body: Methods_1g2p9mz['post']['reqBody'], query?: Methods_1g2p9mz['post']['query'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1g2p9mz['post']['resBody'], BasicHeaders, Methods_1g2p9mz['post']['status']>(prefix, `${prefix2}${PATH12}`, POST, option).json(),
              /**
               * @returns Successful Response
               */
              $post: (option: { body: Methods_1g2p9mz['post']['reqBody'], query?: Methods_1g2p9mz['post']['query'] | undefined, config?: T | undefined }) =>
                fetch<Methods_1g2p9mz['post']['resBody'], BasicHeaders, Methods_1g2p9mz['post']['status']>(prefix, `${prefix2}${PATH12}`, POST, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1g2p9mz['get']['query'] } | { method: 'post'; query: Methods_1g2p9mz['post']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            favorite: {
              /**
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_99dks9['get']['resBody'], BasicHeaders, Methods_99dks9['get']['status']>(prefix, `${prefix2}${PATH9}`, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_99dks9['get']['resBody'], BasicHeaders, Methods_99dks9['get']['status']>(prefix, `${prefix2}${PATH9}`, GET, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              post: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_99dks9['post']['resBody'], BasicHeaders, Methods_99dks9['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option).json(),
              /**
               * @returns Successful Response
               */
              $post: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_99dks9['post']['resBody'], BasicHeaders, Methods_99dks9['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_99dks9['delete']['resBody'], BasicHeaders, Methods_99dks9['delete']['status']>(prefix, `${prefix2}${PATH9}`, DELETE, option).json(),
              /**
               * @returns Successful Response
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_99dks9['delete']['resBody'], BasicHeaders, Methods_99dks9['delete']['status']>(prefix, `${prefix2}${PATH9}`, DELETE, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH9}`,
            },
            /**
             * @returns Successful Response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_flevgc['get']['resBody'], BasicHeaders, Methods_flevgc['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * @returns Successful Response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_flevgc['get']['resBody'], BasicHeaders, Methods_flevgc['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            put: (option: { body: Methods_flevgc['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_flevgc['put']['resBody'], BasicHeaders, Methods_flevgc['put']['status']>(prefix, prefix2, PUT, option).json(),
            /**
             * @returns Successful Response
             */
            $put: (option: { body: Methods_flevgc['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_flevgc['put']['resBody'], BasicHeaders, Methods_flevgc['put']['status']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            /**
             * @returns Successful Response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_flevgc['delete']['resBody'], BasicHeaders, Methods_flevgc['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * @returns Successful Response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_flevgc['delete']['resBody'], BasicHeaders, Methods_flevgc['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * @returns Successful Response
         */
        get: (option?: { query?: Methods_16ivzcq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_16ivzcq['get']['resBody'], BasicHeaders, Methods_16ivzcq['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { query?: Methods_16ivzcq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_16ivzcq['get']['resBody'], BasicHeaders, Methods_16ivzcq['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        /**
         * @returns Successful Response
         */
        post: (option: { body: Methods_16ivzcq['post']['reqBody'], query: Methods_16ivzcq['post']['query'], config?: T | undefined }) =>
          fetch<Methods_16ivzcq['post']['resBody'], BasicHeaders, Methods_16ivzcq['post']['status']>(prefix, PATH11, POST, option).json(),
        /**
         * @returns Successful Response
         */
        $post: (option: { body: Methods_16ivzcq['post']['reqBody'], query: Methods_16ivzcq['post']['query'], config?: T | undefined }) =>
          fetch<Methods_16ivzcq['post']['resBody'], BasicHeaders, Methods_16ivzcq['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_16ivzcq['get']['query'] } | { method: 'post'; query: Methods_16ivzcq['post']['query'] } | undefined) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    v2: {
      works: {
        /**
         * @returns Successful Response
         */
        get: (option?: { query?: Methods_10o42ar['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_10o42ar['get']['resBody'], BasicHeaders, Methods_10o42ar['get']['status']>(prefix, PATH13, GET, option).json(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { query?: Methods_10o42ar['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_10o42ar['get']['resBody'], BasicHeaders, Methods_10o42ar['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_10o42ar['get']['query'] } | undefined) =>
          `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
