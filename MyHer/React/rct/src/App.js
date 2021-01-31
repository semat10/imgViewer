
import './App.css';
import React, { useState, useEffect } from 'react';



import SummaryD from './components/SummaryD/SummaryD';

let textInput = React.createRef();



function App() {


  ///////////////////////////////////////////
  // const [director, setDirector] = useState([]);

  // useEffect(() => {
  //   fetch('/get-director')
  //     .then(r => r.json())
  //     .then(data => {
  //       console.log(data)
  //       setDirector(data);
  //     })
  // }, [])

  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   fetch('/get-news')
  //     .then(r => r.json())
  //     .then(data => {
  //       console.log(data)
  //       setNews(data);
  //     })
  // }, [])

  function addImg(){
 
    // let img = e.target.elements.img.value;
    // let newImgUrl= document.getElementById('newUrl').value
    let newImgUrl= textInput.current.value
    fetch('/addNewImg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, body: JSON.stringify({newImgUrl})
    }).then(r => r.json())
        .then(data => {
            console.log(data)
            return data;
        })
  }

  return (

    <div className="AppCont">

      <div className="appHeader">
        {/* {director.map((newDir, index) => {

          return (<DirectorInfo organization={newDir.organization}
            img={newDir.img}
            directorName={newDir.directorName} />)
        })
        } */}

        <h1>Images Viewer</h1>


      </div>

      {/* add new img */}
      <div className="appAdding">

        <input id="newUrl" ref={textInput} type="text" placeholder="Enter URL" />
        <button className="addNewImg" onClick={addImg}>Add New Image</button>



      </div>

      {/* show imgs */}
      <div className="showImgs">

      </div>
      {/* sort imgs */}
      <div className="sortImgs">

      </div>


      {/* AppCont /div */}
    </div>


  );
};


export default App;

////////////////////////////////////

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (<div></div>

  )
}

function Users() {
  return (
    <div className="summaryDetails">

      <SummaryD />

    </div>
  )
}

const summaryDetailes = [
  { sumTitle: 'ניסיון תעסוקתי', sumText: ['מנכ"ל פוקס', 'דירקטור קן השקעות', 'סמנכ"ל כספים מחסני חשמל', '  אלוף משנה 2008'] }

]
////////////////////////////////////////////////////////////////////////////////////////////////
