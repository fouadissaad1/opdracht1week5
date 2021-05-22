import './App.css';
import { DATA } from "./data/data_final_version";

function OderLine() {
  return <div>
    {'\n'}
  </div>;
}

function Image(props) {
  const {text} = props;
  return <div><img src={text.substring(2)} alt="tips"/></div>;

}




function TextBold(props){
  const {text}=props;
  const textbook=text.split("*");

  return (
      <>
        {
          textbook.map((hero,index) => {
            return (index % 2 ?<b key={index}>{hero}</b> : hero)
          })
        }
      </>
  )

}

function Text(props) {
  const {text} = props;
  if (text.startsWith("---")) return <OderLine/>;
  if (text.startsWith("[[")) return <Image text={text}/>;
  return <div><TextBold text={text}/></div>;
}

function IndexPage(props){
  const {indexPage}=props;
  return <div>
       <h1 className="title">{indexPage.title}</h1>
    <div className="padding">
      {indexPage.text.map((t, i) => <Text key={i} text={t}/>)}
    </div>
    <footer className="footer">-{indexPage.pageNumber}-</footer>
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
