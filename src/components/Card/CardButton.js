import {DEFAULT_TITLE} from "../../helpers/constants";

const CardButton = ({text = DEFAULT_TITLE, clickHandler}) => {
    return (
        <button onClick={clickHandler}>{text}</button>
    )
}

export default CardButton;