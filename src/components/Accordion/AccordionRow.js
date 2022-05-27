import classes from "./styles.module.css";
import {useState} from "react";

const AccordionRow = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button onClick={onClick} className={classes.button}>Lorem ipsum</button>
            <div className={[classes.body, ...(isOpen ? [classes.active] : [])].join(' ')}>
                <p>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Dolore esse eveniet laborum libero quos
                    unde vero. Adipisci ducimus exercitationem facere fuga quasi quidem repudiandae, veniam? Commodi
                    cumque eligendi est iusto minima praesentium vel? Dignissimos ducimus ex, facere illo omnis
                    voluptatum.</p>
            </div>
        </>
    )
}

export default AccordionRow