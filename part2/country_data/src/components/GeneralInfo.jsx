const GeneralInfo = ({country}) => {
    return(
        <div>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
        </div>
    )
}

export default GeneralInfo