import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../../store/store';
import { actionsCardsMovie } from '../../store/reducers/Cards/CardsMovieSlice';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';
import { SORT_DATA, SEARCH_DATA } from '../../constants';

function SortBlock() {
  const navigate = useNavigate();
  const { changeSort } = actionsCardsMovie;
  const [activeEl, setActiveEl] = useState(SORT_DATA[0]);
  const dispatch = useAppDispatch();

  const handleChange = (i: number) => {
    dispatch(changeSort(SEARCH_DATA[i]));
    setActiveEl(SORT_DATA[i]);
    navigate(`/?sort=${SEARCH_DATA[i]}&page=1`);
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
            <FormattedMessage id={el} />
          </ButtonElem>
        );
      })}
    </ButtonGroup>
  );
}

export default SortBlock;
