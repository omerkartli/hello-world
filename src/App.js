import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Navbar,{AltNavbar} from './components/Navbar';
import Govde from './components/Govde';

function App() {
  const name1="Ömer K"// jsx den gelen

  return (
    <div className="App">
      <Greet />
      <Welcome />
     
      <h1> Merhaba </h1>
      <h1> 10+10 </h1>
      <h1>{10+10}</h1>
      <h1>{'ömer Kartlı'.toUpperCase()}</h1>
      <h1>{name1.toUpperCase()}</h1>
      <h2 style={{backgroundColor:'yellow'}}>ÖmerCss</h2>
      <Navbar />
      <AltNavbar />
      <Govde />
    </div>
  );
}

export default App;
