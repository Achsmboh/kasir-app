import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan, tambah, kurang, changeHandler, handleSubmit }) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama} {"  "}
            <strong>(Rp.{numberWithCommas(keranjangDetail.product.harga)})</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Harga :</Form.Label>
              <strong>
                <p>Rp.{numberWithCommas(keranjangDetail.total_harga)}</p>
              </strong>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button variant="primary" size="sm" className="me-2" onClick={() => tambah()}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <strong>{jumlah}</strong>
              <Button onClick={() => kurang()} variant="primary" size="sm" className="ms-2">
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control as="textarea" rows="3" name="keterangan" placeholder="Contong : pedas, nasi setengah" value={keterangan} onChange={(event) => changeHandler(event)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} />
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
