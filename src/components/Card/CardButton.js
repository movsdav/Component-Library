import {DEFAULT_TITLE} from "../../helpers/constants";
import classes from "./button.module.css";

const CardButton = ({text = DEFAULT_TITLE, clickHandler}) => {
    return (
        <button className={classes.button} onClick={clickHandler}>{text}</button>
    )
}

export default CardButton;