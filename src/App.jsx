import Navbar from "./components/Navbar/Navbar";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Greeting message={"We love React!"}/>
    </div>
  );
}

export default App;
