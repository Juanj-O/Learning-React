import {createRoot} from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';


const divRoot = createRoot(document.getElementById('root'));

// divRoot.render(<PrimeraApp saludo='Happy, Hacking'/>)
divRoot.render(<CounterApp value={5}/>)