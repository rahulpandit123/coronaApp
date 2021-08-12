import React from "react";
import mask from "../logoimage/mask.png";
import "./home.css";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <div className='home'>
        {/* <Header />
      <IndCovid />
      <CoronaSymptions /> */}
        {/* <h1> Corona Status </h1> */}
        <img
          src={mask}
          alt='mask'
          width='100%'
          height='100px'
          className='mask1'
          background-image='no-repeat'
        />
        <article className='content'>
          <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a
            newly discovered coronavirus.
          </p>
          <p>
            Most people infected with the COVID-19 virus will experience mild to
            moderate respiratory illness and recover without requiring special
            treatment. Older people, and those with underlying medical problems
            like cardiovascular disease, diabetes, chronic respiratory disease,
            and cancer are more likely to develop serious illness.
          </p>
          <p>
            The best way to prevent and slow down transmission is to be well
            informed about the COVID-19 virus, the disease it causes and how it
            spreads. Protect yourself and others from infection by washing your
            hands or using an alcohol based rub frequently and not touching your
            face.
          </p>{" "}
          <p>
            The COVID-19 virus spreads primarily through droplets of saliva or
            discharge from the nose when an infected person coughs or sneezes,
            so it’s important that you also practice respiratory etiquette (for
            example, by coughing into a flexed elbow).
          </p>{" "}
        </article>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
