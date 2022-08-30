import React from 'react';
import "./list.scss"
import { Button, Card, Elevation } from '@blueprintjs/core';
import Auth from '../auth';
function List(props) {
    return (
        <div className="list">
        <Card elevation={Elevation.THREE}>
            
            {
                props.pagination().map((item, idx) => (
                    <div  style={{display:"inline-block",padding:"10px",border:"1px solid black"}} className='card' key={idx}>
                        <p>{item.text}</p>
                        <p><small>Assigned to: {item.assignee}</small></p>
                        <p><small>Difficulty: {item.difficulty}</small></p>
                        <div>Complete: {item.complete.toString()}</div>
                        {
                            (!item.complete)
                                ? (
                                    <Auth action="update">
                                    <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
                                    </Auth>
                                )
                                : (
                                    <>
                                        {/* <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button> */}
                                        <br></br>
                                        <Auth action="delete">
                                        <Button onClick={() => props.deleteItem(item.id)}>Delete </Button>
                                        </Auth>
                                    </>
                                )
                        }
                        <hr />
                    </div>
                ))
            }
           
            
        </Card>
        <Button onClick={props.previous}>Previous</Button>
        <Button onClick={props.next}>Next</Button>
        </div>
       
    );
};


export default List;