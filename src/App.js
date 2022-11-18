import "./App.css";

import Navbar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  return (
    <>
      <Navbar />
      {/* <header className="App-header"></header> */}
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
