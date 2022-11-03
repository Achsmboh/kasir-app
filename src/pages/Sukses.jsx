import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NavBar } from "../component";
import ImageSukses from "../assets/images/success.svg";
import axios from "axios";
import { API_URL } from "../utils/constant";
export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map((item) => {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => {
        console.log("Errorr yaa", err);
      });
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="mt-4 text-center">
          <img src={ImageSukses} alt="" width={500} />
          <h4 className="mt-3">Sukses Pesan</h4>
          <p>Terimakasih Sudah Memesan!</p>
          <Button variant="primary" as={Link} to="/">
            Kembali
          </Button>
        </div>
      </div>
    );
  }
}
