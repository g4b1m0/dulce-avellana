import Button from '@material-ui/core/Button';
import "./button.scss"

// styleBtn tendra los valores round 
const CstButton = ({ label, styleBtn, className }) => {
  const btnStyle = styleBtn === "round" ? "btn-round" : "btn";

  return (
    <>
      <Button variant="contained" className={`${btnStyle} ${className}`} >
        {label}

      </Button>

    </>
  );
}

export default CstButton;
