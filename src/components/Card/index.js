import classes from "./style.module.css";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import {DEFAULT_TITLE, LONG_TEXT, SHORT_TEXT} from "../../helpers/constants";
import CardImage from "./CardImage";
import CardButton from "./CardButton";
import CardDropdown from "./CardDropdown";

const Card = ({options}) => {
    const {header = DEFAULT_TITLE, content = SHORT_TEXT, imgUri = '', button = {},dropdown={}} = options;


    return (
        <div className={classes.container}>
            {imgUri && <div className={classes.image}><CardImage uri={imgUri}/></div>}
            <div className={classes.header}>
                <CardHeader header={header}/>
            </div>
            <div className={classes.content}>
                <CardContent content={content}/>
            </div>
            {Object.keys(button).length !== 0 && <div className={classes.button}><CardButton text={button.text}
                                                                                             clickHandler={button.clickHandler}/>
            </div>}
            {Object.keys(dropdown).length !== 0 && <div className={classes.dropdowncontainer}><CardDropdown /></div>}
        </div>
    );
}

export default Card;