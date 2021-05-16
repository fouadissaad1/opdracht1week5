import './App.css';
import { DATA } from "./data/data_v1";


function Moestuin(props){
  const {moestuin}=props;
  return <div>
       <h1>{moestuin.title}</h1>
    <div>{moestuin.text}</div>

    <footer>{moestuin.pageNumber}</footer>
  </div>

}
function App() {
  return (
    <div>
      {
        DATA.map((p)=><Moestuin key={p.pageNumber} moestuin={p}/>)
      }

    </div>
  );
}

export default App;
