import classes from './Card.module.css';
import ExpandIcon from './ExpandIcon';
import MinimizeIcon from './MinimizeIcon';
const Card = (props) => {
  return (
    <>
      <div className={`${classes.card} ${props.className}`}>
        <div className={classes.header}>
          <h2>{props.title}</h2>
          {props.onExpand && (
            <button type="button" onClick={props.onExpand}>
              {props.expanded ? (
                <MinimizeIcon className={classes.icon} width="25" height="25" />
              ) : (
                <ExpandIcon className={classes.icon} width="25" height="25" />
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
