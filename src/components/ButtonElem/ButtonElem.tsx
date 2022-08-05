import { Button } from '@mui/material';
import React from 'react';
import { TypeButton } from '../types';
import style from './ButtonElem.module.scss';

function ButtonElem({ buttonClassName, colorType = 'primary', children, onClick, id }: TypeButton) {
  return (
    <Button
      className={`${style.btn}, ${buttonClassName}`}
      type="button"
      color={colorType}
      onClick={(e) => onClick(e)}
      id={id}
    >
      {children}
    </Button>
  );
}

export default ButtonElem;
