import './App.css';
import { DATA } from "./data/data_final_version";
import React, { useState } from "react";

function OderLine() {
  return <div>
    {'\n'}
  </div>;
}

function Image(props) {
  const {text} = props;
  return <div><img src={text.replace("[[","")} alt="tipss"/></div>;

}



function  TextItalic(props){
  const {text}=props;
  const textbook=text.split("_");
  return (
      <>
        {
          textbook.map((hero,index) => {
            return (index % 2 ?<i key={index}>{hero}</i> : hero)
          })
        }
      </>
  )
}

function TextBold(props){
  const {text}=props;
  const textbook=text.split("*");

  return (
      <>
        {
          textbook.map((hero,index) => {
            return (index % 2 ?<b key={index}>{hero}</b>: <TextItalic key={index} text={hero}/>)
          })
        }
      </>
  )

}



function Text(props) {
  const {text} = props;
  if (text.startsWith("---")) return <OderLine/>;
  if (text.startsWith("[[")) return <Image text={text}/>;
  return <div><TextBold text={text}/>

  </div>;
}



function IndexPage(props){
  const {indexPage}=props;

  return <div>
       <h1 className="title">{indexPage.title.toUpperCase()}</h1>
    <div className="padding">
      {indexPage.text.map((t, i) => <Text key={i} text={t}/>)}
    </div>
    <footer className="footer">-{indexPage.pageNumber}-</footer>
  </div>
}
function App() {
  const [showPerson] = useState(DATA[0]);

  return (

      <div className="section">
        <IndexPage indexPage={showPerson}/>
      </div>
  );
}

export default App;
