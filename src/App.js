import './App.css';
import { DATA } from "./data/data_final_version";
import React, { useState } from "react";

function OderLine() {
    return <div>
        <hr/>
    </div>;
}

function Image(props) {
    const {text} = props;
    return <div><img src={text.replace("[[", "")} alt="tipss"/></div>;

}

function TextItalic(props) {
    const {text} = props;
    const textbook = text.split("_");
    return (
        <>
            {
                textbook.map((hero, index) => {
                    return (index % 2 ? <i key={index}>{hero}</i> : hero)
                })
            }
        </>
    )
}

function TextBold(props) {
    const {text} = props;
    const textbook = text.split("*");

    return (
        <>
            {
                textbook.map((hero, index) => {
                    return (index % 2 ? <b key={index}>{hero}</b> : <TextItalic key={index} text={hero}/>)
                })
            }
        </>
    )

}

function TOCText(props) {
    const {showMyfirtPage, setShowMyfirtPage} = props;
    return <div className="item"
                onClick={() => setShowMyfirtPage(showMyfirtPage)}>
        {showMyfirtPage.pageNumber} -- {showMyfirtPage.title}
    </div>;
}

function TocPage(props) {
    const {data, setShowMyfirtPage} = props;
    return <div>
        <h1 className="title">Inhoud</h1>
        <div>
            {data.map((p) => <TOCText key={p.pageNumber}
                                      showMyfirtPage={p}
                                      setShowMyfirtPage={setShowMyfirtPage}/>)}
        </div>
    </div>;
}


function Text(props) {
    const {text} = props;
    if (text.startsWith("---")) return <OderLine/>;
    if (text.startsWith("[[")) return <Image text={text}/>;
    return <div><TextBold text={text}/>

    </div>;
}


function IndexPage(props) {
    const {indexPage} = props;
    if (!indexPage) return null;
    return <div>
        <h1 className="title">{indexPage.title.toUpperCase()}</h1>
        <div className="padding">
            {indexPage.text.map((t, i) => <Text key={i} text={t}/>)}
        </div>
        <footer className="footer">-{indexPage.pageNumber}-</footer>
    </div>
}

function App() {
    const [showMyfirtPage, setShowMyfirtPage] = useState(null);

    function nextPage() {
        if (!showMyfirtPage) return DATA[0];
        const nowPageIndex = DATA.findIndex(p => p.pageNumber === showMyfirtPage.pageNumber)
        if (nowPageIndex === DATA.length - 1) return null;
        return DATA[nowPageIndex < DATA.length - 1 ? nowPageIndex + 1 : 0];
    }

    function prevPage() {
        if (!showMyfirtPage) return DATA[DATA.length - 1];
        const nowPageIndex = DATA.findIndex(p => p.pageNumber === showMyfirtPage.pageNumber)
        if (nowPageIndex === 0) return null;
        return DATA[showMyfirtPage < nowPageIndex + 1 ? showMyfirtPage - 1 : 0];
    }

    return (

        <div>
            <nav>
                <button onClick={() => setShowMyfirtPage(null)}>Menu
                </button>
            </nav>
            <div>

                <IndexPage indexPage={showMyfirtPage}/>
                {
                    !showMyfirtPage && <TocPage data={DATA} setShowMyfirtPage={setShowMyfirtPage}/>
                }
                <button onClick={() => setShowMyfirtPage(prevPage())}>Prev</button>
                <button onClick={() => setShowMyfirtPage(nextPage())}>Next</button>
            </div>
        </div>
    );
}

export default App;
