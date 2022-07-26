import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ModelPagination = (props) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.numberOfPages} 
        color="primary" 
        sx={{ "& .MuiPaginationItem-root": {color: "#fff"}}}
        page={props.currentPage}
        onChange={props.currentPageHandler}
      />
    </Stack>
  );
}

export default ModelPagination;