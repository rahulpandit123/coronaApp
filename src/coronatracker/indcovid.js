import React, { useEffect, useState } from "react";
import "./indcovid.css";
import Footer from "../Footer/Footer";

const IndCovid = () => {
  const [data, setdata] = useState([]);

  const getCoronaData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actulaData = await res.json();
      console.log(actulaData);
      console.log(actulaData.statewise);
      // actulaData.statewise;
      setdata(actulaData.statewise);
      // console.log(act.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCoronaData();
  }, []);

  return (
    <div>
      <div className='container-fluid mt-5'>
        {data.recovered}
        <div className='table-responsive'>
          <h1 className='heading'>India Corona Status StateWise </h1>
          <table className='covidtable table table-hover'>
            <thead className='header thead-dark'>
              <tr>
                <th className='hd' id='state'>
                  State
                </th>
                <th className='hd' id='totalcase'>
                  Today Case
                </th>
                <th className='hd' id='activecases'>
                  Active Cases
                </th>
                <th className='hd' id='recovered'>
                  Today Recovered
                </th>
                <th className='hd' id='deaths'>
                  Today Deaths
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((d, i) => i !== 0)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.state}</td>
                      <td>{item.deltaconfirmed}</td>
                      <td>{item.active}</td>
                      <td>{item.deltarecovered}</td>
                      <td>{item.deltadeaths}</td>
                    </tr>
                  );
                })}
              {data
                .filter((it, c) => c == 0)
                .map((j, k) => {
                  return (
                    <tr key={k}>
                      <td>{j.state}</td>
                      <td>{j.deltaconfirmed}</td>
                      <td>{j.active}</td>
                      <td>{j.deltarecovered}</td>
                      <td>{j.deltadeaths}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default IndCovid;
