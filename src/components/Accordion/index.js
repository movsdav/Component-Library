import AccordionRow from "./AccordionRow";
import classes from "./style.module.css";
import {accordionItems} from "../../helpers/variablesForTest";
import {useState} from "react";

const DEFAULT_STYLES = {
    buttonStyle: {
        backgroundColor: '#eee',
        color: '#444',
    },
    bodyStyle: {
        backgroundColor: 'white',
    },
};

const Accordion = props => {

    const {items = accordionItems} = props;

    return (
        <div className={classes.container}>
            {items.map((item, key) => <AccordionRow options={item} key={key}/>)}
        </div>
    )
}

export default Accordion;