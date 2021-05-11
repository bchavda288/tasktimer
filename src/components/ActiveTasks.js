import { Card, ListGroup } from "react-bootstrap"
import Task from './Task'

const ActiveTasks =()=>{
    return(
        <div>
            
            <Card bg="primary" text="white" className="p-2 mt-5"> 
                <ListGroup>
                    <Task name="Task1 this is big"/>
                    <Task name="Task2"/>
                    <Task name="Task3"/>
                    <Task name="Task4"/>
                    <Task name="Task4"/>
                    <Task name="Task5"/>
                </ListGroup>
            </Card>
        </div>
    )
}

export default ActiveTasks;