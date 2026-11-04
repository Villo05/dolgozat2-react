import type { ProgramTipus } from "../adatok";

interface KartyaProps{
    elem: ProgramTipus;
    kattintas: ()=> void
}

function Kartya({elem,kattintas}:KartyaProps){
   
    return(
        <div className="kartya">
            <h2>{elem.nev}</h2>
            <p>{elem.kategoria}</p>
            <p>{elem.datum}</p>
            <p>{elem.helyszin}</p>
            <p>{elem.ferohely}</p>
            <p>{elem.jelentkezettek}</p>
            <button onClick={()=> kattintas()}>Jelentkezem</button>
        </div>
    )
}

export default Kartya