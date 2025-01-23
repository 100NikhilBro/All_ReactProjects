import './App.css';

import {Route , Routes} from 'react-router-dom';
import DPage from './compooo/DPage';
import Logic from './compooo/Logic';
import Instuction from './compooo/Instuction';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<DPage></DPage>}></Route>
        <Route path='/logi' element={<Logic></Logic>}></Route>
        <Route path='/instructions' element={<Instuction></Instuction>}></Route>
        <Route path='*' element={<div>Error</div>}></Route>
      </Routes>


      
    </div>
  );
}

export default App;
