import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [searchParams] = useSearchParams();
  const [request, setRequest] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRequest(e.target.value);
  };
  const query = searchParams.get('q');
  useEffect(() => {
    setRequest(query || '');
  }, [query]);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, m: '0 15px' }}
    >
      <InputBase
        placeholder="Search"
        sx={{ ml: 1, flex: 1 }}
        value={request}
        onChange={handleChange}
      />
      <IconButton style={{ width: 45, height: 45 }}>
        <Link to={`/search?q=${request}`}>
          <SearchIcon color="primary" />
        </Link>
      </IconButton>
    </Paper>
  );
}

export default Search;
