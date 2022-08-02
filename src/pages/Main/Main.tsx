import { Button } from '@mui/material';
import React from 'react';
import style from './Main.module.scss';

function Main() {
  return (
    <main className={style.container}>
      <Button>Click</Button>
    </main>
  );
}

export default Main;
