import './App.css';
import Stars from './components/Stars';
function App() {
  return ( 
 
    <div className='container'>

      <Stars count={2}/>
      <Stars count={3}/>
      <Stars count={5}/>
      <Stars count={6}/>

    </div>


  );
}

export default App;
