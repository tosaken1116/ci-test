/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.User
  }

  put: {
    status: 200
    /** Successful Response */
    resBody: Types.User
    reqBody: Types.UserInfoChangeRequest
  }
}
