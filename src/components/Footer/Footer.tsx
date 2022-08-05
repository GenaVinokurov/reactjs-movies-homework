import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import style from './Footer.module.scss';

function Footer() {
  return (
    <AppBar position="static" sx={{ p: '5px 10px' }}>
      <Toolbar className={style.container}>
        <Typography variant="h6" component="span">
          2022
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="https://github.com/GenaVinokurov/reactjs-movies-homework"
          target="_blank"
          sx={{ color: '#fff', textDecoration: 'none' }}
        >
          Github
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
