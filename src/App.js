import NavBar from './components/navbar';
import Location from './components/locations';
import data from './data.js';
const locationData = data.map((x) => <Location id={x.id} x={x} />);
function App() {
  return (
    <div className="App">
      <NavBar />
      <section>{locationData}</section>
    </div>
  );
}

export default App;
