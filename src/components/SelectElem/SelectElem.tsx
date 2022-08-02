import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import style from './SelectElem.module.scss';

function SelectElem() {
  const [lang, setLang] = useState('En');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <Select
      value={lang}
      onChange={handleChange}
      className={style.select}
      sx={{ color: '#fff', width: '70px', height: '40px' }}
    >
      <MenuItem value="En">En</MenuItem>
      <MenuItem value="Ru">Ru</MenuItem>
    </Select>
  );
}

export default SelectElem;
