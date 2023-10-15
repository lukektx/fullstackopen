const Languages = ({country}) => {
    const languages = Object.values(country.languages)
    return(
        <div>
            <h4>Languages:</h4>
            <ul>
                {languages.map(l => <li key={languages.indexOf(l)}>{l}</li>)}
            </ul>
        </div>
    )
}

export default Languages