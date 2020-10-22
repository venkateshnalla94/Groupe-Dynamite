import React, { useState } from 'react';

const UpdateState = (props) => {
  const [temp, setTemp] = useState('Initial Value')
  return (
    <div>
      <h1>{dummy}</h1>
      <Button title={'Click ME'}
        onClick={() => setTemp('Im Updated now')} />
    </div>
  )
}

export default UpdateState;