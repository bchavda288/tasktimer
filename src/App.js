
import './App.css';
import Navi from './components/Navi';
import ActiveTasks from './components/ActiveTasks';
import PausedTask from './components/PausedTasks';
import {Container,Row,Col} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Row>
          <Col><ActiveTasks/></Col>
          <Col><PausedTask /></Col>
        </Row>
       
      </Container>
      
    </div>
  );
}

export default App;
