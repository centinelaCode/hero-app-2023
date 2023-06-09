import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

	//! navigate para navegar e inyectra el el query param: q=batman
	const navigate = useNavigate();

	//! locaction para obtener los query string con apoyo de queryString(libreria) para obtener
	//! all los query string en forma de un array
	const location = useLocation();
	// console.log({location})
	const { q = '' } = queryString.parse(location.search);


	//! obtenemos los heroes en base al quere param
	const heroes = getHeroesByName(q);
	// console.log(heroes)

	//! validaciones para show searc (cuando no se a buscado nada) y show error cuando se busca algo qu eno encuentra
	const showSearch = (q.length === 0)
	const showError = (q.length > 0) && (heroes.length === 0);
	
	//! usamos nuestro custom hook useForm
	const { searchText, onInputChange } = useForm({
		searchText: q
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();
		
		// if( searchText.trim().length <= 1 ) return;
		// console.log({searchText})		

		navigate(`?q=${ searchText }`)
	}

  return (
	<>
	<h1 className="mt-3">Search Hero</h1>
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

			<button className="btn btn-outline-primary mt-2">Search</button>
			</form>
		</div>

		<div className="col-7">
			<h4>Results</h4>
			<hr />

			{/* {
				// forma 1 => dificil de leer
				( q === '' )
				? (<div className="alert alert-primary">Search A Hero</div>)
				: ( heroes.length === 0 ) && (<div className="alert alert-danger">No found hero with <b>{ q }</b></div>)					
			} */}
			
			<div 
				className="alert alert-primary animate__animated animate__fadeIn"
				 style={{ display: showSearch ? '' : 'none' }}
				>Search A Hero
			</div>

			<div 
				className="alert alert-danger animate__animated animate__fadeIn" 
				style={{ display: showError ? '' : 'none' }}
			>No found hero with <b>{ q }</b>
			</div>

			

			{
				heroes.map(heroe => (
					<HeroCard key={heroe.id} {...heroe} />
				))
			}

		</div>
	</div>

	</>
  )
}
 