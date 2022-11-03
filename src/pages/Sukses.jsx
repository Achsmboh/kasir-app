import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NavBar } from "../component";
import ImageSukses from "../assets/images/success.svg";

export default class Sukses extends Component {
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
