import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, NavBar } from "./component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Product</strong>
              </h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
