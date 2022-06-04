import classes from "./style.module.css";
import {useEffect, useState} from "react";
import {COUNTRIES} from "../../helpers/variablesForTest";

const Autocomplete = ({data = COUNTRIES, onClickHandler,placeholder='Countries',buttonTitle = 'Send'}) => {

    const [input, setInput] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filterSuggestions = (data, val) => {
        if (!val) return [];
        return data.filter(el => el.substring(0, val.length).trim().toLowerCase() === val.toLowerCase())
    }

    const onChange = (e) => {
        const userInput = e.target.value.trim();

        const filtered = filterSuggestions(data, userInput);

        setInput(userInput);
        setFilteredSuggestions(filtered);
        if (userInput && filtered.length !== 0) setShowSuggestions(true);
        else setShowSuggestions(false);
    }

    const onClick = (e, input) => {
        e.preventDefault();
        if (onClickHandler) onClickHandler(input);
    }

    const unFocusDropdown = () => {
        setShowSuggestions(false);
    }

    useEffect(() => {
        window.addEventListener('click', unFocusDropdown)
        return () => {
            window.removeEventListener('click', unFocusDropdown)
        }
    })

    return (
        <form autoComplete='off'>
            <div className={classes.container}>
                <input onChange={onChange} onFocus={e => e.preventDefault()} value={input} type="text"
                       placeholder={placeholder}/>
                {showSuggestions &&
                    <div className={classes.dropdown}>
                        <ul>
                            {filteredSuggestions.map((el, i) => <li key={i} onClick={() => setInput(el)}>{el}</li>)}
                        </ul>
                    </div>
                }
            </div>
            <div>
                <button onClick={(e) => onClick(e, input)} className={classes.button}>{buttonTitle}</button>
            </div>
        </form>
    );
}

export default Autocomplete;