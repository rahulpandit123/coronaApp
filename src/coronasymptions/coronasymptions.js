import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./coronasymptions.css";
import Footer from "../Footer/Footer";

const CoronaSymptions = () => {
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
    <div className='complete'>
      <div className='currentdata'>
        <h2 className='title'> Corona Virus Today Status</h2>
        <span className='span'>
          <h2>Today New Cases</h2>
          <h2>Today Recoverd</h2>
          <h2>Active Case</h2>
          <h2>Today Deaths</h2>
        </span>
        <br></br>
        <span className='span'>
          <h2>{data && data.deltaconfirmed}</h2>
          <h2>{data && data.deltarecovered}</h2>
          <h2>{data && data.active}</h2>
          <h2>{data && data.deltadeaths}</h2>
        </span>
      </div>

      <div className='youtube'>
        <iframe
          width='900'
          height='445'
          src='https://www.youtube.com/embed/EDrgwptq6ug'></iframe>
      </div>

      <div className='Symptoms'>
        <h2 className='sys'>Symptoms for Corona Virus</h2>
        <span className='syscro'>
          <h2>Running Nose</h2>
          <h2>Sore Throat</h2>
          <h2>Weekness</h2>
        </span>
        <br />
        <span className='syscro'>
          <h2>Feaver</h2>
          <h2>Headache</h2>
          <h2>Cough</h2>
        </span>
      </div>
      <hr className='hr'></hr>
      <article className='content1'>
        <p>
          {" "}
          COVID-19 affects different people in different ways. Most infected
          people will develop mild to moderate illness and recover without
          hospitalization.
        </p>{" "}
        <p className='bold'>Most common symptoms:</p>
        <ul>
          <li>fever</li>
          <li>Dry Cough</li>
          <li>tiredness</li>
        </ul>
        <p className='bold'>Common Symptoms</p>
        <ul>
          <li>Aches and Pain</li>
          <li>Sore Throat</li>
          <li>diarrhoea</li>
          <li>conjunctivitis</li>
          <li> Headache</li>
          <li>Loss of taste or smell</li>
          <li>A rash on skin, or discolouration of fingers or toes.</li>
        </ul>{" "}
        <p className='bold'> Serious symptoms</p>
        <ul>
          <li>difficulty breathing or shortness of breath.</li>
          <li>chest pain or pressure.</li>
          <li>loss of speech or movement.</li>
        </ul>
        <p>
          {" "}
          Seek immediate medical attention if you have serious symptoms. Always
          call before visiting your doctor or health facility. People with mild
          symptoms who are otherwise healthy should manage their symptoms at
          home. On average it takes 5–6 days from when someone is infected with
          the virus for symptoms to show, however it can take up to 14 days.
        </p>
      </article>
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default CoronaSymptions;
