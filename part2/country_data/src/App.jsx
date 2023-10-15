import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Content from './components/Content'
import countryService from './services/countries'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState(null)
  const [showCountries, setShowCountries] = useState(null)

  const hook = () => {
    countryService
      .getall()
      .then((response) => {
        setCountries(
          response.map(
            (e, i) => {return {...e, id: i}}
          ))
      })
      .catch(() => console.log('Couldn\'t fetch country data'))
  }

  useEffect(hook, [])

  const updateShow = () => {
    if(countries){
      setShowCountries(
        countries.filter(
          c => c.name.common.toLowerCase().includes(filter.toLowerCase())
      ))
    }
  }

  useEffect(updateShow, [countries, filter])

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
  }

  const handleShow = (id) => {
    setShowCountries([countries[id]])
  }

  if(!showCountries){
    return null
  }

  return (
    <div>
      <Filter filter={filter} handleFilterInput={handleFilterInput} />
      <Content countries={showCountries} handleShow={handleShow}/>
    </div>
  )
}

export default App
