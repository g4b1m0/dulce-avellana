import Button from "./../../../application/components/Button/Button"
import "./updates.scss";
import CakeIcon from '@material-ui/icons/Cake';

const Updates = () => {
  return (
    <>
      <section className="updates container">
        <Button label={<CakeIcon />} styleBtn="round" />
        <Button label={<CakeIcon />} styleBtn="round" />
        <Button label={<CakeIcon />} styleBtn="round" />
      </section>

    </>
  );
}

export default Updates
