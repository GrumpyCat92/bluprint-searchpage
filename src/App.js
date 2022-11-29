import "./App.css";
import Commercial from "./Components/Commercial";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Search />
      <br />
      <Commercial>
        <h1>РЕКЛАМА</h1>
      </Commercial>
      <Footer />
    </>
  );
}

export default App;
