import React,{useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

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
                
              </Modal.Body>
            </Modal>
          </>
        );
    }

//render(<ModalNewInvoice />);
export default ModalNewInvoice;