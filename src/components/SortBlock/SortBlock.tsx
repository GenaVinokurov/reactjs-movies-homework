import React, { useState } from 'react';
import { ButtonGroup } from '@mui/material';
import classNames from 'classnames';
import { useAppDispatch } from '../../store/store';
import { actionsCardsMovie } from '../../store/reducers/CardsMovieSlice';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';
import { SORT_DATA, SEARCH_DATA } from '../../constants';

function SortBlock() {
  const [activeEl, setActiveEl] = useState(SORT_DATA[0]);
  const { changeSort } = actionsCardsMovie;
  const dispatch = useAppDispatch();

  const handleChange = (i: number) => {
    dispatch(changeSort(SEARCH_DATA[i]));
    setActiveEl(SORT_DATA[i]);
  };
  return (
    <ButtonGroup className={style.container} color="secondary">
      {SORT_DATA.map((el, i) => {
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
