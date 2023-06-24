import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./components/movies";
import Modal from "./components/modal";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <Modal />
    </div>
  );
}

export default App;
