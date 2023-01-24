import React from 'react';
import { Modal } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { actionsTrailer } from '../../store/reducers/Trailer/TrailerSlice';
import Loader from '../Loader/Loader';
import style from './Trailer.module.scss';

function Trailer() {
  const { key, error, loading, isModalOpen } = useAppSelector((state) => state.trailer);
  const dispatch = useAppDispatch();
  const { switchIsModalOpen, resetState } = actionsTrailer;

  const onClose = () => {
    dispatch(switchIsModalOpen(false));
    dispatch(resetState());
  };

  if (error !== '') return <div>{error}</div>;

  return (
    <Modal
      open={isModalOpen}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      data-testid="trailer"
    >
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <iframe
          className={style.frame}
          title="youtube"
          src={`https://www.youtube.com/embed/${key}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </Modal>
  );
}

export default Trailer;
