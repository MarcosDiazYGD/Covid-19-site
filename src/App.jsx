import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { IntlProvider, FormattedMessage } from 'react-intl'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SearchCountry from "./pages/SearchCountry";
import Tips from "./pages/Tips";
import msgEnglish from './lang/en-US.json'
import msgSpanish from './lang/es-ES.json'
import { useSelector } from 'react-redux'
import { useState } from "react";
import { setLang } from "./store/slices/lang.slice";
import { useEffect } from "react";

function App() {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('')

  const lang = useSelector(state => state.lang)

  useEffect(() => {
    if (lang === 'spanish') {
      return setLanguage(msgSpanish)
    } else if (lang === 'english') {
      return setLanguage(msgEnglish)
    }

    if (lang === 'spanish') {
      return setCode('es-ES')
    } else if (lang === 'english') {
      return setCode('en-US')
    }

  }, [lang])



  return (
    <IntlProvider locale={code} messages={language}>
      <HashRouter >
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchcountry" element={<SearchCountry />} />
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
