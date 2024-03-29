import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { HeroCard } from "../components"
import { useForm } from "../../hoooks/useForm"
import { getHeroesByName } from "../helpers/getHeroesByName"


export const SearchPages = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse( location.search)

  const heroes = getHeroesByName( q )

  const { searchText, onInputChange} =  useForm ({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
      
      navigate (`?q=${searchText}`) 
  }

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
                type="text" 
                placeholder="Search a hero"  
                className="form-control" 
                name="searchText" 
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>Search a hero</div>
          <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>No heroes with <b>{q}</b></div>

          { 
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/> 
            )) 
          }

        </div>
      </div>
    </>
  )
}
