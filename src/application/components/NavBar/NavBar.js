import { useState } from "react";
import "./navBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useScrollPosition } from "./useScrollPosition";
import { ReactComponent as Logo } from "./logo.svg";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import Drawer from "@material-ui/core/Drawer";

// Toda funcion que empieze con su primera letra en mayus
// es por que es un Componente de React === Componente funcional
const NavBar = () => {
  const [changeOnScroll, setChangeOnScroll] = useState(false);
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpenSideMenu(false);
  };

  useScrollPosition(
    ({ currPos }) => {
      currPos.y < -350 ? setChangeOnScroll(true) : setChangeOnScroll(false);
    },
    [changeOnScroll]
  );

  return (
    <>
      <nav className={`nav ${changeOnScroll ? "nav--change" : ""}`}>
        <MenuIcon
          className="nav_btn"
          onClick={() => {
            setIsOpenSideMenu(true);
          }}
        />
        <div className="nav_brand">
          <Logo className="nav_logo" />
        </div>
        <ShoppingCartIcon className="nav_shopping" />
      </nav>
      <Drawer
        anchor={"left"}
        open={isOpenSideMenu}
        onClose={handleDrawerToggle}
      >
        <div className="nav_mobile">
          <MenuOpenIcon
            className="nav_btn"
            onClick={() => {
              setIsOpenSideMenu(false);
            }}
          />
          <div className="nav_brand">
            <Logo className="nav_logo" />
          </div>
          <ShoppingCartIcon className="nav_shopping" />
        </div>
        <ul className="navitem">
          <li>
            <h2>INICIO</h2>
          </li>
          <li>
            <h2>ABOUT US</h2>
          </li>
          <li>
            <h2>MENU</h2>
          </li>
          <li>
            <h2>CONTACT US</h2>
          </li>
        </ul>
        <div className="nav-redes">
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <p>Copyright © 2021 Dulce Avellana </p>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
