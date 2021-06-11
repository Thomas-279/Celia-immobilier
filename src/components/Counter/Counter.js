import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/features/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex justify-around">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="btn-blue"
        >
          Increment
        </button>
        <span className="btn-blue">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="btn-blue"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}