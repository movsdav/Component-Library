import classes from "./style.module.css";
import {MEDIUM_TEXT, SHORT_TEXT} from "../../helpers/constants";
import CardButton from "./CardButton";
import {useState} from "react";

const CardDropdown = ({text = SHORT_TEXT}) => {
    const [isActive, setIsActive] = useState(false)

    const onClick = () => {
        setIsActive(prevState => !prevState);
    }

    return (
        <>
            <CardButton text={'See more'} clickHandler={onClick}/>
            <div className={[classes.dropdown,...(isActive?[classes.dropdownactive]:[])].join(' ')}>
                <p >{text}</p>
            </div>
        </>
    );
}

export default CardDropdown;