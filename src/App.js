import './App.css';
import React from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Navbar,{AltNavbar} from './components/Navbar';
import Govde from './components/Govde';
import { useState } from 'react';
import Container from './components/Container';
import Icerik from './components/Icerik';

export const TemaVerisi = React.createContext();

const tema={
  dark:{
    color:"white",
    backgroundColor:"black"
  },
  light:{
    color:"black",
    backgroundColor:"white"
  }
}

function App() {
  const [deger3,setDeger3]=useState(tema.light);
  function degistirr(){
    if(tema.dark===deger3){
      setDeger3(tema.light)
    }else{
      setDeger3(tema.dark)
    }

  }
  const name1="Ömer K"// jsx den gelen
  const [deger, setDeger] = useState(112);//hooks state burda return dışında
  const Azaltf = () => {
    setDeger(deger-1)
  }
  const [baslik,setBaslik] = useState("React Öğrenyorum")
  const numara = 1453; // props aşağıdakiler

  const deger2="Ömer kartlı";
  

  return (
    <div className="App">
    <button onClick={degistirr}>
      {tema.dark===deger3 ? "Açık ": "Koyu"}
    </button>
      <TemaVerisi.Provider value={deger2}>
        <Icerik />
      </TemaVerisi.Provider>

      <Container title={baslik} number={numara}/> 
      <button onClick={() => {setBaslik("değişti ağam..")}}>Degistir</button>
      <p><button onClick={()=>{setDeger(deger+1)}}>Artır</button></p>
      <p>{deger}</p>
      <p><button onClick={Azaltf}>Azalt</button></p>
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
