import PencilIcon from '../UI/Icons/PencilSVG';
import classes from '../Layout/Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>{props.title}</h1>
        <PencilIcon width={20} height={20} />
      </header>
    </>
  );
};

export default Header;
