import React from 'react';
import Forecast from '../Forecast/Forecast';
import SearchForm from '../Form/Form';
import styles from './MainPage.module.css';
import ForecastData from '../../ForecastData';

function MainPage() {

  const { isError, isLoading, forecast, submit} = ForecastData();

  const onSubmit = (value) => {
    submit(value);
  }

  return (
    <>
    <div className={`${styles.header}`}>
        <h1 className={`${styles.head}`}>Weather <span> Forecast </span></h1>
    </div>

    {!forecast && (
      <>
      <div className={`${styles.box} position relative`}>
          {!isLoading && <SearchForm submitRequest={onSubmit} isError={isError}/>}
          {isLoading && <h1>Loading...</h1>}
      </div>
       </>
    )}
     {forecast && <Forecast forecast = {forecast}/>}

    </>
  )
}

export default MainPage;