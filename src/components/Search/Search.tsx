import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { fetchSearchData } from '../../store/reducers/CardsActions';

function Search() {
  const [request, setRequest] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(fetchSearchData(request));
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRequest(e.target.value);
  };
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, m: '0 15px' }}
    >
      <InputBase
        placeholder="Search"
        sx={{ ml: 1, flex: 1 }}
        value={request}
        onChange={(e) => handleChange(e)}
      />
      <IconButton onClick={onSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
