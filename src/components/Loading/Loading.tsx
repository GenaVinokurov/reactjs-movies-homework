import React from 'react';
import style from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={style.container}>
      <div className={style.spinner} title="spinner" />
    </div>
  );
}
