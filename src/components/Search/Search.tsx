import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, m: '0 15px' }}
    >
      <InputBase
        placeholder="Search"
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ 'data-testid': 'search' }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
