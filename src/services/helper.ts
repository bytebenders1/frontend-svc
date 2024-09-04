import { AxiosError } from 'axios'

export function handleRequestError(error: any): never {
  if (error.response && error.response.data) {
    // AxiosError is used to handle Axios-specific errors
    const axiosError = error as AxiosError
    throw axiosError.response?.data
  } else {
    // For other types of errors (e.g., network errors)
    console.log('error:', error)
    throw new Error('An error occurred.')
  }
}
