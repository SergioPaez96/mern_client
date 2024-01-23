import React, { useState, useEffect } from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Menu } from "../../../api";
import { Icon } from "../../../assets";

import "./TopBar.scss";

const menuController = new Menu();

export function TopBar() {
  const [menu, setMenu] = useState(null);
  console.log(menu);
  useEffect(() => {
    (async () => {
      try {
        const response = await menuController.getMenu(true);
        setMenu(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="top-bar">
      <Container>
        <div className="top-bar__left">
          <Link to="/" className="logo">
            <Icon.LogoWhite />
          </Link>

          <div className="menu">
            <a href="/">Inicio</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
