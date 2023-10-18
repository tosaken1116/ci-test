/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query?: {
      code?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.TokenResponse
  }
}
