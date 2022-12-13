import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import style from './SelectLang.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { actionsLanguage } from '../../store/reducers/LangSlice';

function SelectLang() {
  const lang = useAppSelector((state) => state.language.lang);
  const { changeLang } = actionsLanguage;
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeLang(event.target.value as string));
  };

  return (
    <Select value={lang} onChange={handleChange} className={style.select}>
      <MenuItem value="en">En</MenuItem>
      <MenuItem value="ru">Ru</MenuItem>
    </Select>
  );
}

export default SelectLang;
