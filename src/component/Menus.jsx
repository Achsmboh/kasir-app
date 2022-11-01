import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import baksojpg from "../assets/images/makanan/bakso.jpg";
const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-2">
      <Card className="shadow">
        <Card.Img variant="top" src={baksojpg} />
        <Card.Body>
          <Card.Title>
            {menu.nama}
            <strong>{menu.kode}</strong>
          </Card.Title>
          <Card.Text>Rp.{numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
