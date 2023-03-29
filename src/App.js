import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [
    {name: 'Sakib Khan', Prof: 'Actor', nationality: 'Bangladeshi'},
    {name: 'Sakib Al Hasan', Prof: 'Cricketer', nationality: 'Bangladeshi'},
    {name: 'Will Smith', Prof: 'Actor', nationality: 'American'},
    {name: 'Shah Rukh Khan', Prof: 'Actor', nationality: 'Indian'},
    {name: 'Bruse Lee', Prof: 'Actor', nationality: 'Japanese'}
  ]
  return (
    <div className="App">
        {
          nayoks.map(nayok => <Person name={nayok.name} prof={nayok.Prof} nationality={nayok.nationality}></Person>)
        }
    </div>
  );
}
// create components 
const Person = (props) =>{
  return(
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.prof}</p>
    <p>{props.nationality}</p>
    </div>
  )
}

export default App;
