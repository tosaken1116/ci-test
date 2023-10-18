/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      limit?: number | undefined
      visibility?: Types.Visibility | undefined
      oldest_work_id?: string | undefined
      newest_work_id?: string | undefined
      tag_names?: string | undefined
      tag_ids?: string | undefined
      search_word?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResWorks
  }

  post: {
    query: {
      post_discord: boolean
    }

    status: 200
    /** Successful Response */
    resBody: Types.Work
    reqBody: Types.PostWork
  }
}
