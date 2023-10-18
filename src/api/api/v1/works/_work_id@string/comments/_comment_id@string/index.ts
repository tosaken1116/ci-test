/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  get: {
    query?: {
      limit?: number | undefined
      oldest_comment_id?: string | undefined
      newest_comment_id?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResponseReplyComment[]
  }

  delete: {
    status: 200
    /** Successful Response */
    resBody: Types.DeleteStatus
  }
}
