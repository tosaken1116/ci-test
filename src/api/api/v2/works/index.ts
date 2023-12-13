/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      page?: number | undefined
      limit?: number | undefined
      visibility?: Types.Visibility | undefined
      tag_names?: string | undefined
      tag_ids?: string | undefined
      search_word?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResWorks
  }
}
