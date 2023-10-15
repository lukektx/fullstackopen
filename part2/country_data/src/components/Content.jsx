import Country, { Level } from './Country'

const Content = ({ countries, handleShow }) => {

    //0 for >10 countries (show nothing) 1 for 1-10 countries (just name), 2 for 1 country (full data)
    const currentLevel = countries.length > 10 ? Level.NONE : countries.length > 1 ? Level.BASIC : Level.DETAILED

    if(currentLevel == Level.NONE){
        return(
            <p>Too many matches, be more specific</p>
        )
    }

    return (
        countries.map(c => {
            return(
                <Country 
                    key={c.id} 
                    country={c} 
                    level={currentLevel} 
                    showHandler={() => handleShow(c.id)}
                />
            )
        })
    )
}

export default Content