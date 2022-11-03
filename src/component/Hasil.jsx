import React, { Component } from "react";
import { Col, ListGroup, Row, Badge, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <strong>Hasil</strong>
        <hr />
        {keranjangs.length !== 0 && (
          <Card className="overflow-auto hasil">
            <ListGroup variant="flush">
              {keranjangs.map((menuKeranjang) => (
                <ListGroup.Item>
                  <Row>
                    <Col xs={2}>
                      <h4>
                        <Badge pill bg="success">
                          {menuKeranjang.jumlah}
                        </Badge>
                      </h4>
                    </Col>
                    <Col>
                      <h5>{menuKeranjang.product.nama}</h5>
                      <p>Rp.{numberWithCommas(menuKeranjang.product.harga)}</p>
                    </Col>
                    <Col>
                      <strong>Rp.{numberWithCommas(menuKeranjang.total_harga)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}

        <TotalBayar keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}
