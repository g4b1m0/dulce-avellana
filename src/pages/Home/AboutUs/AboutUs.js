import "./aboutUs.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const AboutUs = () => {
  return (
    <>
      <section className="aboutUs container">
        <h2 className="aboutUs_title text_handwrite">
          Detras de cada plato una historia con amor... ♡
        </h2>
        <a className="aboutUs_link" href="/">
          conoce mas <ArrowRightAltIcon />
        </a>
      </section>
    </>
  );
};

export default AboutUs;
