import { useState } from 'react';
import { PROGRAMOK } from './adatok';
import './App.css'
import Kartyak from './component/Kartyak';

function App() {
  const[jelentkezes, setJelentkezes]= useState(PROGRAMOK)

  function kattintas(){
    /*setJelentkezes(jelentkezes.map(program)=>

    )*/
  }

  return (
    <div>
      <header>Programok</header>
      <main>
        <Kartyak
            elem={jelentkezes}
            kattintas={kattintas}
        />
      </main>
      <footer>
        <p>Stolár-Németh Villő</p>
      </footer>
    </div>
  )
}

export default App
