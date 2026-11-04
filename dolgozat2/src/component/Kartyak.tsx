import type { ProgramTipus } from "../adatok";
import Kartya from "./Kartya";
import './Kartyak.css'

interface kartyakProps{
    elem:ProgramTipus[];
    kattintas: ()=> void
}
function Kartyak({elem, kattintas}:kartyakProps){
    return(
        <div className="kartyak">
            {elem.map((program)=> (
                <Kartya
                    key={program.id}
                    elem={program}
                    kattintas={kattintas}
                />
            ))}
        </div>
    )
}

export default Kartyak