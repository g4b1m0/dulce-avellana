import { useState } from "react";
import "./navBar.scss";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useScrollPosition } from "./useScrollPosition"

// Toda funcion que empieze con su primera letra en mayus
// es por que es un Componente de React === Componente funcional
const NavBar = () => {
  const [changeOnScroll, setChangeOnScroll] = useState(false);

  useScrollPosition(({ currPos }) => {
    currPos.y < -350 ?  setChangeOnScroll(true):  setChangeOnScroll(false)
  }, [changeOnScroll])

  return (
    <nav className={`nav ${ changeOnScroll? "nav--change" : "" }`} >
      <MenuIcon className="nav_btn" />
      <div className="nav_brand">
        <img
          src={process.env.PUBLIC_URL + '/img/logo.jpg'}
          alt=""
          className="nav_logo"
        />
        <span className="nav_title">Dulce Avellanas</span>
      </div>
      <ShoppingCartIcon className="nav_shopping" />



    </nav>
  );
}

export default NavBar;
