
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import "./menu.scss";




function Example(props) {
  var items = [
    {
      name: "TORTA CHOCOLATE",
      img: "https://www.cakeit.com.au/wp-content/uploads/2020/11/chocolate-cake.jpg"
    },
    {
      name: "BRUNCH",
      img: "https://i.blogs.es/ce8658/brunch1/1366_2000.jpg"
    }
  ]

  return (
    <Carousel indicators={false}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item({item}) {

  return (
    <Paper elevation={0} className="menu-carousel-item" style={{backgroundImage: `url(${item.img})`}}>
      <h3>{item.name}</h3>

    </Paper>
  )
}

const Menu = () => {
  return (
    <>
      <section className="menu">
        <div>
          <h1>Pasteles</h1>
        </div>
        <Example />
      </section>

    </>
  );
}

export default Menu;