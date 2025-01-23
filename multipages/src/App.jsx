import './App.css';
import Nav from './compo/Nav';
import Home from './compo/Home';
import { Routes , Route } from 'react-router-dom';
import Cart from './compo/Cart';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path='/cart' element={<Cart></Cart>}></Route>
</Routes>

    </div>
  );
}

export default App;
