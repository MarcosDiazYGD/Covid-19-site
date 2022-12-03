import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { IntlProvider, FormattedMessage } from 'react-intl'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SearchCountry from "./pages/SearchCountry";
import Tips from "./pages/Tips";

function App() {

  return (
    <IntlProvider locale="en-US" messages={{}}>
      <HashRouter >
        <NavBar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/searchcountry" element={<SearchCountry />}/>
              <Route path="/tips" element={<Tips />} />
            </Routes>
            <footer className="footer">
              <div>made with <i className="fa-solid fa-heart"></i> by <span className="name-reference">Marcos Diaz</span></div>
            </footer>
          </div>
      </HashRouter>
    </IntlProvider>
  );
}

export default App;
