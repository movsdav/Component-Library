import Accordion from "./components/Accordion";
import {accordionItems} from "./helpers/variablesForTest";
import RangeSlider from "./components/RangeSlider";
import './App.css';
import Card from "./components/Card";
import Autocomplete from "./components/Autocomplete";
import {Route, Routes, Link} from "react-router-dom";
import HomePage from "./HomePage";


function App() {
    return (
        <>
            <Routes>
                <Route path='/accordion' element={<Accordion/>}/>
                <Route path='/rangeSlider' element={<RangeSlider min={0} max={100}/>}/>
                <Route path='/autocomplete' element={<Autocomplete/>}/>
                <Route path='/card' element={<Card options={{}}/>}/>
                <Route path='/cardImg' element={<Card options={{imgUri:'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png'}}/>}/>
                <Route path='/cardButton' element={<Card options={{button:{text:"Like"}}}/>}/>
                <Route path='*' element={<HomePage/>}/>
            </Routes>
        </>
    )

}

export default App;