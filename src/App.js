import Accordion from "./components/Accordion";
import {accordionItems} from "./helpers/variablesForTest";
import RangeSlider from "./components/RangeSlider";
import './App.css';
import Card from "./components/Card";


function App() {
    return (
        <div className='container'>
            <Card options={{
                imgUri: 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
                button: {
                    clickHandler: () => {
                    },
                    text: 'Click me'
                }
            }}/>
            <Card options={{
                imgUri: 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
                button: {
                    clickHandler: () => {
                    },
                    text: 'Click me'
                }
            }}/>
            <Card options={{
                imgUri: 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
                button: {
                    clickHandler: () => {
                    },
                    text: 'Click me'
                }
            }}/>
            <Card options={{
                imgUri: 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
                button: {
                    clickHandler: () => {
                    },
                    text: 'Click me'
                }
            }}/>
        </div>
    );

}

export default App;