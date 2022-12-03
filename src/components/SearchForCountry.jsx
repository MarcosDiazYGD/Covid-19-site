import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchForCountry = () => {
  const [countryData, setCountryData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isLokingFor, setIsLokingFor] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    axios
      .get(`https://disease.sh/v3/covid-19/countries/${inputValue}`)
      .then((res) => {
        setCountryData(res.data);
        setIsLokingFor(true);
      });
    setCountryData({});
  };
  return (
    <>
      <div className="Component-SearchForCountry">
        <form onSubmit={submit}>
          <div className="containerInputSearch">
            <h2>Search by Country</h2>
            <label htmlFor="countryName">
            </label>
            <div className="container-inputandbutton">
              <input
                className="inputSearch"
                type="text"
                name=""
                id="countryName"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="buttonSearch">search</button>
            </div>
          </div>
        </form>

        {isLokingFor ? (
          <div className="resultsOfSearch">
            <section className="countryInformation">
              <h2>{countryData.country}</h2>
              <div className='countryDetails'>
                <p>{countryData.continent}</p>
                <p>
                  Population: <span>{countryData.population}</span>
                </p>
              </div>
              <img src={countryData.countryInfo?.flag} />
            </section>

            <section className="countryToday">
              <h2>Today</h2>
              <div className="todayInformation">
                <p>Today cases:<br /> <span>{countryData.todayCases}</span></p>
                <p>Today deaths:<br /> <span>{countryData.todayDeaths}</span></p>
                <p>Today recovered:<br /> <span>{countryData.todayRecovered}</span></p>
              </div>
            </section>

            <section className="generalInformation">
              <h2>information</h2>
              <div className="gnrl_info--info">
                <div>
                  <p>Cases:<br /> <span>{countryData.cases}</span></p>
                </div>

                <div>
                  <p>Deaths:<br /> <span>{countryData.deaths}</span></p>
                </div>

                <div>
                  <p>Recovered:<br /> <span>{countryData.recovered}</span></p>
                </div>

                <div>
                  <p>Active:<br /> <span>{countryData.active}</span></p>
                </div>

                <div>
                  <p>Critical:<br /> <span>{countryData.critical}</span></p>
                </div>
              </div>
            </section>

            <section className="informationPerMillion">
              <h2>Per one million</h2>
              <div className="ipm--info">
                <p>
                  Cases per one million{" "} <br />
                  <span>{countryData.casesPerOneMillion}</span>
                </p>
                <p>
                  Deaths per one million{" "} <br />
                  <span>{countryData.deathsPerOneMillion}</span>
                </p>
                <p>
                  Recovered per one million{" "} <br />
                  <span>{countryData.recoveredPerOneMillion}</span>
                </p>
                <p>
                  Test per one million{" "} <br />
                  <span>{countryData.testsPerOneMillion}</span>
                </p>
                <p>
                  Active per one million{" "} <br />
                  <span>{countryData.activePerOneMillion}</span>
                </p>
                <p>
                  Critical per one million{" "} <br />
                  <span>{countryData.criticalPerOneMillion}</span>
                </p>
              </div>
            </section>

            <section className="informationPerPeople">
              <h2>Per People</h2>
              <div className="ipp--info">
                <p>
                  One case per people: <br /> <span>{countryData.oneCasePerPeople}</span>
                </p>
                <p>
                  One death per people: <br />
                  <span>{countryData.oneDeathPerPeople}</span>
                </p>
                <p>
                  One test per people: <br /><span>{countryData.oneTestPerPeople}</span>
                </p>
              </div>
            </section>
          </div>
        ) : (
          <div className="containerNoSearch">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h3 className="messajeSearch">Search for a country please</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchForCountry;
