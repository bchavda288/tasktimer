import{Navbar,Form,FormControl, Button} from 'react-bootstrap'
const Navi = ()=>{
    return(
        <Navbar className="bg-dark">
                
            <Form inline>
                <FormControl type="text" placeholder="Task Name" className=" mr-sm-2" />
                <Button type="submit">Add</Button>
            </Form>
        </Navbar>
    )
}
export default Navi;