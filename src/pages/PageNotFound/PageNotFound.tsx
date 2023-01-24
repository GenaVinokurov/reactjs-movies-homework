import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import style from './PageNotFound.module.scss';

function PageNotFound() {
  return (
    <div className={style.container} title="not found page">
      <Link to="/" className={style.btn}>
        <Button variant="contained" color="success">
          Go to home page
        </Button>
      </Link>
    </div>
  );
}

export default PageNotFound;
