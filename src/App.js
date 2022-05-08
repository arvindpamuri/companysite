import logo from './logo.svg';
import './App.css';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">

      <Container>
        <Row>

          <Col>
            <Link to="/">
              <Card bg='light' className='card' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Employee</Card.Title>
                  <Card.Text>
                    Get employee details in the company.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col>
            <Card bg='light' className='card' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Customer</Card.Title>
                <Card.Text>
                Get customer details of the company.
                </Card.Text>
              </Card.Body>
            </Card>
          
          </Col>
          <Col>
            <Card bg='light' className='card' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title> Prospect </Card.Title>
                <Card.Text>
                  get details of prospective customers.
                </Card.Text>
              </Card.Body>
            </Card>
          
          </Col>
        </Row>
      </Container>      

      
    </div>
  );
}

export default App;
