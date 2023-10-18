/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query?: {
      limit?: number | undefined
      oldest_comment_id?: string | undefined
      newest_comment_id?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResponseComment[]
  }

  post: {
    query?: {
      reply_at?: string | undefined

      visibility?: Types.Visibility | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResponseComment
    reqBody: Types.PostComment
  }
}
