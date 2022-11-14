//import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import countries from "./countries.json";



function App() {
  return (
    <div className="App">
      <NavBar />
      
      {/* Bootstrap container wrapper div*/}
      <div className="container">
        <div className='row'>
          <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
          <div className="list-group-item list-group-item-action">
              <CountriesList countries={ countries } />
            </div>
          </div>
       </div>
      </div>
      {/* <Routes>
      <Route path="/ " element={ } /> 
      </Routes> */}
    </div>
  );
}

export default App;
