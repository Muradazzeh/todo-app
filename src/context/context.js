import React,{useState,useContext} from 'react';

 export const settingContext= React.createContext()

 export default function setting (props){
    const [show,setShow]=useState(true)
    const [itemPage,setItemPage]=useState(3)
return (

<settingContext.Provider value={{show,itemPage}}>

    {props.children}
</settingContext.Provider>

)

 }