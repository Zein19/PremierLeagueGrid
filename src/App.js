import Header from './components.js/Header';
import Clubs from './Data';
import Cards from './components.js/Cards';
import './App.css';

function App() {

  var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  const team = Clubs.map(club=>{
    return(
      <Cards
      name={club.name}
      logo={club.logo}
      stadium={club.stadium} 
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className='flex'>
        {team}
      </div>

    </div>
  );
}

export default App;
