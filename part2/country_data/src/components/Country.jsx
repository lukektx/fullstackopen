import Languages from './Languages'
import GeneralInfo from './GeneralInfo'
import Weather from './Weather'

const Level = Object.freeze({
    NONE: 0,
    BASIC: 1,
    DETAILED: 2,
  })

const Country = ({ country, level, showHandler }) => {
    switch(level){
        case Level.BASIC:
            return(
                <p>
                    {country.name.common}
                    <button onClick={showHandler}>show</button>
                </p>
            )

        case Level.DETAILED:
            return(
                <div>
                    <h2>{country.name.common}</h2>
                    <GeneralInfo country={country} />
                    <Languages country={country} />
                    <img src={country.flags.png} alt={country.flags.alt} />
                    <Weather country={country} />
                </div>
            )
    }

}

export {Level}
export default Country