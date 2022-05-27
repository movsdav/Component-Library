import AccordionRow from "./AccordionRow";
import classes from "./styles.module.css";

const Accordion = props => {
    return(
        <div className={classes.container}>
            <AccordionRow />
            <AccordionRow />
            <AccordionRow />
            <AccordionRow />
        </div>
    )
}

export default Accordion;