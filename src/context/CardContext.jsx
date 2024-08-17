import React, { createContext, useContext, useState } from 'react'

let myContext = createContext()

const CardContext = ({children}) => {
    let [cartitems,setcartitems] = useState([])
    // console.log(cartitems);
  return (
      <myContext.Provider value={{cartitems,setcartitems}}>
      {children} 
      </myContext.Provider>
      
  )
}
export const useMyContext = () => useContext(myContext)
export default CardContext
