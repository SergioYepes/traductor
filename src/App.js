import logo from './logo.svg';
import './App.css';
import Traductor from './components/Traductor';
import token from "./img.gif"
import { FaGithub , FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div>
      <Traductor/>
      <div className="foot">
        <img src={token} alt="token" className="img"/>
        <div className="boton">
          <a href ={`https://www.linkedin.com/in/sergio-yepes-2b7158214/`} target="_blanck"><FaLinkedin /></a>
          <a href={`https://github.com/SergioYepes`} target="_blanck"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
