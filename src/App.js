import Navbar from './navbar';
import Cover from './cover';
import LoadingImage from './Loading';
import  { useState } from 'react';
import "./page.css";

function App() {
  const [isShow,setIsShow]=useState(false);


  function LoadingScreenState(){
    setIsShow(true);
  }


  return (
    <div className="selection">
    <LoadingImage Show={isShow} />
    <Navbar />
    <Cover LoadEvent={LoadingScreenState} Show={isShow}/>
    </div>
  );
}
export default App;
