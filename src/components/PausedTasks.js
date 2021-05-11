import {Card,ListGroup} from 'react-bootstrap'
import Task from './Task';

const PausedTask = ()=>{
    return(
        <div>
         <Card bg="secondary" text="white" className="p-2 mt-5"> 
         <ListGroup>
                    <Task name="Task1"/>
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
export default PausedTask;