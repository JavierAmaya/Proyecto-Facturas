import React,{useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
//const ModalNewInvoice: React.FC = () => {
//        const [show, setShow] = useState(false);
      
        function ModalNewInvoice() {
            const [show, setShow] = useState(false);
          
        return (
<>
            <Button variant="secondary" onClick={() => setShow(true)}>
              Agregar Nueva Factura
            </Button>
      
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Agregar Nueva Factura
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                <Form.Row>
                    <Col md="3">
                        <Form.Label md="2">Cliente</Form.Label>
                    </Col>
                    <Col md="9">
                    <Form.Control  as="select" value="Cliente">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Col>
                    <Col md="3">
                        <Form.Label>Tipo Factura</Form.Label>
                    </Col>
                    <Col md="9">
                        <Form.Control type="text" placeholder="Credito" value="Credito" disabled/>
                    </Col>
                </Form.Row>
               </Form>
              </Modal.Body>
            </Modal>
          </>
        );
    }

//render(<ModalNewInvoice />);
export default ModalNewInvoice;
/*<Form>
                <From.Row>
                    <Col>
                    <Form.Label md="2">Cliente</Form.Label>
                    </Col>
                </From.Row>
                <Form.Group controlId="formBasicEmail">
                    
                    <Form.Label md="2">Cliente</Form.Label>
                    <Form.Control className="Col-10" as="select" value="Cliente">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Label md="2">Tipo Factura</Form.Label>
                    <Form.Control type="text" placeholder="Credito" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>*/