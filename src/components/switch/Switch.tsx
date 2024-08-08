import { useState } from 'react'

export const Switch = () => {
  const [toggle, setToggle] = useState(false)

  const onClick = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      {toggle ? (
        <h1 style={{ color: 'red' }}>switch</h1>
      ) : (
        <h1 style={{ color: 'green' }}>switch</h1>
      )}

      <button onClick={onClick} type={'submit'}>
        +
      </button>
    </div>
  )
}
