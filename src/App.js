import Navbar from './navbar';
import Cover from './cover';
import LoadingImage from './Loading';
import react, { useState } from 'react';

function App() {
  const [isShow,setIsShow]=useState(false);


  function LoadingScreenState(){
    setIsShow(true);
  }


  return (
    <react.Fragment>
    <LoadingImage Show={isShow} />
    <Navbar />
    <Cover LoadEvent={LoadingScreenState} Show={isShow}/>
    </react.Fragment>
  );
}
export default App;
