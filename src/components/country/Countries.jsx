import { useState } from "react";

function Countries({ country, handalVisitedBtn }) {
    // console.log(country)
    const { name, flags, population, capital, area } = country;

    const [value, setValue] = useState(true);

    function handleValue() {
        setValue(!value);
    }

    return (
        <div className={`div-style ${value && "visited"}`} >
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="flags" />
            <h4>Population : {population}</h4>
            <h4>Capital : {capital}</h4>
            <h4>Aria : {area} km²</h4>
            <button className="toggleBtn" onClick={handleValue}>{value ? "Visited or not" : "Visited"}</button>
            <br />
            <button className="toggleBtn" onClick={() => handalVisitedBtn(country)}> Mark as visited</button>
            <hr />
            {value ? "Ongoing..." : "i have visited!"}
        </div >
    )
}

export default Countries;