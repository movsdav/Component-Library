import AccordionRow from "./AccordionRow";
import classes from "./style.module.css";

const Accordion = props => {
    const {items} = props;

    return(
        <div className={classes.container}>
            {items.map((item,key)=><AccordionRow options={item} key={key}/>)}
        </div>
    )
}

export default Accordion;