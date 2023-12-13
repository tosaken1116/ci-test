import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_66wisu } from './api/v1/assets';
import type { Methods as Methods_2eu7xh } from './api/v1/assets/_asset_id@string';
import type { Methods as Methods_f4q7om } from './api/v1/auth/discord';
import type { Methods as Methods_lvp0us } from './api/v1/auth/discord/callback';
import type { Methods as Methods_dbn25p } from './api/v1/auth/sign_up';
import type { Methods as Methods_1emg70n } from './api/v1/auth/token';
import type { Methods as Methods_vkx4oc } from './api/v1/blogs';
import type { Methods as Methods_lizw1r } from './api/v1/blogs/_blog_id@string';
import type { Methods as Methods_1drknx8 } from './api/v1/blogs/assets';
import type { Methods as Methods_1jspgi } from './api/v1/tags';
import type { Methods as Methods_b5npdl } from './api/v1/tags/_tag_id@string';
import type { Methods as Methods_r5qu0t } from './api/v1/users';
import type { Methods as Methods_mj741l } from './api/v1/users/_user_id@string';
import type { Methods as Methods_187vila } from './api/v1/users/_user_id@string/favorite';
import type { Methods as Methods_1h771y4 } from './api/v1/users/_user_id@string/works';
import type { Methods as Methods_m1iqh7 } from './api/v1/works';
import type { Methods as Methods_1gm1ofx } from './api/v1/works/_work_id@string';
import type { Methods as Methods_1np2jo8 } from './api/v1/works/_work_id@string/comments';
import type { Methods as Methods_hab3ny } from './api/v1/works/_work_id@string/comments/_comment_id@string';
import type { Methods as Methods_bhrxp6 } from './api/v1/works/_work_id@string/favorite';
import type { Methods as Methods_12dkkn6 } from './api/v2/works';

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
    api: {
      v1: {
        assets: {
          _asset_id: (val3: string) => {
            const prefix3 = `${PATH0}/${val3}`;

            return {
              /**
               * @returns Successful Response
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_2eu7xh['delete']['resBody'], BasicHeaders, Methods_2eu7xh['delete']['status']>(prefix, prefix3, DELETE, option).json(),
              /**
               * @returns Successful Response
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_2eu7xh['delete']['resBody'], BasicHeaders, Methods_2eu7xh['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_66wisu['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_66wisu['post']['resBody'], BasicHeaders, Methods_66wisu['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_66wisu['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_66wisu['post']['resBody'], BasicHeaders, Methods_66wisu['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`,
        },
        auth: {
          discord: {
            callback: {
              /**
               * @returns Successful Response
               */
              get: (option?: { query?: Methods_lvp0us['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_lvp0us['get']['resBody'], BasicHeaders, Methods_lvp0us['get']['status']>(prefix, PATH2, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { query?: Methods_lvp0us['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_lvp0us['get']['resBody'], BasicHeaders, Methods_lvp0us['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_lvp0us['get']['query'] } | undefined) =>
                `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_f4q7om['get']['status']>(prefix, PATH1, GET, option).send(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_f4q7om['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH1}`,
          },
          sign_up: {
            /**
             * @returns Successful Response
             */
            post: (option: { body: Methods_dbn25p['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_dbn25p['post']['resBody'], BasicHeaders, Methods_dbn25p['post']['status']>(prefix, PATH3, POST, option).json(),
            /**
             * @returns Successful Response
             */
            $post: (option: { body: Methods_dbn25p['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_dbn25p['post']['resBody'], BasicHeaders, Methods_dbn25p['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH3}`,
          },
          token: {
            /**
             * @returns Successful Response
             */
            post: (option: { body: Methods_1emg70n['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1emg70n['post']['resBody'], BasicHeaders, Methods_1emg70n['post']['status']>(prefix, PATH4, POST, option).json(),
            /**
             * @returns Successful Response
             */
            $post: (option: { body: Methods_1emg70n['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1emg70n['post']['resBody'], BasicHeaders, Methods_1emg70n['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH4}`,
          },
        },
        blogs: {
          _blog_id: (val3: string) => {
            const prefix3 = `${PATH5}/${val3}`;

            return {
              /**
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_lizw1r['get']['resBody'], BasicHeaders, Methods_lizw1r['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_lizw1r['get']['resBody'], BasicHeaders, Methods_lizw1r['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          assets: {
            /**
             * @returns Successful Response
             */
            post: (option: { body: Methods_1drknx8['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1drknx8['post']['resBody'], BasicHeaders, Methods_1drknx8['post']['status']>(prefix, PATH6, POST, option, 'FormData').json(),
            /**
             * @returns Successful Response
             */
            $post: (option: { body: Methods_1drknx8['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1drknx8['post']['resBody'], BasicHeaders, Methods_1drknx8['post']['status']>(prefix, PATH6, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH6}`,
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_vkx4oc['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vkx4oc['get']['resBody'], BasicHeaders, Methods_vkx4oc['get']['status']>(prefix, PATH5, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_vkx4oc['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_vkx4oc['get']['resBody'], BasicHeaders, Methods_vkx4oc['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_vkx4oc['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_vkx4oc['post']['resBody'], BasicHeaders, Methods_vkx4oc['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_vkx4oc['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_vkx4oc['post']['resBody'], BasicHeaders, Methods_vkx4oc['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_vkx4oc['get']['query'] } | undefined) =>
            `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        tags: {
          _tag_id: (val3: string) => {
            const prefix3 = `${PATH7}/${val3}`;

            return {
              /**
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_b5npdl['get']['resBody'], BasicHeaders, Methods_b5npdl['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_b5npdl['get']['resBody'], BasicHeaders, Methods_b5npdl['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              put: (option: { body: Methods_b5npdl['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_b5npdl['put']['resBody'], BasicHeaders, Methods_b5npdl['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Successful Response
               */
              $put: (option: { body: Methods_b5npdl['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_b5npdl['put']['resBody'], BasicHeaders, Methods_b5npdl['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_b5npdl['delete']['resBody'], BasicHeaders, Methods_b5npdl['delete']['status']>(prefix, prefix3, DELETE, option).json(),
              /**
               * @returns Successful Response
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_b5npdl['delete']['resBody'], BasicHeaders, Methods_b5npdl['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_1jspgi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1jspgi['get']['resBody'], BasicHeaders, Methods_1jspgi['get']['status']>(prefix, PATH7, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_1jspgi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1jspgi['get']['resBody'], BasicHeaders, Methods_1jspgi['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_1jspgi['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1jspgi['post']['resBody'], BasicHeaders, Methods_1jspgi['post']['status']>(prefix, PATH7, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_1jspgi['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1jspgi['post']['resBody'], BasicHeaders, Methods_1jspgi['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1jspgi['get']['query'] } | undefined) =>
            `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        users: {
          _user_id: (val3: string) => {
            const prefix3 = `${PATH8}/${val3}`;

            return {
              favorite: {
                /**
                 * @returns Successful Response
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_187vila['get']['resBody'], BasicHeaders, Methods_187vila['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json(),
                /**
                 * @returns Successful Response
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_187vila['get']['resBody'], BasicHeaders, Methods_187vila['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH9}`,
              },
              works: {
                /**
                 * @returns Successful Response
                 */
                get: (option?: { query?: Methods_1h771y4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1h771y4['get']['resBody'], BasicHeaders, Methods_1h771y4['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json(),
                /**
                 * @returns Successful Response
                 */
                $get: (option?: { query?: Methods_1h771y4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1h771y4['get']['resBody'], BasicHeaders, Methods_1h771y4['get']['status']>(prefix, `${prefix3}${PATH10}`, GET, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_1h771y4['get']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              /**
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_mj741l['get']['resBody'], BasicHeaders, Methods_mj741l['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_mj741l['get']['resBody'], BasicHeaders, Methods_mj741l['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_r5qu0t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_r5qu0t['get']['resBody'], BasicHeaders, Methods_r5qu0t['get']['status']>(prefix, PATH8, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_r5qu0t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_r5qu0t['get']['resBody'], BasicHeaders, Methods_r5qu0t['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_r5qu0t['get']['query'] } | undefined) =>
            `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        works: {
          _work_id: (val3: string) => {
            const prefix3 = `${PATH11}/${val3}`;

            return {
              comments: {
                _comment_id: (val5: string) => {
                  const prefix5 = `${prefix3}${PATH12}/${val5}`;

                  return {
                    /**
                     * @returns Successful Response
                     */
                    get: (option?: { query?: Methods_hab3ny['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_hab3ny['get']['resBody'], BasicHeaders, Methods_hab3ny['get']['status']>(prefix, prefix5, GET, option).json(),
                    /**
                     * @returns Successful Response
                     */
                    $get: (option?: { query?: Methods_hab3ny['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                      fetch<Methods_hab3ny['get']['resBody'], BasicHeaders, Methods_hab3ny['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                    /**
                     * @returns Successful Response
                     */
                    delete: (option?: { config?: T | undefined } | undefined) =>
                      fetch<Methods_hab3ny['delete']['resBody'], BasicHeaders, Methods_hab3ny['delete']['status']>(prefix, prefix5, DELETE, option).json(),
                    /**
                     * @returns Successful Response
                     */
                    $delete: (option?: { config?: T | undefined } | undefined) =>
                      fetch<Methods_hab3ny['delete']['resBody'], BasicHeaders, Methods_hab3ny['delete']['status']>(prefix, prefix5, DELETE, option).json().then(r => r.body),
                    $path: (option?: { method?: 'get' | undefined; query: Methods_hab3ny['get']['query'] } | undefined) =>
                      `${prefix}${prefix5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                  };
                },
                /**
                 * @returns Successful Response
                 */
                get: (option?: { query?: Methods_1np2jo8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1np2jo8['get']['resBody'], BasicHeaders, Methods_1np2jo8['get']['status']>(prefix, `${prefix3}${PATH12}`, GET, option).json(),
                /**
                 * @returns Successful Response
                 */
                $get: (option?: { query?: Methods_1np2jo8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_1np2jo8['get']['resBody'], BasicHeaders, Methods_1np2jo8['get']['status']>(prefix, `${prefix3}${PATH12}`, GET, option).json().then(r => r.body),
                /**
                 * @returns Successful Response
                 */
                post: (option: { body: Methods_1np2jo8['post']['reqBody'], query?: Methods_1np2jo8['post']['query'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1np2jo8['post']['resBody'], BasicHeaders, Methods_1np2jo8['post']['status']>(prefix, `${prefix3}${PATH12}`, POST, option).json(),
                /**
                 * @returns Successful Response
                 */
                $post: (option: { body: Methods_1np2jo8['post']['reqBody'], query?: Methods_1np2jo8['post']['query'] | undefined, config?: T | undefined }) =>
                  fetch<Methods_1np2jo8['post']['resBody'], BasicHeaders, Methods_1np2jo8['post']['status']>(prefix, `${prefix3}${PATH12}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_1np2jo8['get']['query'] } | { method: 'post'; query: Methods_1np2jo8['post']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              favorite: {
                /**
                 * @returns Successful Response
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_bhrxp6['get']['resBody'], BasicHeaders, Methods_bhrxp6['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json(),
                /**
                 * @returns Successful Response
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_bhrxp6['get']['resBody'], BasicHeaders, Methods_bhrxp6['get']['status']>(prefix, `${prefix3}${PATH9}`, GET, option).json().then(r => r.body),
                /**
                 * @returns Successful Response
                 */
                post: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_bhrxp6['post']['resBody'], BasicHeaders, Methods_bhrxp6['post']['status']>(prefix, `${prefix3}${PATH9}`, POST, option).json(),
                /**
                 * @returns Successful Response
                 */
                $post: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_bhrxp6['post']['resBody'], BasicHeaders, Methods_bhrxp6['post']['status']>(prefix, `${prefix3}${PATH9}`, POST, option).json().then(r => r.body),
                /**
                 * @returns Successful Response
                 */
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_bhrxp6['delete']['resBody'], BasicHeaders, Methods_bhrxp6['delete']['status']>(prefix, `${prefix3}${PATH9}`, DELETE, option).json(),
                /**
                 * @returns Successful Response
                 */
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods_bhrxp6['delete']['resBody'], BasicHeaders, Methods_bhrxp6['delete']['status']>(prefix, `${prefix3}${PATH9}`, DELETE, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}${PATH9}`,
              },
              /**
               * @returns Successful Response
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1gm1ofx['get']['resBody'], BasicHeaders, Methods_1gm1ofx['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Successful Response
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1gm1ofx['get']['resBody'], BasicHeaders, Methods_1gm1ofx['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              put: (option: { body: Methods_1gm1ofx['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1gm1ofx['put']['resBody'], BasicHeaders, Methods_1gm1ofx['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Successful Response
               */
              $put: (option: { body: Methods_1gm1ofx['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1gm1ofx['put']['resBody'], BasicHeaders, Methods_1gm1ofx['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              /**
               * @returns Successful Response
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1gm1ofx['delete']['resBody'], BasicHeaders, Methods_1gm1ofx['delete']['status']>(prefix, prefix3, DELETE, option).json(),
              /**
               * @returns Successful Response
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1gm1ofx['delete']['resBody'], BasicHeaders, Methods_1gm1ofx['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_m1iqh7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_m1iqh7['get']['resBody'], BasicHeaders, Methods_m1iqh7['get']['status']>(prefix, PATH11, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_m1iqh7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_m1iqh7['get']['resBody'], BasicHeaders, Methods_m1iqh7['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
          /**
           * @returns Successful Response
           */
          post: (option: { body: Methods_m1iqh7['post']['reqBody'], query: Methods_m1iqh7['post']['query'], config?: T | undefined }) =>
            fetch<Methods_m1iqh7['post']['resBody'], BasicHeaders, Methods_m1iqh7['post']['status']>(prefix, PATH11, POST, option).json(),
          /**
           * @returns Successful Response
           */
          $post: (option: { body: Methods_m1iqh7['post']['reqBody'], query: Methods_m1iqh7['post']['query'], config?: T | undefined }) =>
            fetch<Methods_m1iqh7['post']['resBody'], BasicHeaders, Methods_m1iqh7['post']['status']>(prefix, PATH11, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_m1iqh7['get']['query'] } | { method: 'post'; query: Methods_m1iqh7['post']['query'] } | undefined) =>
            `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      v2: {
        works: {
          /**
           * @returns Successful Response
           */
          get: (option?: { query?: Methods_12dkkn6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12dkkn6['get']['resBody'], BasicHeaders, Methods_12dkkn6['get']['status']>(prefix, PATH13, GET, option).json(),
          /**
           * @returns Successful Response
           */
          $get: (option?: { query?: Methods_12dkkn6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12dkkn6['get']['resBody'], BasicHeaders, Methods_12dkkn6['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_12dkkn6['get']['query'] } | undefined) =>
            `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
