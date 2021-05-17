import './App.css';
import { DATA } from "./data/data_v1";

function OderLine() {
  return <div>
    <hr/>
  </div>;
}
function Text(props) {
  const {text} = props;
  if (text.startsWith("---")) return <OderLine/>;
  return <div>{text}</div>;
}

function IndexPage(props){
  const {indexPage}=props;
  return <div>
       <h1>{indexPage.title}</h1>
    <div>
      {indexPage.text.map((t, i) => <Text key={i} text={t}/>)}
    </div>
    <footer>-{indexPage.pageNumber}-</footer>
  </div>
}
function App() {
  return (
    <div>
      {
        DATA.map((p)=><IndexPage key={p.pageNumber} indexPage={p}/>)
      }



    </div>
  );
}

export default App;
