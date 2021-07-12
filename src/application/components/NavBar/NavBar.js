import { useState } from "react";
import "./navBar.scss";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useScrollPosition } from "./useScrollPosition"
import { ReactComponent as Logo } from './logo.svg';

import Drawer from '@material-ui/core/Drawer';

// Toda funcion que empieze con su primera letra en mayus
// es por que es un Componente de React === Componente funcional
const NavBar = () => {
  const [changeOnScroll, setChangeOnScroll] = useState(false);
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
  
  const handleDrawerToggle = () => {
    setIsOpenSideMenu(false);
  };

  useScrollPosition(({ currPos }) => {
    currPos.y < -350 ? setChangeOnScroll(true) : setChangeOnScroll(false)
  }, [changeOnScroll])

  return (
    <>
      <nav className={`nav ${changeOnScroll ? "nav--change" : ""}`} >
        <MenuIcon className="nav_btn" onClick={() => { setIsOpenSideMenu(true) }} />
        <div className="nav_brand">
          <Logo className="nav_logo" />
        </div>
        <ShoppingCartIcon className="nav_shopping" />
      </nav>
      <Drawer anchor={"left"} open={isOpenSideMenu} onClose={handleDrawerToggle}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </Drawer>
    </>
  );
}

export default NavBar;
