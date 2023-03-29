import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Person name='Sakib Al Hasan' profession='Cricketer'></Person>
        <Person name='Nadir on The Go' profession='Vloer'></Person>
        <Person name='Jhankar Mahbub' profession='Programmer'></Person>
        <Person name='Ahmadullah' profession='Maolana'></Person>
        <Person name='Masum Hossain' profession='Web Developer'></Person>

        <Another name='Najmus Sakib' profession='Programmer' mobile='01712345678'></Another>
        <Another name='Masum Hossain' profession='Web Developer' mobile='01798223871'></Another>
        <Another name='Shanto Hossain' profession='Web Developer' mobile='01712345678'></Another>
        <Another name='Iqbal Hossain' profession='Web Developerr' mobile='01712345678'></Another>
    </div>
  );
}
// create components 
const Person = (props) =>{
  return(
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.profession}</p>
    </div>
  )
}

const Another = (props)=>{
  return(
    <div>
  <h1>Name: {props.name}</h1>
  <p>Profession: {props.profession}</p>
  <h4>Mobile: {props.mobile}</h4>
  </div>
  )
}

export default App;
