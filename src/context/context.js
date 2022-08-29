import React,{useState,useEffect,useContext} from 'react';

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


    useEffect(()=>{
        let result = JSON.parse(localStorage.getItem('settings'));
        console.log(result,"88888888888888")
        if(result){
            setShow(result.show);
            setItemPage(Number(result.itemPage));
            
        }
        
       
    },[])
return (

    <SettingsContext.Provider value={state}>
    {props.children}
</SettingsContext.Provider>

)

 }