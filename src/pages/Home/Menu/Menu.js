import Button from "./../../../application/components/Button/Button";

import "./menu.scss";

/* 
import { Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
function Example(props) {
  var items = [
    {
      name: "TORTA CHOCOLATE",
      img: "https://www.cakeit.com.au/wp-content/uploads/2020/11/chocolate-cake.jpg",
    },
    {
      name: "BRUNCH",
      img: "https://i.blogs.es/ce8658/brunch1/1366_2000.jpg",
    },
  ];

  return (
    <Carousel indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper
      elevation={0}
      className="menu-carousel-item"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <h3>{item.name}</h3>
    </Paper>
  );
} */

const Menu = () => {
  return (
    <>
      <section className="menu">
        <div className="menu_card">
          <div className="menu_image"> </div>
          <h3 className="menu_subtitle text_handwrite">Antojate</h3>
          <h2 className="menu_title">BRUNCH</h2>
          <Button className="menu_btn" label="Take a bit " />
        </div>

        <div className="menu_card">
          <div className="menu_image"> </div>
          <h3 className="menu_subtitle text_handwrite">Antojate</h3>
          <h2 className="menu_title">BRUNCH</h2>
          <Button className="menu_btn" label="Take a bit " />
        </div>
        <div className="menu_card">
          <div className="menu_image"> </div>
          <h3 className="menu_subtitle text_handwrite">Antojate</h3>
          <h2 className="menu_title">BRUNCH</h2>
          <Button className="menu_btn" label="Take a bit " />
        </div>
      </section>
    </>
  );
};

export default Menu;
