import { useEffect, useState } from "react";
import Countries from "../country/Countries";


function Country() {  // Capitalized component name
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handalVisitedBtn = country => {
        // console.log('add');
        // console.log(country);
        //unComment for watching actions


        const newVisitedCountry = [...visitedCountries, country]
        setvisitedCountries(newVisitedCountry);

    }


    return (
        <div><h1>Total Countries: {countries.length}</h1>
            <div>
                <h2 >I visited total : {visitedCountries.length} </h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>

                            {country.name.common} </li>)

                    }
                </ul>
            </div>
            <div className="card">
                {
                    countries.map(country =>
                        <Countries country={country}
                            key={country.name.common}
                            handalVisitedBtn={handalVisitedBtn} ></Countries>)
                }</div>
        </div>
    )
}

export default Country;