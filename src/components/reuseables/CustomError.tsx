import { extractErrorMessages } from '@/src/lib/helper'

type TProps = {
  isError?: boolean
  error?: {
    message: string | []
  } | null
}

const CustomError = ({ isError, error }: TProps) => {
  return (
    <>
      {isError && error?.message ? (
        typeof error.message === 'string' ? (
          <div className='text-red-500 my-3'>{error.message}</div>
        ) : (
          <div className='mb-1'>
            {extractErrorMessages(error.message).map((error, i) => {
              return (
                <div key={i} className='text-red-500 '>
                  {error}
                </div>
              )
            })}
          </div>
        )
      ) : null}
    </>
  )
}

export default CustomError
