import React, { useEffect, useState ,useContext } from 'react';
import useForm from '../../hooks/form.js';
import List from "../list/list"
import { ControlGroup,Label, Button,InputGroup } from '@blueprintjs/core';
import { v4 as uuid } from 'uuid';
import { SettingsContext } from "../../context/context"
import { When } from 'react-if';
import { LoginContext } from "../../context/loginContext"
import Auth from "../auth"
const ToDo = () => {

const setting = useContext(SettingsContext)
const login = useContext(LoginContext);
console.log(setting,"111111111")

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(setting.itemPage)

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);



  function pagination() {
    let result = list.slice(startPage, endPage);
    return result;
  }

  function next() {
    setStartPage(startPage + setting.itemPage);
    setEndPage(endPage + setting.itemPage);
  }
  function previous() {
    setEndPage(endPage - setting.itemPage);
    setStartPage(startPage - setting.itemPage);
  }
  useEffect(() => {

   console.log(list,"list")
   
    // console.log(payload,"777777777777777777777777777777777")
        localStorage.setItem('settings', JSON.stringify(list));
    setList(list);
}, [setting])
  return (
    <>
     <When condition={login.login}>
        <Auth action="read">
      <header className="H1">
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      </Auth>
      <Auth action="read">
      <form onSubmit={handleSubmit}>

         <h2>Add To Do Item</h2>
        <div id="col-rev" className="cont">
        <Label>
          <span>To Do Item</span>
          <InputGroup onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </Label>

        <Label>
          <span>Assigned To</span>
          <InputGroup onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </Label>

        <Label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </Label>

        <Label>
          <Button type="submit">Add Item</Button>
          
        </Label>

        </div> 
      </form>
     
      {/* {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}  */}
       </Auth>
        <Auth action="read">
 <List
        pagination={pagination}
        next={next}
        previous={previous}
        toggleComplete={toggleComplete}
       
        deleteItem={deleteItem}
       
      />
        </Auth>
      </When>
    </>
  )
};

export default ToDo;
