import { ButtonGroup } from '@mui/material';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { listSlice } from '../../store/reducers/ListSlice';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';

function SortBlock() {
  const sortData = ['popular', 'top rated', 'upcoming'];
  const searchData = ['popular', 'top_rated', 'upcoming'];
  const [activeEl, setActiveEl] = useState(sortData[0]);
  const { changeSort } = listSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (i: number) => {
    dispatch(changeSort(searchData[i]));
    setActiveEl(sortData[i]);
  };
  return (
    <ButtonGroup className={style.container} color="secondary">
      {sortData.map((el, i) => {
        return (
          <ButtonElem
            buttonClassName={classNames(style.btn, { [style.active]: activeEl === el })}
            onClick={() => handleChange(i)}
            key={el}
          >
            {el}
          </ButtonElem>
        );
      })}
    </ButtonGroup>
  );
}

export default SortBlock;
