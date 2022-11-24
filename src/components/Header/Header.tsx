import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Search from '../Search';
import SelectLang from '../SelectLang';
import style from './Header.module.scss';

function Header() {
  return (
    <AppBar position="static" sx={{ p: '5px 10px', mb: '35px' }}>
      <Toolbar className={style.container}>
        <Link to="/">
          <Typography variant="h4" component="h1" className={style.title}>
            <FormattedMessage id="h1-movies" />
          </Typography>
        </Link>
        <Search />
        <SelectLang />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
