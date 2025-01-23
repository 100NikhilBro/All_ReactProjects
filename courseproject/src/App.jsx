import DiaplayCards from "./compo/DiaplayCards";
import Filter from "./compo/Filter";
import "./App.css";

function App() {
  return (
   <div className="App h-full bg-black text-white">


    <Filter></Filter>
    <DiaplayCards className="grid-col-3 grid"></DiaplayCards>
  
   </div>
  );
}

export default App;
