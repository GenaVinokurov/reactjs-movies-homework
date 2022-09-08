import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import style from './SelectLang.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { langSlice } from '../../store/reducers/LangSlice';

function SelectLang() {
  const lang = useAppSelector((state) => state.langReducer.lang);
  const { changeLang } = langSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeLang(event.target.value as string));
  };
  return (
    <Select value={lang} onChange={handleChange} className={style.select}>
      <MenuItem value="En">En</MenuItem>
      <MenuItem value="Ru">Ru</MenuItem>
    </Select>
  );
}

export default SelectLang;
