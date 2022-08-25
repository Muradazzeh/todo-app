import React,{useState,useContext} from 'react';

export const SettingsContext = React.createContext();

export default function Settings(props) {
    const [show,setShow]=useState(true)
    const [itemPage,setItemPage]=useState(3)

    const state = {
        show:show,
        setShow:setShow,
    
        itemPage:itemPage,
        setItemPage:setItemPage,
       
    }
return (

    <SettingsContext.Provider value={state}>
    {props.children}
</SettingsContext.Provider>

)

 }