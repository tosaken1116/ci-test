import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_fqnyhs } from './_asset_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/assets';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    _asset_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns Successful Response
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_fqnyhs['delete']['resBody'], BasicHeaders, Methods_fqnyhs['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * @returns Successful Response
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_fqnyhs['delete']['resBody'], BasicHeaders, Methods_fqnyhs['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * @returns Successful Response
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
    /**
     * @returns Successful Response
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
