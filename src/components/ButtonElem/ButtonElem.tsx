import { Button } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import { TypeButton } from '../types';
import style from './ButtonElem.module.scss';

function ButtonElem({
  buttonClassName,
  colorType = 'primary',
  variant,
  children,
  onClick,
  id,
}: TypeButton) {
  const btnClass = classNames(style.btn, buttonClassName);
  return (
    <Button
      className={btnClass}
      type="button"
      color={colorType}
      onClick={(e) => onClick(e)}
      id={id}
      variant={variant}
    >
      {children}
    </Button>
  );
}

export default ButtonElem;
