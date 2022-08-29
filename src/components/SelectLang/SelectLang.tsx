import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import style from './SelectLang.module.scss';

function SelectLang() {
  const [lang, setLang] = useState('En');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <Select value={lang} onChange={handleChange} className={style.select}>
      <MenuItem value="En">En</MenuItem>
      <MenuItem value="Ru">Ru</MenuItem>
    </Select>
  );
}

export default SelectLang;
