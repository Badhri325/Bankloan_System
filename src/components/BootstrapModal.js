import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function BsForm(props) {
  const { title, body, show, close, showFooter } = props;

  return (
    <>

      <Modal show={show} onHide={close} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        {showFooter && (
          <Modal.Footer>
            <Button variant="danger" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default BsForm;