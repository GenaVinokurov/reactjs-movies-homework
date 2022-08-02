import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Search from '../Search';
import SelectElem from '../SelectElem';
import style from './Header.module.scss';

function Header() {
  return (
    <AppBar position="fixed" sx={{ top: 0, bottom: 'auto', p: '5px 10px' }}>
      <Toolbar className={style.container}>
        <Typography variant="h6" component="h1">
          Movies
        </Typography>
        <Search />
        <SelectElem />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
