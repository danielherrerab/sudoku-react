import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from 'components'
import { fillBlock } from 'stores/reducer/gridSlice'
import { NUMBERS } from 'typings'

interface IProps {
  value: NUMBERS
}

const NumberButton: FC<IProps> = ({ value }) => {
  const dispatch = useDispatch()

  const fill = useCallback(() => {
    dispatch(fillBlock(value))
  }, [dispatch, value])

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
