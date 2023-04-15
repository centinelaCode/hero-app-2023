import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm';

export const SearchPage = () => {

  return (
	<>
	<h1 className="mt-3">Search Hero</h1>
	<hr />

	<div className="row">
		<div className="col-5">
			<h4>Searching</h4>
			<hr />

			<form >
			<input 
				type="text"
				placeholder="Search a hero"
				className="form-control"
				name="searchText"
				autoComplete="off"
				
			/>

			<button className="btn btn-outline-primary mt-2">Search</button>
			</form>
		</div>

		<div className="col-7">
			<h4>Results</h4>
			<hr />

			<div 
				className="alert alert-primary"
			>Search A Hero</div>

			<div 
				className="alert alert-danger"
			>No found hero with <b>ABC</b></div>

			{/* <HeroCard heroe={...heroe} ></HeroCard> */}

		</div>
	</div>

	</>
  )
}
 