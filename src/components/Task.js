import { Button, Container, ListGroup, Row,Col } from "react-bootstrap"

const Task=(props)=>{
    return(
        <ListGroup.Item variant="success">
            <Container>
                <Row>
                    <Col>{props.name}</Col>
                    <Col>00:00:00</Col>
                    <Col><Button variant="primary">Start</Button></Col>
                </Row>
            </Container>
            
        </ListGroup.Item>
    )
}
export default Task;