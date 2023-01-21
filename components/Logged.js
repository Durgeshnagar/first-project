import {useState} from 'react'
import Home from './Home';

 function Logged(props) {
    const[login,setLogin]=useState(false)
  if(login){
    return(
        <div><Home /></div>
    )
  }
  else{
    return(
        <div>please log in</div>
    )
  }
}

export default Logged;