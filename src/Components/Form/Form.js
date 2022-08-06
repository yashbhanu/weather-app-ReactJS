import { TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './Form.module.css';

function SearchForm({ submitRequest, isError }) {

  const [location, setLocation] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    submitRequest(location);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* <input type="text"  aria-label="location" className={`${styles.input} form-control`} placeholder="Search Location"/> */}
        <div className={`${styles.container2} form-control`}>
          <TextField id="filled-basic" label="Location" variant="filled" value={location} onChange={(e) => setLocation(e.target.value)} aria-label="location" required className={`${styles.input} form-control`} />
        </div>
        <div className={`${styles.container} form-control`}>
          <button type="submit" className={styles.buttonLocation} onClick={onSubmit}>
            SEARCH
          </button>

        </div>
          <p>{isError}</p>

      </form>
    </div>
  )
}

export default SearchForm;