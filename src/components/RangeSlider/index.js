import classes from "./style.module.css";
import {useEffect, useState} from "react";

const RangeSlider = ({min, max} = {min: 1, max: 100}) => {
    const [value, setValue] = useState((min + max) / 2);

    const handleChange = (e, value) => {
        setValue(value);
    };


    useEffect(() => {
        const slider = document.querySelector(`.${classes.bubble}`);
        const thumbHalfWidth = 12.5;
        const totalInputWidth = document.querySelector(`.${classes.slider}`).getBoundingClientRect().width;
        const left = (((value - min) / (max - min)) * ((totalInputWidth - thumbHalfWidth) - thumbHalfWidth)) + thumbHalfWidth;

        const setLeftProp = (el,left) => el.style.left = `${left}px`

        if (slider) setLeftProp(slider,left);
    })

    return (
        <div className={classes.container}>
            <span>{min}</span>
            <input type='range' min={min} max={max} value={value} className={classes.slider}
                   onChange={e => handleChange(e, e.target.value)}/>
            <output className={classes.bubble}>{value}</output>
            <span>{max}</span>
        </div>
    );
}

export default RangeSlider;