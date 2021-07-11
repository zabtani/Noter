import classes from './Card.module.css';
import MainOnIcon from './MainOnIcon';
import MainOffIcon from './MainOffIcon';
const Card = (props) => {
  return (
    <>
      <div className={`${classes.card} ${props.className}`}>
        <div className={classes.header}>
          <h2>{props.title}</h2>
          {props.onShow && (
            <button type="button" onClick={props.onShow}>
              {props.switchText}
              {props.toggleIconOn ? (
                <MainOnIcon className={classes.icon} width="35" height="35" />
              ) : (
                <MainOffIcon className={classes.icon} width="35" height="35" />
              )}
            </button>
          )}
        </div>

        <div className={classes.mainContent}>{props.children}</div>
      </div>
    </>
  );
};

export default Card;
