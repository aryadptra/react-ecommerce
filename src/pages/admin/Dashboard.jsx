import React from "react";
import LayoutAdmin from "../../layouts/LayoutAdmin";
import { Container, Row, Col, Card } from "react-bootstrap";

import ImageProduct1 from "../../assets/images/dashboard-icon-product-1.png";
import ImageProduct2 from "../../assets/images/dashboard-icon-product-2.png";
import ImageProduct3 from "../../assets/images/dashboard-icon-product-3.png";
import IconArrow from "../../assets/images/dashboard-arrow-right.svg";

function Dashboard() {
  return (
    <>
      <LayoutAdmin>
        <div className="container-fluid">
          <div className="dashboard-heading">
            <h2 className="dashboard-title">Dashboard</h2>
            <p className="dashboard-subtitle">Look what you have made today!</p>
          </div>
          <div className="dashboard-content">
            <Row>
              <Col md={4}>
                <Card className="mb-2">
                  <Card.Body>
                    <div className="dashboard-card-title">Customer</div>
                    <div className="dashboard-card-subtitle">15,209</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-2">
                  <Card.Body>
                    <div className="dashboard-card-title">Revenue</div>
                    <div className="dashboard-card-subtitle">$931,290</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-2">
                  <Card.Body>
                    <div className="dashboard-card-title">Transaction</div>
                    <div className="dashboard-card-subtitle">22,409,399</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="row mt-3">
              <div className="col-12 mt-2">
                <h5 className="mb-3">Recent Transactions</h5>
                <a
                  className="card card-list d-block"
                  href="/dashboard-transactions-details.html"
                >
                  <Card.Body>
                    <Row>
                      <Col md={1}>
                        <img src={ImageProduct1} alt="" />
                      </Col>
                      <Col md={4}>Shirup Marzzan</Col>
                      <Col md={3}>Angga Risky</Col>
                      <Col md={3}>12 Januari, 2020</Col>
                      <Col md={1} className="d-none d-md-block">
                        <img src={IconArrow} alt="" />
                      </Col>
                    </Row>
                  </Card.Body>
                </a>
                <a
                  className="card card-list d-block"
                  href="/dashboard-transactions-details.html"
                >
                  <Card.Body>
                    <Row>
                      <Col md={1}>
                        <img src={ImageProduct2} alt="" />
                      </Col>
                      <Col md={4}>LeBrone X</Col>
                      <Col md={3}>Masayoshi</Col>
                      <Col md={3}>11 January, 2020</Col>
                      <Col md={1} className="d-none d-md-block">
                        <img src={IconArrow} alt="" />
                      </Col>
                    </Row>
                  </Card.Body>
                </a>
                <a
                  className="card card-list d-block"
                  href="/dashboard-transactions-details.html"
                >
                  <Card.Body>
                    <Row>
                      <Col md={1}>
                        <img src={ImageProduct3} alt="" />
                      </Col>
                      <Col md={4}>Soffa Lembutte</Col>
                      <Col md={3}>Shayna</Col>
                      <Col md={3}>11 January, 2020</Col>
                      <Col md={1} className="d-none d-md-block">
                        <img src={IconArrow} alt="" />
                      </Col>
                    </Row>
                  </Card.Body>
                </a>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
}

export default Dashboard;
