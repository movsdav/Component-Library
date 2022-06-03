import classes from "./style.module.css";
import {useState} from "react";
import {DEFAULT_OPTION} from "../../helpers/constants";

const AccordionRow = ({options = DEFAULT_OPTION}) => {
    const [isOpen, setIsOpen] = useState(false);

    const {title, text} = options;

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button onClick={onClick} className={classes.button}>{title}</button>
            <div className={[classes.body, ...(isOpen ? [classes.active] : [])].join(' ')}>
                <p>{text}</p>
            </div>
        </>
    )
}

export default AccordionRow