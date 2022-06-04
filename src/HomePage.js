import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>Component Library</h1>
            <ul>
                <li><Link to='/accordion'>Accordion</Link></li>
                <li><Link to='/rangeSlider'>Range Slider</Link></li>
                <li><Link to='/autocomplete'>Autocomplete</Link></li>
                <li>
                    <Link to='/card'>Card</Link>
                    <ul>
                        <li><Link to='/cardImg'>Card with image</Link></li>
                        <li><Link to='/cardButton'>Card with button</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default HomePage;