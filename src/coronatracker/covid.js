import React, { useEffect, useState } from "react";
import "./covid.css";
import Footer from "../Footer/Footer";
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actulaData = await res.json();

      console.log(actulaData.statewise[0]);
      setData(actulaData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className='background'>
      <section>
        <h1 className='live' id='animate'>
          {" "}
          Live
        </h1>
        <h2 className='tracking'>Live Corona Tracking</h2>
        <ul className='coronadata'>
          <li className='card1'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'>
                  <span id='small'> Our </span> Country{" "}
                </p>
                <p className='card_total card_small'> INDIA </p>
              </div>
            </div>
          </li>

          <li className='card2'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'>
                  <span id='small'> Total </span> Recoverd{" "}
                </p>
                <p className='card_total card_small'> {data.recovered} </p>
              </div>
            </div>
          </li>

          <li className='card3'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'>
                  <span id='small'> Total </span> Confirmed{" "}
                </p>
                <p className='card_total card_small'> {data.confirmed} </p>
              </div>
            </div>
          </li>
        </ul>{" "}
        <br></br>
        <ul className='coronadata'>
          <li className='card4'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'>
                  <span id='small'> Total </span> DEATHS{" "}
                </p>
                <p className='card_total card_small'> {data.deaths} </p>
              </div>
            </div>
          </li>

          <li className='card5'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'>
                  <span id='small'> Total </span> ACTIVE{" "}
                </p>
                <p className='card_total card_small'> {data.active} </p>
              </div>
            </div>
          </li>

          <li className='card6'>
            <div className='card_main'>
              <div className='card_inner'>
                <p className='card_name'>
                  <span id='small'> Last </span> UPDATE{" "}
                </p>
                <p className='card_total card_small'>
                  {" "}
                  {data.lastupdatedtime}{" "}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <Footer />;
    </div>
  );
};

export default Covid;

//API for Covid - "https://covid-19-data.p.rapidapi.com/country/all"
