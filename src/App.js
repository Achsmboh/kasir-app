import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Hasil, ListCategories, NavBar } from "./component";
import { API_URL } from "./utils/constant";
import axios from "axios";
import Menus from "./component/Menus";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      kategoriYangDipilih: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}products?category.nama=${this.state.kategoriYangDipilih}`)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeCategory = (value) => {
    this.setState({
      kategoriYangDipilih: value,
      menus: [],
    });
    axios
      .get(`${API_URL}products?category.nama=${value}`)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { menus, kategoriYangDipilih } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories changeCategory={this.changeCategory} kategoriYangDipilih={kategoriYangDipilih} />
              <Col>
                <h4>
                  <strong>Daftar Product</strong>
                </h4>
                <hr />
                <Row>{menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}</Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
