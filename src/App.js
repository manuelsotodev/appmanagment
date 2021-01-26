import React, {useState, useEffect} from 'react'; 
import './App.css';
import Loader from './components/loader/Loader.js'
import SignIn from './components/SignIn.js'

function App() {
  let load;
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 6000)
  }, [])

  if (loading) {
    load = <Loader />;
  } else {
    load = <SignIn />;
  }

  return (
    
    <div>
      {load}
    </div>

  );
}

export default App;
