import {useState} from 'react'

const HocComponent=(Comp)=>{
const Hoc = () => {
    const[val,setval]=useState(0)
    const click=()=>{
        setval(val+1)
    }
return(
    <div>
        <Comp val={val}
              click={click}/>
      
    </div>
  )
}
return Hoc
}

export default HocComponent
