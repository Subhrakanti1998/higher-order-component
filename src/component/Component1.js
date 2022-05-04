import React from 'react'
import HocComponent from './Hoc'

const Component1 = (props) => {
    

  return (
    <div>
        <button onClick={props.click}>click</button>
        {props.val}
      
    </div>
  )
}

export default HocComponent(Component1)
