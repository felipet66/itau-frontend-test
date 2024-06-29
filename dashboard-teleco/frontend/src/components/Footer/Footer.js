/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.instagram.com/trader.teles/">
              Instagram
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.tropadostelecos.com.br/links">
              Site Oficial
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} feito com{" "}
          <i className="tim-icons icon-heart-2" /> por{" "}
          <a href="https://www.instagram.com/trader.teles/" target="_blank">
            Teleco
          </a>{" "}
          com uma ótima experiência
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
