import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../../store/store';
import { actionsCardsMovie } from '../../store/reducers/CardsMovieSlice';
import ButtonElem from '../ButtonElem';
import style from './SortBlock.module.scss';
import { SORT_DATA, SEARCH_DATA } from '../../constants';

function SortBlock() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { changeSort } = actionsCardsMovie;
  const search = searchParams.has('search');
  const sort = searchParams.has('sort');
  const [activeEl, setActiveEl] = useState(() => (search ? '' : SORT_DATA[0]));
  const dispatch = useAppDispatch();

  const handleChange = (i: number) => {
    dispatch(changeSort(SEARCH_DATA[i]));
    setActiveEl(SORT_DATA[i]);
    navigate(`/?sort=${SEARCH_DATA[i]}&page=1`);
  };
  useEffect(() => {
    if (search) setActiveEl('');
    else if (!search && !sort) {
      dispatch(changeSort(SEARCH_DATA[0]));
      setActiveEl(SORT_DATA[0]);
    }
  }, [search, sort, dispatch, changeSort]);

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
